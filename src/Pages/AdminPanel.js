import React, { useState } from "react";

import { Switch, Route, Link } from "react-router-dom";
import Card from "../Components/Card";
import Cardwide from "../Components/Cardwide";
import InputWrapper from "../Components/InputWrapper";

import NavBarHome from "../Components/NavBarHome";

import "../css/adminpanel.css";

function AdminPanel() {
	return (
		<div className="adminpanel">
			<div className="adminpanel__navbar">
				<NavBarHome />
			</div>
			<div className="adminpanel__body">
				<div className="sidebar">
					<Link className="menu__link" to="/adminpanel/apartment">
						Apartment
					</Link>
					<Link className="menu__link" to="/adminpanel/booking">
						Booking
					</Link>
				</div>
				<div className="rightbar">
					<Switch>
						<Route
							exact
							path="/adminpanel/apartment"
							component={() => <Apartment />}
						></Route>
						<Route
							exact
							path="/adminpanel/booking"
							component={() => <Booking />}
						/>
						<Route component={() => <h1>Page Not Rightbar</h1>} />
					</Switch>
				</div>
			</div>
		</div>
	);
}

function Apartment() {
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [type, setType] = useState("");
	const [purpose, setPurpose] = useState("");
	const [price, setprice] = useState(0);
	const [image, setImage] = useState("");
	const [comment, setComment] = useState("");

	const [apartmentList, setApartmentList] = useState([]);

	const addButton = () => {
		alert("add");
	};

	return (
		<div className="apartment">
			<div className="header__text">My Apartments List</div>
			<div className="horizontal" style={{ height: "2rem" }}></div>
			<div className="apartment__list">
				{/* {apartmentList.map((item, i) => (
					<Card key={i} title="dd" description="dfdfdf" />
				))} */}
				<Card title="dd" description="dfdfdf" />
				<Card title="dd" description="dfdfdf" />
				<Card title="dd" description="dfdfdf" />
				<Card title="dd" description="dfdfdf" />
			</div>
			<div className="horizontal" style={{ height: "2rem" }}></div>
			<div className="header__text">Add new</div>
			<div className="horizontal" style={{ height: "2rem" }}></div>
			<div>
				<div className="row">
					<InputWrapper
						label="Name"
						type="text"
						value={name}
						onChangeText={(e) => setName(e.target.value)}
					/>
					<div className="vertical" style={{ width: "4rem" }}></div>
					<InputWrapper
						label="Location"
						type="text"
						value={location}
						onChangeText={(e) => setLocation(e.target.value)}
					/>
				</div>

				<div className="row">
					<InputWrapper
						label="Type"
						type="text"
						value={type}
						onChangeText={(e) => setType(e.target.value)}
					/>
					<div className="vertical" style={{ width: "4rem" }}></div>
					<InputWrapper
						label="Purpose"
						type="text"
						value={purpose}
						onChangeText={(e) => setPurpose(e.target.value)}
					/>
				</div>
				<div className="row">
					<InputWrapper
						label="Price"
						type="number"
						value={price}
						onChangeText={(e) => setprice(e.target.value)}
					/>
					<div className="vertical" style={{ width: "4rem" }}></div>
					<InputWrapper
						label="Image"
						type="text"
						value={image}
						onChangeText={(e) => setImage(e.target.value)}
					/>
				</div>
				<textarea
					className="comment__input"
					style={{ width: "100%" }}
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				></textarea>
			</div>
			<div className="horizontal"></div>
			<button
				className="primary__button"
				style={{ width: "200px" }}
				onClick={addButton}
			>
				Add
			</button>
		</div>
	);
}

function Booking() {
	return (
		<div className="booking">
			<div className="header__text">My Bookings Request</div>
			<div className="horizontal" style={{ height: "2rem" }}></div>
			<div className="booking__list">
				<Cardwide />
			</div>
		</div>
	);
}

export default AdminPanel;
