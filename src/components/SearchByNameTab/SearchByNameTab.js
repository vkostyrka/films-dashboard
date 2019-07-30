import React from 'react';

class SearchByNameTab extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      results: {},
    };
  }

  sendRequest() {
    fetch(`${process.env.REACT_APP_API_HOST}search/movie?query=${this.state.searchInput}&api_key=${process.env.REACT_APP_API_KEY}`)
      .then(function (response) {
        console.log(response.json())
      })
  }

  handleChange (e) {
    this.setState({searchInput: e.target.value})
  }

  render() {
    return (
      <div className="search-by-name-tab">
        <input placeholder="Enter a film name" type="text" onChange={this.handleChange.bind(this)}/>
        <button onClick={this.sendRequest.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default SearchByNameTab
