import React from "react";

import { getFilms, setFilter } from "../../redux/actions/actions";
import { connect } from "react-redux";
import Content from "./Content";

import orderBy from "lodash/orderBy";

const sortBy = (films, filterBy) => {
  switch (filterBy) {
    case "asc":
      return orderBy(films, "title", "asc");
    case "desc":
      return orderBy(films, "title", "desc");
    default:
      return films;
  }
};

class ContentContainer extends React.Component {
  componentDidMount() {
    this.props.getFilms();
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.searchText !== this.props.searchText &&
      nextProps.searchText === undefined
    ) {
      this.props.getFilms();
    }
  }

  render() {
    return <Content {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  films: sortBy(state.swData.films, state.swData.filterBy),
  filmsPath: state.swData.filmsPath,
  searchText: state.swData.searchText,
});

export default connect(mapStateToProps, { getFilms, setFilter })(ContentContainer);
