import React from 'react';
import MovieCard from "../Movie/MovieCard";
import MovieItem from "../Movie/MovieItem";

class SearchByNameTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      results: [],
      errorsList: [],
      moreDetailsMovie: {},
    };
    this.sendRequestBySearchInput = this.sendRequestBySearchInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showMoreInfo = this.showMoreInfo.bind(this);
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

  showMoreInfo(movieId) {
    fetch(`${process.env.REACT_APP_API_HOST}movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          results: this.state.results.filter(item => item.id === movieId),
          moreDetailsMovie: data
        })
      });
  }

  renderMoreInfoBlock() {
    if (Object.entries(this.state.moreDetailsMovie).length) {
      return <MovieItem movieData={this.state.moreDetailsMovie}/>;
    }
  }

  render() {
    const filmsList = this.state.results;
    const resultSearch = filmsList.map(item =>
      <MovieCard attributes={item} showMoreInfo={this.showMoreInfo} key={item.id}/>
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
          {this.renderMoreInfoBlock()}
        </div>
      </div>
    );
  }
}

export default SearchByNameTab
