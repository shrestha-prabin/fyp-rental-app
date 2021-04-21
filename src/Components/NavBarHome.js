import React from "react";

import "../css/navbar.css";
import pin from "../Assets/pin.svg";

function NavBarHome({ parentCallBackLogin, parentCallBackSignup }) {
	const loginButton = (e) => {
		e.preventDefault();
		parentCallBackLogin();
	};
	const registerButton = (e) => {
		e.preventDefault();
		parentCallBackSignup();
	};

	return (
		<div className="navbar">
			<div className="nav__left row">
				<img
					src={pin}
					style={{ width: "25px", color: "#FF6584" }}
					alt=""
				/>
				<div className="vertical"></div>
				Gharjagga
			</div>
			<div className="nav__menu">
				<div className="nav__menu__item">Home</div>
				<div className="nav__menu__item">For Rent</div>
				<div className="nav__menu__item">For Sale</div>
				<div className="nav__menu__item">Agents</div>
			</div>
		</div>
	);
}

export default NavBarHome;
