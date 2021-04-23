import React, { useState } from "react";

import "../css/search.css";

import InputWrapper from "./InputWrapper";
import NavBarHome from "./NavBarHome";

function Search({ searchResultCallback }) {
	const [type, setType] = useState("buy");
	const [priceFrom, setPriceFrom] = useState(0);
	const [priceTo, setPriceTo] = useState(0);
	const [location, setLocation] = useState("");
	const [bhk, setBhk] = useState("");

	const findButton = () => {
		console.log(type, priceFrom, priceTo, location, bhk);
		searchResultCallback();
	};

	return (
		<div className="search__container">
			<div
				className="big__text__11"
				style={{
					borderBottom: "2px solid #333333",
					width: "60px",
				}}
			>
				Search
			</div>
			<div className="horizontal"></div>
			<div className="horizontal"></div>
			<div className="search__form">
				<div
					className="row"
					style={{ justifyContent: "space-between" }}
				>
					<div className="checkbox row">
						<input
							type="radio"
							id="buy"
							name="type"
							value="buy"
							checked={type === "buy"}
							onChange={(e) => setType(e.target.value)}
						/>
						<div className="vertical"></div>
						<label for="buy">Buy</label>
						<div
							className="vertical"
							style={{ width: "2rem" }}
						></div>
						<input
							type="radio"
							id="rent"
							name="type"
							checked={type === "rent"}
							value="rent"
							onChange={(e) => setType(e.target.value)}
						/>
						<div className="vertical"></div>
						<label for="rent">Rent</label>
					</div>
					<div className="vertical" style={{ width: "2rem" }}></div>
					<div className="row">
						<InputWrapper
							label="Price From"
							error={null}
							onFocus={null}
							value={priceFrom}
							type="number"
							onChangeText={(e) => setPriceFrom(e.target.value)}
						/>
						<div
							className="vertical"
							style={{ width: "4rem" }}
						></div>
						<InputWrapper
							label="Price To"
							error={null}
							onFocus={null}
							value={priceTo}
							type="number"
							onChangeText={(e) => setPriceTo(e.target.value)}
						/>
					</div>
				</div>
				{/* bottom */}
				<div className="horizontal"></div>
				<div className="row">
					<InputWrapper
						label="BHK"
						error={null}
						onFocus={null}
						value={bhk}
						type="text"
						onChangeText={(e) => setBhk(e.target.value)}
					/>
					<div className="vertical" style={{ width: "4rem" }}></div>
					<InputWrapper
						label="Location"
						error={null}
						onFocus={null}
						value={location}
						type="text"
						onChangeText={(e) => setLocation(e.target.value)}
					/>
				</div>
			</div>
			<div className="horizontal"></div>
			<button
				className="primary__button text2"
				style={{ width: "150px" }}
				onClick={findButton}
			>
				Find
			</button>
		</div>
	);
}

export default Search;
