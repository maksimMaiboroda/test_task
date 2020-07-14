import React from "react";
import { connect } from "react-redux";
import { searchFilms, addSearshText } from "../../redux/actions/actions";
import FormSearch from "./FormSearch";

class FormSearchContainer extends React.Component {
  change = (values) => {
    this.props.searchFilms(values.searchInputText);
    this.props.addSearshText(values.searchInputText)
  };

  getFilms = (values) => {
      debugger
  }

  render() {
    return <FormSearch onChange={this.change} onBlur={this.getFilms} />;
  }
}

let mapStateToProps = (state) => ({
  searchText: state.swData.searchText,
});

export default connect(mapStateToProps, { searchFilms, addSearshText })(FormSearchContainer);
