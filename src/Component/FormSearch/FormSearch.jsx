import React from "react";
import classes from "./FormSearch.module.css";
import { Field, reduxForm } from "redux-form";

const FormSearch = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={classes.searchForm}>
      <div className={classes.randomOrNot}>
        
        <label className={classes.searchLabel}>
        <span>Search...</span>
          <Field
            className={classes.searchInput}
            id="searchInput"
            name="searchInputText"
            component="input"
            autocomplete="off"
            type="text"
          />
        </label>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "searchText",
})(FormSearch);
