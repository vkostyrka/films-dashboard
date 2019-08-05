import React from 'react';
import MovieCard from "../Movie/MovieCard";

class SearchByNameTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      results: [],
      errorsList: [],
    };
    this.sendRequestBySearchInput = this.sendRequestBySearchInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  sendRequestBySearchInput() {
    fetch(`${process.env.REACT_APP_API_HOST}search/movie?query=${this.state.searchInput}&api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        data.total_results ?
          this.setState({results: data.results, errorsList: [], moreDetailsMovie: {}}) :
          this.setState({results: [], errorsList: ["Not Found"], moreDetailsMovie: {}})
      })
      .catch(error => {
        this.setState({errorsList: error.errors})
      })
  }

  handleChange(e) {
    this.setState({searchInput: e.target.value})
  }

  render() {
    const filmsList = this.state.results;
    const resultSearch = filmsList.map(item =>
      <MovieCard attributes={item} key={item.id}/>
    );
    const errors = this.state.errorsList;
    const errorsMessages = errors.map(item =>
      <p className="text-danger">{item}</p>
    );

    return (
      <div className="search-by-name-tab">
        <input placeholder="Enter a film name" type="text" onChange={this.handleChange}/>
        <input type="submit" onClick={this.sendRequestBySearchInput} value="Search"/>
        {errorsMessages}
        <div className="row">
          {resultSearch}
        </div>
      </div>
    );
  }
}

export default SearchByNameTab
