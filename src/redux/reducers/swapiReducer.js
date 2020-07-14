import { ADD_FILMS, ADD_SEARCH_TEXT, SET_FILTER } from "../types/types";

let initialState = {
  films: [],
  filmsPath: [
    "https://i.ibb.co/f40y6RV/1.jpg",
    "https://i.ibb.co/MBMyGY4/2.jpg",
    "https://i.ibb.co/jR1Br9w/3.jpg",
    "https://i.ibb.co/QpYZJTt/4.jpg",
    "https://i.ibb.co/Fsy71MT/5.jpg",
    "https://i.ibb.co/XXsLYXZ/6.jpg",
  ],
  searchText: null,
  filterBy: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILMS:
      return {
        ...state,
        films: [...action.payload],
      };
    case ADD_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filterBy: action.payload,
      };
    default:
      return state;
  }
};
