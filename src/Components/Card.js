import React from "react";

import ApiService, { baseURL } from "../Service/ApiService";

import "../css/card.css";
import { Link } from "react-router-dom";

function Card({ id, img, title, price, location, description, showDelete, onDelete }) {
	return (
		<div className="card">
			<Link to={`/details/${id}`}>
				<img className="card__image" src={`${baseURL}${img}`}></img>
				<div className="card__text">
					<div className="card__title">{title}</div>
					<div className="horizontal"></div>
					<div className="">Rs. {price}</div>
					<div className="card__detail">{description}</div>
					<div className="card__detail">{location}</div>

					{ }

				</div>
			</Link>

			{
				showDelete && (
					<button className='delete__button' onClick={onDelete}>Delete</button>
				)
			}
		</div>
	);
}

export default Card;
