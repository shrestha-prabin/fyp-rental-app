import React from "react";

import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";

import aboutus from "../Assets/aboutus.svg";

import "../css/contactus.css";

import NavBarHome from "../Components/NavBarHome";

function Contactus() {
	return (
		<div className="contactus">
			<div className="contactus__navbar">
				<NavBarHome />
			</div>
			<div className="big__text" style={{ color: "#3371f2" }}>
				CONTACT US
			</div>
			<div className="contactus__body">
				<div style={{ flex: "1" }}>
					<div className="card__title">Address</div>
					<div className="horizontal"></div>
					<div
						style={{
							display: "flex",
							justifyContent: "flex-start",
						}}
					>
						<LocationOnRoundedIcon style={{ marginLeft: "-6px" }} />
						<div className="vertical"></div>
						<div className="card__detail">
							Tikune, Kathmandu, Bagmati
						</div>
					</div>
				</div>
				<div className="horizontal"></div>
				<div style={{ flex: "1" }}>
					<div className="card__title">Phone</div>
					<div className="horizontal"></div>
					<div
						style={{
							display: "flex",
							justifyContent: "flex-start",
						}}
					>
						<PhoneRoundedIcon style={{ marginLeft: "-6px" }} />
						<div className="vertical"></div>
						<div className="card__detail">9808807799</div>
					</div>
				</div>
				<div className="horizontal"></div>
				<div style={{ flex: "1" }}>
					<div className="card__title">Email</div>
					<div className="horizontal"></div>
					<div
						style={{
							display: "flex",
							justifyContent: "flex-start",
						}}
					>
						<EmailRoundedIcon style={{ marginLeft: "-6px" }} />
						<div className="vertical"></div>
						<div className="card__detail">
							flatrentalnepal@gmail.com
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contactus;
