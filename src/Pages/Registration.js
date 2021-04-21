import React, { useState } from "react";

// package

import "../css/registration.css";

// Component
import NavBar from "../Components/NavBar";
import InputWrapper from "../Components/InputWrapper";
import place from "../Assets/place.svg";
import ApiService from "../Service/ApiService";

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
					<RegistrationForm isLogin={loginOrSignup} />
				</div>
			</div>
		</div>
	);
}

function RegistrationForm({ isLogin }) {
	// Input Fields
	const [userType, setUserType] = useState("");
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassowrd, setConfirmPassowrd] = useState("");
	const [contact, setContact] = useState("");
	const [address, setAddress] = useState("");

	// Error
	const [emailError, setEmailError] = useState("");
	const [passwordError, setpasswordError] = useState("");
	const [userTypeError, setUserTypeError] = useState("");
	const [fullNameError, setFullNameError] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");
	const [contactError, setContactError] = useState("");
	const [addressError, setAddressError] = useState("");

	// onFocus
	function emailFocus() {
		setEmailError("");
	}
	function passwordFocus() {
		setpasswordError("");
	}
	function userTypeFocus() {
		setUserTypeError("");
	}
	function fullNameFocus() {
		setFullNameError("");
	}
	function confirmPassowrdFocus() {
		setConfirmPasswordError("");
	}
	function contactFocus() {
		setContactError("");
	}
	function addressFocus() {
		setAddressError("");
	}

	const login = () => {
		let auth = true;
		if (email === "") {
			auth = false;
			setEmailError("Email field is required");
		}
		if (password === "") {
			auth = false;
			setpasswordError("Password field is required");
		}

		if (auth === true) {
			let params = {
				email: email,
				password: password,
			};
			console.log("params", params);
			ApiService.sendRequest("auth/login", params)
				.then((res) => {
					alert(res.data.message);
				})
				.catch((err) => {
					alert(err);
				});
		}
	};

	const register = () => {
		let auth = true;
		if (userType === "") {
			auth = false;
			setUserTypeError("Select any one");
		}
		if (fullName === "") {
			auth = false;
			setFullNameError("Fullname field is required");
		}
		if (email === "") {
			auth = false;
			setEmailError("Email field is required");
		}
		if (password === "") {
			auth = false;
			setpasswordError("password field is required");
		}
		if (confirmPassowrd === "") {
			auth = false;
			setConfirmPasswordError("Confirm password field is required");
		}
		if (contact === "") {
			auth = false;
			setContactError("Contact field is required");
		}
		if (address === "") {
			auth = false;
			setAddressError("Address field is required");
		}
		if (fullName === "") {
			auth = false;
			setFullNameError("Fullname field is required");
		}

		if (auth === true) {
			console.log("valid");
			let params = {
				name: fullName,
				email: email,
				password: password,
				password_confirmation: confirmPassowrd,
				dob: "2000-01-01",
				role: userType,
				address: address,
				contact: contact,
			};
			console.log("param", params);
			// ApiService.sendRequest("auth/register", params)
			// 	.then((res) => {
			// 		alert(res.data.message);
			// 	})
			// 	.catch((err) => {
			// 		alert(err);
			// 	});
		}
	};

	return (
		<div className="form">
			<div className="text1">
				{isLogin === false
					? "Create your account"
					: "Login to get started"}
			</div>
			<div className="horizontal"></div>

			{isLogin === false ? (
				<div className="inputwrapper">
					<div className="row">
						<div className="label">Register as</div>
						<div className="error">{userTypeError}</div>
					</div>
					<div className="input">
						<select
							placeholder="Select"
							value={userType}
							onFocus={userTypeFocus}
							onChange={(e) => setUserType(e.target.value)}
						>
							<option value="">Select</option>
							<option value="seller">Seller</option>
							<option value="buyer">Buyer</option>
						</select>
					</div>
				</div>
			) : null}

			{isLogin === false ? (
				<InputWrapper
					label="Full Name"
					error={fullNameError}
					onFocus={fullNameFocus}
					type="text"
					value={fullName}
					onChangeText={(e) => setFullName(e.target.value)}
				/>
			) : null}

			<InputWrapper
				label="Email"
				error={emailError}
				onFocus={emailFocus}
				type="email"
				value={email}
				onChangeText={(e) => setEmail(e.target.value)}
			/>
			<div className="row">
				<InputWrapper
					label="Password"
					error={passwordError}
					onFocus={passwordFocus}
					type="password"
					value={password}
					onChangeText={(e) => setPassword(e.target.value)}
				/>
				{isLogin === false ? (
					<>
						<div className="vertical"></div>
						<InputWrapper
							label="Confirm Password"
							error={confirmPasswordError}
							onFocus={confirmPassowrdFocus}
							type="password"
							value={confirmPassowrd}
							onChangeText={(e) =>
								setConfirmPassowrd(e.target.value)
							}
						/>
					</>
				) : null}
			</div>
			<div className="row">
				{isLogin === false ? (
					<>
						<InputWrapper
							label="Contact"
							error={contactError}
							onFocus={contactFocus}
							type="text"
							value={contact}
							onChangeText={(e) => setContact(e.target.value)}
						/>
						<div className="vertical"></div>
						<InputWrapper
							label="Address"
							error={addressError}
							onFocus={addressFocus}
							type="text"
							value={address}
							onChangeText={(e) => setAddress(e.target.value)}
						/>
					</>
				) : null}
			</div>

			<div className="horizontal"></div>
			{isLogin === false ? (
				<button className="primary__button text2" onClick={register}>
					Register
				</button>
			) : (
				<button className="primary__button text2" onClick={login}>
					Login
				</button>
			)}
		</div>
	);
}

export default Registration;
