import React from "react";

import "../css/navbar.css";
import pin from "../Assets/pin.svg";
import { useDispatch, useSelector } from "react-redux";
import { setAuthSession } from "../Store/actions";
import { Link } from "react-router-dom";

function NavBar({ parentCallBackLogin, parentCallBackSignup }) {
	const loginButton = (e) => {
		e.preventDefault();
		parentCallBackLogin();
	};
	const registerButton = (e) => {
		e.preventDefault();
		parentCallBackSignup();
	};

    const dispatch = useDispatch()

	const authSession = useSelector(state => state.authSession)
	const userDetails = useSelector(state => state.userDetails)

	const isLoggedIn = () => {
		console.log(authSession);
		return authSession != null
	}

	const logout = () => {
        dispatch(setAuthSession(null))
        alert('Logout successful')	
	}

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
				<Link className="nav__menu__item" to='/'>Home</Link>
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
				{
					isLoggedIn() ? (
						<button
							className="secondary__button"
							style={{ width: "120px" }}
							onClick={logout}
						>
							{`Logout (${userDetails.name})` }
						</button>
					) : (
						<button
							className="secondary__button"
							style={{ width: "120px" }}
							onClick={loginButton}
						>
							Login
						</button>
					)
				}

			</div>
		</div>
	);
}

export default NavBar;
