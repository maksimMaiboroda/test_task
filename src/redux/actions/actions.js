import { ADD_FILMS, ADD_SEARCH_TEXT, SET_FILTER } from "../types/types";

const addJokeToList = (films) => ({
  type: ADD_FILMS,
  payload: films,
});

export const addSearshText = (text) => ({
  type: ADD_SEARCH_TEXT,
  payload: text,
});

export const setFilter = (filterBy) => ({
  type: SET_FILTER,
  payload: filterBy,
});


export const getFilms = () => {
  return  (dispatch) => {
    fetch('https://cors-anywhere.herokuapp.com/https://swapi.dev/api/films')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(addJokeToList(data.results));
      });
  };
};





export const searchFilms = (text) => {
  return async (dispatch) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://swapi.dev/api/films/?search=${text}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(addJokeToList(data.results));
      });
  };
};

