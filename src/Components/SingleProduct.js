import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import "../css/singleproduct.css";
import ApiService, { baseURL } from "../Service/ApiService";
import Dialogbox from "./Dialogbox";
import NavBarHome from "./NavBarHome";

function SingleProduct({ match }) {
	const [comment, setComment] = useState("");
	const [details, setDetails] = useState({})

	const history = useHistory()

	// open dialogbox
	const [isOpenDialogBox, setIsOpenDialogBox] = useState(false);

	useEffect(() => {
		getApartmentDetails(match.params.id)
	}, [match])

	const bookApartmentButton = () => {
		console.log("Book apartment");
		setIsOpenDialogBox(!isOpenDialogBox);
	};

	const commentButton = () => {
		console.log(comment);
		let params = {
			"apartment_id": match.params.id,
			"review_text": comment,
			"rating": 5
		}
		ApiService.sendRequest('review/add-review', params).then(res => {
			alert(res.data.message)
			getApartmentDetails(match.params.id)
		}).catch(err => {
			alert(err)
		})
	};

	function close() {
		setIsOpenDialogBox(!isOpenDialogBox);
	}

	const submitBooking = () => {
		let params = {
			"apartment_id": match.params.id,
			"booking_date": "2030-10-10" // TODO:- Use userinput date
		}
		
		ApiService.sendRequest('booking/book-apartment', params).then(res=>{
			alert(res.data.message)
		}).catch(err=>{
			alert(err)
			history.push('/user')
		})
	}

	const getApartmentDetails = (id) => {
		ApiService.sendRequest('apartment/details', { "id": id }).then(res => {
			setDetails(res.data)
		}).catch(err => {
			alert(err)
		})
	}

	return (
		<>
			{isOpenDialogBox && (
				<Dialogbox title="Are you sure?" close={close} onConfirm={submitBooking} />
			)}

			<div className="singleproduct">
				<div style={{ height: '12vh' }}>
					<NavBarHome />

				</div>
				<div className="container">

				<div className="singleproduct__top">
					<div className="child">
						<div className="header__text">
							{details.name}
						</div>
						<div className="horizontal"></div>
						<div className="container">
							<div className="card__title">Description</div>
							<div className="card__detail2">
								{details.description}
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
								<li className="text2">Type: {details.type}</li>
								<li className="text2">Purpose: {details.purpose}</li>
								<li className="text2">BHK-{details.bhk}</li>
								<li className="text2">Location: {details.location}</li>
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
						<img className="img" src={`${baseURL}${details.image}`}></img>
					</div>
				</div>
				{/* Comment */}
				<div className="horizontal" style={{ height: "2rem" }}></div>
				<h2>Reviews</h2>
				<div className="comment__list">
					{
						details.reviews?.map((item, i) => {
							return <Comment
								name={item.reviewer.name}
								comment={item.review_text}
							/>
						})
					}

				</div>
				<div className="horizontal" style={{ height: "2rem" }}></div>
				<div className="header__text">Add Review</div>
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
					Submit Review
				</button>
			</div>
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
