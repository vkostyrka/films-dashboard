const initialState = {
  latestMovie: {},
  fetching: false,
  fetched: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LATEST_MOVIE_PENDING": {
      return { ...state, fetching: true };
    }
    case "LATEST_MOVIE_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "LATEST_MOVIE_FULFILED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        latestMovie: action.payload,
      };
    }
    case "LATEST_MOVIE_CUSTOM_ELSE": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        latestMovie: action.payload,
      };
    }
    case "LATEST_MOVIE_CUSTOM_FIELDS": {
      return { ...state,
        latestMovie: {
          vote_count: 11097,
          id: 12444,
          video: false,
          vote_average: 7.8,
          title: "Harry Potter and the Deathly Hallows: Part 1",
          popularity: 24.808,
          poster_path: "/maP4MTfPCeVD2FZbKTLUgriOW4R.jpg",
          original_language: "en",
          original_title: "Harry Potter and the Deathly Hallows: Part 1",
          genre_ids: [12, 14, 10751],
          backdrop_path: "/8YA36faYlkpfp6aozcGsqq68pZ9.jpg",
          adult: false,
          overview:
            `Harry, Ron and Hermione walk away from their last year at Hogwarts
            to find and destroy the remaining Horcruxes, putting an end
             to Voldemort's bid for immortality. But with Harry's beloved
              Dumbledore dead and Voldemort's unscrupulous Death Eaters on
               the loose, the world is more dangerous than ever.`,
          release_date: "2010-10-17",
        }
      }
    }
    default:
      return state;
  }
}
