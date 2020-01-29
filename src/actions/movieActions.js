export const GetLatestMovie = () => {
  return function(dispatch) {
    fetch(
      `${process.env.REACT_APP_API_HOST}movie/latest?api_key=${
        process.env.REACT_APP_API_KEY
      }`,
    )
      .then(response => response.json())
      .then(data => {
        dispatch({type: "LATEST_MOVIE_FULFILED", payload: data})
      });
  }
}
