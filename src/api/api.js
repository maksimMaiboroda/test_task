import * as axios from "axios";

const instanse = axios.create({
  withCredentials: true,
  baseURL: `https://swapi.dev/api/`,
});

const filmsAPI = {
  getFilms() {
    return instanse.get(`films`).then((response) => response.data.results);
  },

  search(text) {
    return instanse
      .get(`films?search=${text}`)
      .then((response) => response.data.results);
  },
};

export default filmsAPI;
