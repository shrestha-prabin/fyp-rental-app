import React from "react";

import "../css/navbar.css";
import pin from "../Assets/pin.svg";
import { useDispatch, useSelector } from "react-redux";
import { setAuthSession, setUserDetails } from "../Store/actions";
import { Link } from "react-router-dom";
import ApiService from "../Service/ApiService";

function NavBar({ parentCallBackLogin, parentCallBackSignup }) {
	const loginButton = (e) => {
		e.preventDefault();
		parentCallBackLogin();
	};
	const registerButton = (e) => {
		e.preventDefault();
		parentCallBackSignup();
	};

	const dispatch = useDispatch();

	const authSession = useSelector((state) => state.authSession);
	const userDetails = useSelector((state) => state.userDetails);

	const isLoggedIn = () => {
		console.log(authSession);
		return authSession != null;
	};

	const logout = () => {
		dispatch(setAuthSession(null));
		dispatch(setUserDetails({}));
		alert("Logout successful");
		localStorage.setItem("token", null);
	};

	return (
		<div
			className="navbar"
			style={{ padding: "1rem 5rem", boxShadow: "none" }}
		>
			<div className="nav__left">
				<img
					src={pin}
					style={{ width: "25px", color: "#FF6584" }}
					alt=""
				/>
				{"  "}
				Flat Rental Nepal
			</div>
			<div className="nav__menu">
				<Link className="nav__menu__item" to="/">
					Home
				</Link>
				<Link className="nav__menu__item" to='aboutus'>About</Link>
				{/* <Link className="nav__menu__item">Services</Link> */}
				{/* <div className="nav__menu__item">How it Works</div> */}
				<Link className="nav__menu__item" to='contactus'>Contact Us</Link>
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
				{isLoggedIn() ? (
					<button
						className="secondary__button"
						style={{ width: "120px" }}
						onClick={logout}
					>
						{`Logout (${userDetails?.name})`}
					</button>
				) : (
					<button
						className="secondary__button"
						style={{ width: "120px" }}
						onClick={loginButton}
					>
						Login
					</button>
				)}
			</div>
		</div>
	);
}

export default NavBar;
