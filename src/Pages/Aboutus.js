import React from "react";

import aboutus from "../Assets/aboutus.svg";

import "../css/aboutus.css";

function Aboutus() {
	return (
		<div className="aboutus">
			<div className="aboutus__left">
				<div className="big__text" style={{ color: "#3371f2" }}>
					ABOUT US
				</div>
				<div className="horizontal"></div>
				<div className="detaiL" style={{ lineHeight: "2rem" }}>
					<span style={{ fontWeight: "600" }}>Flat Rental Nepal</span>{" "}
					helps you find room and flat of your need and reasonable
					price.
				</div>
			</div>
			<div className="aboutus__right">
				<img src={aboutus} alt="" />
			</div>
		</div>
	);
}

export default Aboutus;
