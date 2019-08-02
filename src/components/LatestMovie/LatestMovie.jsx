import React from 'react';
import MovieCard from "../Movie/MovieCard";
import MovieItem from "../Movie/MovieItem";

class LatestMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latestMovie: {}, showMore: false };
    this.showMoreInfo = this.showMoreInfo.bind(this)
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_HOST}movie/latest?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        this.setState({latestMovie: data});
      })
  }

  renderMoreInfoBlock() {
    if (this.state.showMore) {
      return <MovieItem movieData={this.state.latestMovie}/>;
    }
  }

  showMoreInfo() {
    this.setState({showMore: true})
  }

  render() {
    return(
      <div className="latest-film row">
        <MovieCard attributes={this.state.latestMovie} showMoreInfo={this.showMoreInfo} />
        { this.renderMoreInfoBlock() }
      </div>
    )
  }
}

export default LatestMovie
