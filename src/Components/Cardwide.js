import React from "react";

import "../css/cardwide.css";
import { baseURL } from "../Service/ApiService";

function Cardwide({data, onUpdateStatus}) {
	return (
		<div className="cardwide">
			<img className="cardwide__image" src={`${baseURL}/storage/${data.apartment.image}`}></img>
			<div className="cardwide__details">
				<div className="cardwide__details__top">
					<div className="child">
						<div className="detail">Title</div>
						<div className="text1" style={{maxWidth: 200}}>{data.apartment.name}</div>
					</div>
					<div className="child">
						<div className="detail">Request By</div>
						<div className="text1">{data.buyer.name}</div>
					</div>
					<div className="child">
						<div className="detail">Date</div>
						<div className="text1">{data.created_at.substr(0,10)}</div>
					</div>
					<div className="child">
						<div className="detail">Price</div>
						<div className="text1">Rs. {data.apartment.price}</div>
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
							value={data.booking_status}
							onChange={(e) => onUpdateStatus(e.target.value)}
						>
							<option value="">Select</option>
							<option value="pending">Pending</option>
							<option value="rejected">Rejected</option>
							<option value="approved">Approved</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cardwide;
