import React, { Component } from "react";

export default class RangeField extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "", min: "", max: "" };

    this.handleRangeFetch = this.handleRangeFetch.bind(this);
  }

  componentDidMount() {
    const { value, min, max } = this.props;
    this.setState({
      value: value,
      min: min,
      max: max,
    });
  }

  handlerRange = event => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({ value: value });
    this.props.handler(value);
  };
  handleRangeFetch() {
    this.props.handlerFetch();
  }

  render() {
    const { min, max, value } = this.state;
    const { id, labelValue } = this.props;

    return (
      <div className="form-group text-info font-weight-bold">
        <label htmlFor="rate">
          {labelValue}: {value}
        </label>
        <input
          type="range"
          className="custom-range"
          min={min}
          max={max}
          onChange={this.handlerRange}
          onKeyUp={this.handleRangeFetch}
          onMouseUp={this.handleRangeFetch}
          value={this.state.value}
          id={id}
        />
      </div>
    );
  }
}
