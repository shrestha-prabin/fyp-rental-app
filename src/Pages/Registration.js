import React, { useState } from "react";

// package

import "../css/registration.css";

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

	const [userType, setUserType] = useState('')
	const [fullName, setFullName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassowrd, setConfirmPassowrd] = useState('')
	const [contact, setContact] = useState('')
	const [address, setAddress] = useState('')

	const login = () => {
		let params = {
			"email": email,
			"password": password
		}
		ApiService.sendRequest('auth/login', params).then(res=>{
			alert(res.data.message)
		}).catch(err=>{
			alert(err)
		})
	}

	const register = () => {
		let params = {
			"name": fullName,
			"email": email,
			"password": password,
			"password_confirmation": confirmPassowrd,
			"dob": "2000-01-01",
			"role": userType,
			"address": address,
			"contact": contact
		}
		ApiService.sendRequest('auth/register', params).then(res=>{
			alert(res.data.message)
		}).catch(err=>{
			alert(err)
		})
	}

	return (
		<div className="form">
			<div className="text1">
				{isLogin === false
					? "Create your account"
					: "Login to get started"}
			</div>
			<div className="horizontal"></div>
			<div className="horizontal"></div>

			{isLogin === false ? (
				<div className="inputwrapper">
					<div className="row">
						<div className="label">Register as</div>
					</div>
					<div className="input">
						<select
							placeholder='Select'
							value={userType}
							onChange={e=>setUserType(e.target.value)}
						>
							<option value=''>Select</option>
							<option value='seller'>Seller</option>
							<option value='buyer'>Buyer</option>

						</select>
					</div>
				</div>
			) : null}

			{isLogin === false ? (
				<InputWrapper
					label="Full Name"
					error={null}
					onFocus={null}
					type="text"
					value={fullName}
					onChangeText={(e) => setFullName(e.target.value)}
				/>
			) : null}

			<InputWrapper
				label="Email"
				error={null}
				onFocus={null}
				type="email"
				value={email}
				onChangeText={(e) => setEmail(e.target.value)}
			/>
			<InputWrapper
				label="Password"
				error={null}
				onFocus={null}
				type="password"
				value={password}
				onChangeText={(e) => setPassword(e.target.value)}
			/>
			{isLogin === false ? (
				<InputWrapper
					label="Confirm Password"
					error={null}
					onFocus={null}
					type="password"
					value={confirmPassowrd}
					onChangeText={(e) => setConfirmPassowrd(e.target.value)}
				/>
			) : null}

			{isLogin === false ? (
				<InputWrapper
					label="Contact"
					error={null}
					onFocus={null}
					value={contact}
					onChangeText={(e) => setContact(e.target.value)}
				/>
			) : null}

			{isLogin === false ? (
				<InputWrapper
					label="Address"
					error={null}
					onFocus={null}
					value={address}
					onChangeText={(e) => setAddress(e.target.value)}
				/>
			) : null}
			<div className="horizontal" style={{ height: "2rem" }}></div>
			{isLogin === false ? (
				<button className="primary__button text2" onClick={register}>Register</button>
			) : (
				<button className="primary__button text2" onClick={login}>Login</button>
			)}
		</div>
	);
}

export default Registration;
