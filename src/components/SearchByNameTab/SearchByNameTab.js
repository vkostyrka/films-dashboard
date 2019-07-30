import React from 'react';

class SearchByNameTab extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      results: [],
      errorsList: [],
    };
  }

  sendRequest() {
    fetch(`${process.env.REACT_APP_API_HOST}search/movie?query=${this.state.searchInput}&api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        data.results.length ?
          this.setState({results: data.results, errorsList: []}) :
          this.setState({results: [], errorsList: ["Not Found"]})
      })
      .catch(error => {
        this.setState({errorsList: error.errors})
      })
  }

  handleChange (e) {
    this.setState({searchInput: e.target.value})
  }

  render() {
    return (
      <div className="search-by-name-tab">
        <input placeholder="Enter a film name" type="text" onChange={this.handleChange.bind(this)}/>
        <input type="submit" onClick={this.sendRequest.bind(this)} value="Search" />
      </div>
    );
  }
}

export default SearchByNameTab
