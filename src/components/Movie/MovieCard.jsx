import React, { Component } from "react";
import MovieConstants from "./MovieConstants";

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="card mb-3" style={{ maxWidth: "740px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={MovieConstants.imageSource + this.props.attributes.poster_path}
                className="card-img-top"
                alt={this.props.attributes.title}
              />
              <div className="card">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Popularity:{" "}
                    <span class="badge badge-secondary">
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
                    <span class="badge badge-secondary">
                      {this.props.attributes.vote_count}
                    </span>
                  </span>
                  <span>
                    Vote average{" "}
                    <span class="badge badge-secondary">
                      {this.props.attributes.vote_average}
                    </span>
                  </span>
                </ul>
                <p className="card-text">
                  <small className="text-muted">
                    Release: {this.props.attributes.release_date}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
