import React from "react";

import "../css/navbar.css";
import pin from "../Assets/pin.svg";
import { useDispatch, useSelector } from "react-redux";
import { setAuthSession, setUserDetails } from "../Store/actions";
import { Link, useHistory } from "react-router-dom";

function NavBarHome({ parentCallBackLogin, parentCallBackSignup }) {
	const loginButton = (e) => {
		e.preventDefault();
		parentCallBackLogin();
	};
	const registerButton = (e) => {
		e.preventDefault();
		parentCallBackSignup();
	};

	const dispatch = useDispatch();
	const history = useHistory();

	const authSession = useSelector((state) => state.authSession);
	const userDetails = useSelector((state) => state.userDetails);

	const isLoggedIn = () => {
		return authSession != null;
	};

	const isSeller = () => {
		return isLoggedIn && userDetails?.role === "seller";
	};

	const isAdmin = () => {
		return isLoggedIn && userDetails?.role === "admin";
	};

	const logout = () => {
		dispatch(setAuthSession(null));
		dispatch(setUserDetails({}));
		localStorage.setItem("token", null);
		alert("Logout successful");
		history.push("/");
	};

	return (
		<div
			className="navbar"
			style={{ padding: "1rem 5rem", boxShadow: "none" }}
		>
			<div className="nav__left rows">
				<img
					src={pin}
					style={{ width: "25px", color: "#FF6584" }}
					alt=""
				/>
				<div className="vertical"></div>
				Flat Rental Nepal
			</div>
			<div className="nav__menu">
				<Link className="nav__menu__item" to="/">
					Home
				</Link>
				{isSeller() && (
					<Link className="nav__menu__item" to="/adminpanel">
						Seller Panel
					</Link>
				)}
				{isAdmin() && (
					<Link className="nav__menu__item" to="/adminpanel">
						Admin Panel
					</Link>
				)}

				{/* <div className="nav__menu__item">For Rent</div> */}
				{/* <div className="nav__menu__item">For Sale</div> */}
				{isLoggedIn() && (
					<Link className="nav__menu__item" to="/message">
						Messages
					</Link>
				)}

				{isLoggedIn() ? (
					<div
						className="nav__menu__item"
						onClick={logout}
					>{`Logout (${userDetails.name})`}</div>
				) : (
					<Link className="nav__menu__item" to="/user">
						Login
					</Link>
				)}
			</div>
		</div>
	);
}

export default NavBarHome;
