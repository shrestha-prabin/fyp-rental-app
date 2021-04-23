import React from "react";

import "../css/cardwide.css";

function Cardwide() {
	return (
		<div className="cardwide">
			<div className="cardwide__image"></div>
			<div className="cardwide__details">
				<div className="cardwide__details__top">
					<div className="child">
						<div className="detail">Title</div>
						<div className="text1">username</div>
					</div>
					<div className="child">
						<div className="detail">Request By</div>
						<div className="text1">username</div>
					</div>
					<div className="child">
						<div className="detail">Date</div>
						<div className="text1">2021-4-22</div>
					</div>
					<div className="child">
						<div className="detail">Price</div>
						<div className="text1">Rs 10000 - Rs 100000</div>
					</div>
				</div>
				<div className="horizontal"></div>
				<div className="horizontal"></div>
				<div className="inputwrapper" style={{ width: "200px" }}>
					<div className="row">
						<div className="detail">Update Status</div>
					</div>
					<div className="input">
						<select
							placeholder="Select"
							// value={userType}
							// onFocus={userTypeFocus}
							// onChange={(e) => setUserType(e.target.value)}
						>
							<option value="">Select</option>
							<option value="seller">Seller</option>
							<option value="buyer">Buyer</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cardwide;
