import React, { useState } from "react";

// package

import "../css/registration.css";

import NavBar from "../Components/NavBar";
import InputWrapper from "../Components/InputWrapper";
import place from "../Assets/place.svg";

function Registration() {
	const [loginOrSignup, setLoginOrSignup] = useState(true);

	// Changing the login or signup page
	const parentCallBackLogin = () => {
		setLoginOrSignup(true);
	};

	const parentCallBackSignup = () => {
		setLoginOrSignup(false);
	};

	return (
		<div className="registration">
			<div className="navbar__content">
				<NavBar
					parentCallBackLogin={parentCallBackLogin}
					parentCallBackSignup={parentCallBackSignup}
				/>
			</div>
			<div className="registration__content">
				<div className="registration__content__left">
					<img src={place} />
					<div>
						<div className="big__text">
							We've helped more than{" "}
							<span
								style={{ color: "#FF6584", fontWeight: "700" }}
							>
								1000+
							</span>
							clients
						</div>
						<div className="horizontal"></div>
						<div className="detail">
							Find Your Favourite rental today
						</div>
					</div>
				</div>
				<div className="registration__content__right">
					<RegistrationForm page={loginOrSignup} />
				</div>
			</div>
		</div>
	);
}

function RegistrationForm({ page }) {
	return (
		<div className="form">
			<div className="text1">
				{page === false
					? "Create your account"
					: "Login to get started"}
			</div>
			<div className="horizontal"></div>
			<div className="horizontal"></div>
			{page === false ? (
				<InputWrapper
					label="First Name"
					error={null}
					onFocus={null}
					type="text"
					value={null}
					// onChangeText={(e) => setFirstName(e.target.value)}
				/>
			) : null}

			<InputWrapper
				label="Email"
				error={null}
				onFocus={null}
				type="text"
				value={null}
				// onChangeText={(e) => setFirstName(e.target.value)}
			/>
			<InputWrapper
				label="Password"
				error={null}
				onFocus={null}
				type="password"
				value={null}
				// onChangeText={(e) => setFirstName(e.target.value)}
			/>
			{page === false ? (
				<InputWrapper
					label="Confirm Password"
					error={null}
					onFocus={null}
					type="password"
					value={null}
					// onChangeText={(e) => setFirstName(e.target.value)}
				/>
			) : null}
			<div className="horizontal" style={{ height: "2rem" }}></div>
			{page === false ? (
				<button className="primary__button text2">Register</button>
			) : (
				<button className="primary__button text2">Login</button>
			)}
		</div>
	);
}

export default Registration;
