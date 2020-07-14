import React from "react";

import classes from "./styled.module.css";

import { Row } from "antd";
import Card from "../common/Card/Card";
import FormSearchContainer from "../FormSearch/FormSearchContainer";

const Content = ({ films, filmsPath, setFilter }) => {
  let filmsComponent = films.map((film) => (
    <Card film={film} key={film.episode_id} filmsPath={filmsPath} />
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.searchAndSort}>
        <FormSearchContainer />
        <button
          onClick={setFilter.bind(this, "asc")}
          className={classes.sortBtn}
        >
          Сортировать по возростанию
        </button>
        <button
          onClick={setFilter.bind(this, "desc")}
          className={classes.sortBtn}
        >
          Сортировать по убыванию
        </button>
      </div>
      <div className={classes.container}>
        <Row gutter={[16]}>{filmsComponent}</Row>
      </div>
    </div>
  );
};

export default Content;
