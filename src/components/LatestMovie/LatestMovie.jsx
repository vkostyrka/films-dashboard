import React from 'react';
import { connect } from "react-redux";

import MovieCard from "../Movie/MovieCard";
import { GetLatestMovie } from "../../actions/movieActions";

const mapStateToProps = store => ({ movie: store.movie });

class LatestMovie extends React.Component {
  componentDidMount() {
    // this.props.dispatch(GetLatestMovie())
    this.props.dispatch({type: "LATEST_MOVIE_CUSTOM_ELSE", payload: {}})
    this.props.dispatch({type: "LATEST_MOVIE_CUSTOM_FIELDS", payload: {}})
  }

  render() {
    const { movie } = this.props

    if(!movie.latestMovie) return null;

    return (
      <div className="latest-film row d-flex justify-content-center">
        <MovieCard attributes={movie.latestMovie} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(LatestMovie)
