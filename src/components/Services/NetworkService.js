import RequestService from "./RequestService";

const BASE_URL = process.env.REACT_APP_API_HOST;
const API_KEY = process.env.REACT_APP_API_KEY;

class NetworkService {
  getGenres() {
    var url = `${BASE_URL}genre/movie/list?api_key=${API_KEY}`;
    return RequestService.getRequest(url);
  }
}

export default new NetworkService();
