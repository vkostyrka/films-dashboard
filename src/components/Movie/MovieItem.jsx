import React from 'react'

export default function MovieItem(props) {
  const genres = props.movieData.genres.map(item =>
    <span className="mx-2" key={item.id}>{item.name}</span>
  );
  const companies = props.movieData.production_companies.map(item =>
    <span className="mx-2" key={item.id}>{item.name}</span>
  );
  const countries = props.movieData.production_countries.map(item =>
    <span className="mx-2" key={item.iso_3166_1}>{item.name}</span>
  );

  return (
    <div className="movie-item">
      <h2 className="card-title">{props.movieData.title} Details</h2>
      <div className="card-body">
        <p>Budget: {props.movieData.budget} $</p>
        <p>Duration: <span className="badge badge-info">{props.movieData.runtime} min.</span></p>
        <h6>Genres</h6>
        {genres}
        <hr/>
        <h6>Companies</h6>
        {companies}
        <hr/>
        <h6>Countries</h6>
        {countries}
        <hr/>
        <p>Status: <span className="badge badge-info">{props.movieData.status}</span></p>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a target="_blank" href={`https://www.imdb.com/title/${props.movieData.imdb_id}`}>Open on IMDB</a>
      </div>
    </div>
  )
}

