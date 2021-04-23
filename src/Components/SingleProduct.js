import React, { useState } from "react";

import "../css/singleproduct.css";
import Dialogbox from "./Dialogbox";

function SingleProduct() {
	const [comment, setComment] = useState("");

	// open dialogbox
	const [isOpenDialogBox, setIsOpenDialogBox] = useState(false);

	const bookApartmentButton = () => {
		console.log("Book apartment");
		setIsOpenDialogBox(!isOpenDialogBox);
	};

	const commentButton = () => {
		console.log(comment);
	};

	function close() {
		setIsOpenDialogBox(!isOpenDialogBox);
	}

	return (
		<>
			{isOpenDialogBox && (
				<Dialogbox title="Are you sure?" close={close} />
			)}

			<div className="singleproduct">
				<div className="singleproduct__top">
					<div className="child">
						<div className="header__text">
							Flat For Rent in Jawalakhel
						</div>
						<div className="horizontal"></div>
						<div className="container">
							<div className="card__title">Description</div>
							<div className="card__detail">
								TanahAir offers a service for creating a website
								design, illustration, icon set, weebsite
								development
							</div>
						</div>
						<div className="horizontal"></div>
						<div className="horizontal"></div>
						<div className="header__text">Features</div>
						<div className="horizontal"></div>
						<div
							className="feature__list"
							style={{ marginLeft: "1.2rem" }}
						>
							<ul style={{ lineHeight: "2rem" }}>
								<li className="text2">BHK-1</li>
								<li className="text2">Good Parking space</li>
							</ul>
						</div>
						<div className="horizontal"></div>
						<button
							className="primary__button"
							style={{ width: "200px" }}
							onClick={bookApartmentButton}
						>
							Book Apartment
						</button>
					</div>
					<div className="vertical"></div>
					<div className="child">
						<div className="img">s</div>
					</div>
				</div>
				{/* Comment */}
				<div className="horizontal" style={{ height: "2rem" }}></div>
				<div className="comment__list">
					<Comment
						name="simon"
						comment="Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Accusamus corrupti, quasi inventore ex, labore ducimus est fugit"
					/>
					<Comment
						name="simon"
						comment="Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Accusamus corrupti, quasi inventore ex, labore ducimus est fugit"
					/>
				</div>
				<div className="horizontal" style={{ height: "2rem" }}></div>
				<div className="header__text">Comments</div>
				<div className="horizontal"></div>
				<textarea
					className="comment__input"
					style={{ width: "600px" }}
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				></textarea>
				<div className="horizontal"></div>
				<button
					className="primary__button"
					style={{ width: "200px" }}
					onClick={commentButton}
				>
					Comment
				</button>
			</div>
		</>
	);
}

// Comments
function Comment({ name, comment }) {
	return (
		<div className="comment">
			<div className="text1">{name}</div>
			<div className="detail">{comment}</div>
		</div>
	);
}

export default SingleProduct;
