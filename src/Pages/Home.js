import React from "react";
import InputWrapper from "../Components/InputWrapper";
import NavBarHome from "../Components/NavBarHome";

import "../css/home.css";

function Home() {
	return (
		<div className="home">
			<div className="home__navbar">
				<NavBarHome />
			</div>
			<div className="home__body">
				{/* Top */}
				<div className="home__body__top">
					<div className="home__body__top__left">
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
										/>
										<div className="vertical"></div>
										<label for="male">Buy</label>
										<div
											className="vertical"
											style={{ width: "2rem" }}
										></div>
										<input
											type="radio"
											id="rent"
											name="type"
											value="rent"
										/>
										<div className="vertical"></div>
										<label for="female">Rent</label>
									</div>
									<div
										className="vertical"
										style={{ width: "2rem" }}
									></div>
									<div className="row">
										<InputWrapper
											label="From"
											error={null}
											onFocus={null}
											value={null}
											type="number"
											onChangeText={null}
										/>
										<div
											className="vertical"
											style={{ width: "4rem" }}
										></div>
										<InputWrapper
											label="To"
											error={null}
											onFocus={null}
											value={null}
											type="number"
											onChangeText={null}
										/>
									</div>
								</div>
								{/* bottom */}
								<div className="row">
									<InputWrapper
										label="BHK"
										error={null}
										onFocus={null}
										value={null}
										type="text"
										onChangeText={null}
									/>
									<div
										className="vertical"
										style={{ width: "4rem" }}
									></div>
									<InputWrapper
										label="Location"
										error={null}
										onFocus={null}
										value={null}
										type="text"
										onChangeText={null}
									/>
								</div>
							</div>
							<div className="horizontal"></div>
							<button
								className="primary__button text2"
								style={{ width: "150px" }}
							>
								Find
							</button>
						</div>
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
				{/* Middle */}
				<div className="middle__part">
					<MiddlePart
						title="Apartments"
						description="The best apartments in town"
					/>
				</div>
				<div className="middle__part" style={{ background: "#ecf2fe" }}>
					<MiddlePart
						title="Rooms"
						description="The best rooms in your area"
					/>
				</div>
				<div className="middle__part">
					<MiddlePart
						title="Featured"
						description="Some featured properties"
					/>
				</div>
				{/* Bottom part */}
				<div className="bottom__part">
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
				</div>

				<div className="home__footer"></div>
			</div>
		</div>
	);
}

function MiddlePart({ title, description, color, types }) {
	return (
		<div className="row">
			<div className="middle__part__header">
				<div className="big__text__11">{title}</div>
				<div className="horizontal"></div>
				<div className="detail">{description}</div>
			</div>
			<div className="middle__part__scroll__item">
				<Card
					title="This is good title"
					description="This is very good description"
				/>
				<Card
					title="This is good title"
					description="This is very good description"
				/>
				<Card
					title="This is good title"
					description="This is very good description"
				/>
				<Card
					title="This is good title"
					description="This is very good description"
				/>
				<Card
					title="This is good title"
					description="This is very good description"
				/>
				<Card
					title="This is good title"
					description="This is very good description"
				/>
				<Card
					title="This is good title"
					description="This is very good description"
				/>
				<Card
					title="This is good title"
					description="This is very good description"
				/>
			</div>
		</div>
	);
}

function Card({ img, title, description }) {
	return (
		<div className="card">
			<div className="card__image"></div>
			<div className="card__text">
				<div className="card__title">{title}</div>
				<div className="card__detail">{description}</div>
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
