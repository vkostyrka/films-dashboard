import React from "react";
import MovieConstants from "./MovieConstants";

export default function MovieCard(props) {
  const poster = props.attributes.poster_path
    ? <img
        src={ MovieConstants.imageSource + props.attributes.poster_path }
        className="card-img-top"
        alt={props.title}
      />
    : <img
        src={process.env.PUBLIC_URL + '/images/default-movie.jpg'}
        className="card-img-top"
        alt="default-image"
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
                    {props.attributes.popularity}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <h2 className="card-title">{props.attributes.title}</h2>
                {props.attributes.original_language}
              </div>
              <p className="card-text">{props.attributes.overview}</p>
              <ul className="d-flex justify-content-around">
                <span>
                  Vote{" "}
                  <span className="badge badge-secondary">
                    {props.attributes.vote_count}
                  </span>
                </span>
                <span>
                  Vote average{" "}
                  <span className="badge badge-secondary">
                    {props.attributes.vote_average}
                  </span>
                </span>
              </ul>
              <p className="card-text">
                <small className="text-muted">
                  Release: {props.attributes.release_date}
                </small>
              </p>
              <button className="btn btn-info" onClick={() => props.showMoreInfo(props.attributes.id)}>Show More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
