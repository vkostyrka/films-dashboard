import React from 'react';
import MovieCard from "../Movie/MovieCard";

class LatestMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {latestMovie: {}};
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_HOST}movie/latest?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        this.setState({latestMovie: data});
      })
  }

  render() {
    return (
      <div className="latest-film row">
        <MovieCard attributes={this.state.latestMovie} />
      </div>
    )
  }
}

export default LatestMovie
