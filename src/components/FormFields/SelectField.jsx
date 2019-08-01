import React, { Component } from "react";

export default class SelectField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: "",
    };
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({ selectedValue: value });
    this.props.action(value);
  };

  optionValues = (items, attributes) =>
    items.map(item => (
      <option key={item.id} value={item[attributes.value]}>
        {item[attributes.content]}
      </option>
    ));

  render() {
    const { optionsList, selectId, attributes } = this.props;
    if (!optionsList || !selectId || !attributes) return null;

    const value = this.state.selectedValue;
    const handleChange = this.handleChange;
    const options = this.optionValues(optionsList, attributes);

    return (
      <div className="form-group">
        <label htmlFor={selectId} />
        <select
          className="custom-select border border-info rounded-lg"
          onChange={handleChange}
          value={value}
          id={selectId}
        >
          {options}
        </select>
      </div>
    );
  }
}
