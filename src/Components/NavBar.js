import React from "react";

import "../css/navbar.css";
import pin from "../Assets/pin.svg";

function NavBar({ parentCallBackLogin, parentCallBackSignup }) {
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
			<div className="nav__left">
				<img
					src={pin}
					style={{ width: "25px", color: "#FF6584" }}
					alt=""
				/>
				{"  "}
				Gharjagga
			</div>
			<div className="nav__menu">
				<div className="nav__menu__item">Home</div>
				<div className="nav__menu__item">About</div>
				<div className="nav__menu__item">Services</div>
				<div className="nav__menu__item">How it Works</div>
				<div className="nav__menu__item">Contact Us</div>
			</div>
			<div className="nav__right">
				<button
					className="primary__button"
					style={{ width: "120px" }}
					onClick={registerButton}
				>
					Register
				</button>
				<div className="vertical"></div>
				<button
					className="secondary__button"
					style={{ width: "120px" }}
					onClick={loginButton}
				>
					Login
				</button>
			</div>
		</div>
	);
}

export default NavBar;
