import { ADD_FILMS, ADD_SEARCH_TEXT, SET_FILTER } from "../types/types";
import filmsAPI from "../../api/api";

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

export const getFilms = (text) => {
  return async (dispatch) => {
    let data = await filmsAPI.getFilms();
    dispatch(addJokeToList(data));
  };
};

export const searchFilms = (text) => {
  return async (dispatch) => {
    let data = await filmsAPI.search(text);
    dispatch(addJokeToList(data));
  };
};
