import React from "react";
import { Link } from "react-router-dom";

function Carditem(props) {
  return (
    <>
      <li className="card__item">
        <Link className="cards__items__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category = {props.label}>
            <img src={props.src} alt="Travel Image" className="cards__item__img" />
          </figure>
          <div className="cards__items__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Carditem;
