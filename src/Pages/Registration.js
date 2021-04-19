import React from "react";

// package
import { Switch, Route } from "react-router-dom";

import "../css/registration.css";

import NavBar from "../Components/NavBar";
import InputWrapper from "../Components/InputWrapper";
import place from "../Assets/place.svg";

function Registration() {
	return (
		<div className="registration">
			<div className="navbar__content">
				<NavBar />
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
					<Switch>
						<Route
							exact
							path="/"
							component={() => <RegistrationForm page={true} />}
						></Route>
						<Route
							path="/register"
							component={() => <RegistrationForm page={false} />}
						></Route>
					</Switch>
				</div>
			</div>
		</div>
	);
}

function RegistrationForm({ page }) {
	return (
		<div className="form" style={{ height: "auto" }}>
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
