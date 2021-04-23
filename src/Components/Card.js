import React from "react";

import ApiService, { baseURL } from "../Service/ApiService";

import "../css/card.css";

function Card({ img, title, description }) {
	return (
		<div className="card">
			<img className="card__image" src={`${baseURL}${img}`}></img>
			<div className="card__text">
				<div className="card__title">{title}</div>
				<div className="horizontal"></div>
				<div className="card__detail">{description}</div>
			</div>
		</div>
	);
}

export default Card;
