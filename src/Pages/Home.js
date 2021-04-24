import React, { useState, useEffect, useRef } from "react";
import InputWrapper from "../Components/InputWrapper";
import NavBarHome from "../Components/NavBarHome";

import pin from "../Assets/pin.svg";

import "../css/home.css";
import ApiService, { baseURL } from "../Service/ApiService";
import Search from "../Components/Search";
import Card from "../Components/Card";
import SearchList from "../Components/SearchList";

function Home() {
	// Show SearchList
	const [showSearchList, setShowSearchList] = useState(false);
	const [searchResults, setSearchResults] = useState([]);
	const searchRef = useRef(null);

	const [apartmentList, setApartmentList] = useState([]);

	const [type, setType] = useState("Buy");
	const [priceFrom, setPriceFrom] = useState("");
	const [priceTo, setPriceTo] = useState("");
	const [location, setLocation] = useState("");
	const [bhk, setBhk] = useState("");

	useEffect(() => {
		getApartmentList();
	}, []);

	const getApartmentList = () => {
		ApiService.sendRequest("apartment/all-apartments", {})
			.then((res) => {
				setApartmentList(res.data);
			})
			.catch((err) => {
				alert(err);
			});
	};

	function searchResultCallback() {
		let params = {
			type: type,
			price_from: priceFrom,
			price_to: priceTo,
			location: location,
			bhk: bhk,
		};
		ApiService.sendRequest("apartment/all-apartments", params)
			.then((res) => {
				setSearchResults(res.data);
				searchRef?.current?.scrollIntoView({ behavior: "smooth" });
			})
			.catch((err) => {
				alert(err);
			});

		setShowSearchList(true);
	}

	return (
		<div className="home">
			<div className="home__navbar">
				<NavBarHome />
			</div>
			<div className="home__body">
				{/* Top */}
				<div className="home__body__top">
					<div className="home__body__top__left">
						<Search
							type={type}
							priceFrom={priceFrom}
							priceTo={priceTo}
							location={location}
							bhk={bhk}
							setType={(value) => setType(value)}
							setPriceFrom={(value) => setPriceFrom(value)}
							setPriceTo={(value) => setPriceTo(value)}
							setBhk={(value) => setBhk(value)}
							setLocation={(value) => setLocation(value)}
							searchResultCallback={searchResultCallback}
						/>
					</div>
					<div className="home__body__top__right">
						<div
							className="big__text"
							style={{ maxWidth: "550px" }}
						>
							A single stop for your property needs
						</div>
						<div className="horizontal"></div>
						<div className="detail">
							We've helped more than{" "}
							<span
								style={{
									color: "#FF6584",
									fontWeight: "700",
								}}
							>
								1000+
							</span>{" "}
							clients find their dream property
						</div>
					</div>
				</div>
				{/* Search List */}
				{showSearchList && searchResults.length > 0 && (
					<>
						<div className="horizontal" ref={searchRef} />
						<SearchList data={searchResults} />
					</>
				)}

				{/* Middle */}
				<div className="middle__part">
					<MiddlePart
						title="Residental"
						description="The best residental places in town"
						data={apartmentList.filter(
							(item) => item.purpose == "Residental"
						)}
					/>
				</div>
				<div className="middle__part" style={{ background: "#ecf2fe" }}>
					<MiddlePart
						title="Office"
						description="The best offices in your area"
						data={apartmentList.filter(
							(item) => item.purpose == "Office"
						)}
					/>
				</div>
				<div className="middle__part">
					<MiddlePart
						title="Featured"
						description="Some featured properties"
						data={apartmentList}
					/>
				</div>
				{/* Bottom part */}
				{/* <div className="bottom__part">
					<div className="big__text__11">Featured Properties</div>
					<div
						className="horizontal"
						style={{ height: "4rem" }}
					></div>
					<div className="bottom__part__row">
						<BigCard
							title="Rental Property at Baneshwor"
							description="Attractive flat for rent in baneshwor area"
						/>
						<BigCard
							title="Rental Property at Baneshwor"
							description="Attractive flat for rent in baneshwor area"
						/>
						<BigCard
							title="Rental Property at Baneshwor"
							description="Attractive flat for rent in baneshwor area"
						/>
					</div>
				</div> */}

				<div className="home__footer">
					<div>
						<div className="detail">Gairigaun, Kathmandu</div>
						<div className="horizontal"></div>
						<div className="text1">Address</div>
					</div>

					<div>
						<div className="detail">01 532048</div>
						<div className="horizontal"></div>
						<div className="text1">Contact</div>
					</div>

					<div>
						<div className="detail">facebook.com/gharjagga</div>
						<div className="horizontal"></div>
						<div className="text1">Facebook</div>
					</div>

					<div className="home__footer__right">
						<img
							src={pin}
							style={{ width: "1rem", color: "#FF6584" }}
							alt=""
						/>
						<div className="vertical"></div>
						<div className="text1">Gharjagga</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function MiddlePart({ title, description, data, color, types }) {
	return (
		<div className="row">
			<div className="middle__part__header">
				<div className="big__text__11">{title}</div>
				<div className="horizontal"></div>
				<div className="detail">{description}</div>
			</div>
			<div className="middle__part__scroll__item">
				{data.map((item) => {
					return (
						<Card
							id={item.id}
							price={item.price}
							location={item.location}
							img={item.image}
							title={item.name}
							description={item.description}
						/>
					);
				})}
			</div>
		</div>
	);
}

function BigCard({ title, description }) {
	return (
		<div className="big__card">
			<div className="inside__card">
				<div className="card__title">{title}</div>
				<div className="horizontal"></div>
				<div className="card__detail">{description}</div>
				<div className="horizontal"></div>
				<div
					className="card__detail"
					style={{
						color: "#3371f2",
						borderBottom: "1px solid #3371f2",
						width: "45px",
					}}
				>
					Details
				</div>
			</div>
		</div>
	);
}

export default Home;
