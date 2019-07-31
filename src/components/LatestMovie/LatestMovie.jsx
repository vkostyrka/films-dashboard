import React from 'react';
import MovieCard from "../Movie/MovieCard";

class LatestMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latestMovie: {} }
  }

  componentWillMount() {
    fetch(`${process.env.REACT_APP_API_HOST}movie/latest?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        this.setState({latestMovie: data});
      })
  }

  render() {
    const movie = this.state.latestMovie;
    return(
      <div className="latest-film">
        <MovieCard attributes={movie} />
      </div>
    )
  }
}

export default LatestMovie
