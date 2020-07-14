import React, { useState } from "react";
import classes from "./styled.module.css";

import ReactCardFlip from "react-card-flip";

const CardComponent = ({ film, filmsPath }) => {
  const pathFilmLogo = filmsPath[film.episode_id - 1];

  const [isFlipped, setFlipped] = useState(false);

  const chengeFlipped = () => {
    setFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className={classes.card} onClick={chengeFlipped}>
        <div className={classes.cardContentLeft}>
          <div className={classes.cardTextContent}>
            <div className={classes.title}>{film.title}</div>
            <div className={classes.desc}>{film.opening_crawl}</div>
          </div>
        </div>
        <div className={classes.cardContentRight}>
          <img className={classes.cardImg} alt="film logo" src={pathFilmLogo} />
        </div>
      </div>

      <div className={classes.card} onClick={chengeFlipped}>
        <div className={classes.cardContentLeft}>
          <div className={classes.cardTextContent}>
            <div className={classes.titleBek}>More on episode</div>

            <div className={classes.otherDesc}>
              <div className={classes.subTitle}>director: </div>
              <span>{film.director}</span>
            </div>

            <div className={classes.otherDesc}>
              <div className={classes.subTitle}>producer: </div>
              <span>{film.producer}</span>
            </div>

            <div className={classes.otherDesc}>
              <div className={classes.subTitle}>release date: </div>
              <span>{film.release_date}</span>
            </div>

            <div className={classes.otherDesc}>
              <div className={classes.subTitle}>characters: </div>
              <span>
                Luke Skywalker, C-3PO, R2-D2, Darth Vader, Leia Organa, Owen
                Lars, Beru Whitesun lars, R5-D4 Biggs Darklighter, Obi-Wan
                Kenobi, Wilhuff Tarkin, Han Solo
              </span>
            </div>

            <div className={classes.otherDesc}>
              <div className={classes.subTitle}>planets: </div>
              <span>Tatooine, Alderaan, Yavin IV</span>
            </div>

            <div className={classes.otherDesc}>
              <div className={classes.subTitle}>starships: </div>
              <span>
                CR90 corvette, Star Destroyer, Sentinel-class landing craft,
                Death Star, Millennium Falcon,Y-wing, X-wing
              </span>
            </div>
          </div>
        </div>
        <div className={classes.cardContentRight}>
          <img className={classes.cardImg} alt="film logo" src={pathFilmLogo} />
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default CardComponent;
