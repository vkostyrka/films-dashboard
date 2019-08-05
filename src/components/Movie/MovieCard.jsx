import React from "react";
import MovieConstants from "./MovieConstants";
import MovieItem from "./MovieItem";
import Modal from "react-modal"

export default class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreDataAboutMovie: {}
    };
    this.showMoreLessMovieInfo = this.showMoreLessMovieInfo.bind(this);
    this.isMoreDataAboutMoviePresent = this.isMoreDataAboutMoviePresent.bind(this);
  }

  isMoreDataAboutMoviePresent() {
    return !!Object.entries(this.state.moreDataAboutMovie).length
  }

  showMoreLessMovieInfo() {
    if (this.isMoreDataAboutMoviePresent()) {
      this.setState({
        moreDataAboutMovie: {}
      })
    } else {
      fetch(`${process.env.REACT_APP_API_HOST}movie/${this.props.attributes.id}?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            moreDataAboutMovie: data
          })
        });
    }
  }

  renderMoreInfo() {
    if (this.isMoreDataAboutMoviePresent()) {
      return (
        <MovieItem movieData={this.state.moreDataAboutMovie}/>
      )
    }
  }

  render() {
    const poster = this.props.attributes.poster_path
      ? <img
        src={MovieConstants.imageSource + this.props.attributes.poster_path}
        className="card-img-top"
        alt={this.props.title}
      />
      : <img
        src={process.env.PUBLIC_URL + '/images/default-movie.jpg'}
        className="card-img-top"
        alt="default"
      />;

    return (
      <div className="col-6">
        <div className="card mb-3" style={{maxWidth: "740px"}}>
          <div className="row no-gutters">
            <div className="col-md-4">
              {poster}
              <div className="card">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Popularity:{" "}
                    <span className="badge badge-secondary">
                    {this.props.attributes.popularity}
                  </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card-body">
                <div className="d-flex justify-content-center">
                  <h2 className="card-title">{this.props.attributes.title}</h2>
                  {this.props.attributes.original_language}
                </div>
                <p className="card-text">{this.props.attributes.overview}</p>
                <ul className="d-flex justify-content-around">
                <span>
                  Vote{" "}
                  <span className="badge badge-secondary">
                    {this.props.attributes.vote_count}
                  </span>
                </span>
                  <span>
                  Vote average{" "}
                    <span className="badge badge-secondary">
                    {this.props.attributes.vote_average}
                  </span>
                </span>
                </ul>
                <p className="card-text">
                  <small className="text-muted">
                    Release: {this.props.attributes.release_date}
                  </small>
                </p>
                <button
                  className="btn btn-info"
                  onClick={this.showMoreLessMovieInfo}>
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
        <Modal
          onRequestClose={this.showMoreLessMovieInfo}
          isOpen={this.isMoreDataAboutMoviePresent()}
        >
          {this.renderMoreInfo()}
        </Modal>
      </div>
    );
  }
}
