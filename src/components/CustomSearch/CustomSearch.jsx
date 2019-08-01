import React, { Component } from "react";

import SelectField from "../FormFields/SelectField";
import RangeField from "../FormFields/RangeField";
import MovieCard from "../Movie/MovieCard";
import Spinner from "../Spinner/Spinner";
import NetworkService from "../Services/NetworkService";

import { default as Sorts } from "./SortTypes";

export default class CustomSearch extends Component {
  constructor() {
    super();

    const MIN_VOTE = 1;
    const MAX_VOTE = 15000;
    const AVARAGE_VOTE = MAX_VOTE / 2;

    this.state = {
      genre: "",
      genres: [],
      sort: "",
      voteCountRange: {
        MIN_VOTE,
        MAX_VOTE,
        voteCount: AVARAGE_VOTE,
      },
      spinnerShow: false,
      searchResults: null,
      moreResults: null,
      totalResults: null,
    };

    this.handleSort = this.handleSort.bind(this);
    this.handleVoteRange = this.handleVoteRange.bind(this);
    this.handleVoteRangeFetch = this.handleVoteRangeFetch.bind(this);
    this.handleGeners = this.handleGeners.bind(this);
  }

  componentDidMount() {
    this.setState({ spinnerShow: true });
    this.getMovies(this.state);
    this._getMovieGenres();
  }

  componentWillUpdate(nextProps, nextState) {
    const { genre, sort } = this.state;

    if (genre !== nextState.genre || sort !== nextState.sort) {
      this.setState({ spinnerShow: true });
      this.getMovies(nextState);
    }
  }

  getMovies(params) {
    const { genre, sort, voteCountRange } = params;
    const discoverMovie = `${process.env.REACT_APP_API_HOST}discover/movie`;
    const votes = `?vote_count.gte=${voteCountRange.voteCount}`;
    const withGenres = `&with_genres=${genre}`;
    const sortBy = `&sort_by=${sort}.desc`;
    const apiKey = `&api_key=${process.env.REACT_APP_API_KEY}`;

    fetch(discoverMovie + votes + withGenres + sortBy + apiKey)
      .then(response => response.json())
      .then(data => {
        this.setState({ searchResults: data.results });
        this.setState({ totalResults: data.total_results });
        this.setState({ spinnerShow: false });
      });
  }

  _getMovieGenres() {
    NetworkService.getGenres().then(data => {
      this.setState({
        genres: data.genres,
      });
    });
  }

  handleVoteRange(value) {
    this.setState({ voteCountRange: { voteCount: value } });
  }
  handleVoteRangeFetch() {
    this.setState({ spinnerShow: true });
    this.getMovies(this.state);
  }
  handleGeners(genre) {
    this.setState({ genre: genre });
  }
  handleSort(sort) {
    this.setState({ sort: sort });
  }

  movies(searchResults) {
    const movies =
      searchResults === null || searchResults.length === 0 ? (
        <div className="d-flex flex-wrap">Not found</div>
      ) : (
        <div className="d-flex flex-wrap">
          {searchResults.map(item => (
            <MovieCard key={item.id} attributes={item} />
          ))}
        </div>
      );
    return movies;
  }

  render() {
    const genresList = this.state.genres;
    const searchResults = this.state.searchResults;
    const totalResults = this.state.totalResults;
    const spinner = this.state.spinnerShow;
    const { MIN_VOTE, MAX_VOTE, voteCount } = this.state.voteCountRange;

    return (
      <div className="d-flex p-2 align-items-center flex-column mt-4">
        <form className="border border-info rounded-lg p-4 custom-search">
          <div className="form-field">
            <SelectField
              optionsList={Sorts.list}
              action={this.handleSort}
              selectId={"sorts"}
              attributes={{ value: "query", content: "name" }}
            />
            <RangeField
              min={MIN_VOTE}
              max={MAX_VOTE}
              value={voteCount}
              handler={this.handleVoteRange}
              handlerFetch={this.handleVoteRangeFetch}
              id="rate"
              labelValue="Vote count"
            />
            <SelectField
              optionsList={genresList}
              action={this.handleGeners}
              selectId={"languages"}
              attributes={{ value: "id", content: "name" }}
            />
          </div>
        </form>
        <div className="total-results-number">{totalResults}</div>
        <Spinner show={spinner} />
        <div>{this.movies(searchResults)}</div>
      </div>
    );
  }
}
