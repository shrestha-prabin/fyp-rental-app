import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Switch, Route, Link } from "react-router-dom";
import Card from "../Components/Card";
import Cardwide from "../Components/Cardwide";
import InputWrapper from "../Components/InputWrapper";

import NavBarHome from "../Components/NavBarHome";

import "../css/adminpanel.css";
import ApiService, { baseURL } from "../Service/ApiService";

function AdminPanel() {

	const dispatch = useDispatch()

	const authSession = useSelector(state => state.authSession)
	const userDetails = useSelector(state => state.userDetails)

	const isLoggedIn = () => {
		return authSession != null
	}


	const isSeller = () => {
		return isLoggedIn && userDetails.role === 'seller'
	}

	const isAdmin = () => {
		return isLoggedIn && userDetails.role === 'admin'
	}

	return (
		<div className="adminpanel">
			<div className="adminpanel__navbar">
				<NavBarHome />
			</div>
			<div className="adminpanel__body">
				<div className="sidebar">
					<Link className="menu__link" to="/adminpanel/apartment">
						Apartment
					</Link>
					{
						isSeller() && (
							<Link className="menu__link" to="/adminpanel/booking">
								Client Bookings
							</Link>
						)
					}


					{
						isAdmin() && (
							<Link className="menu__link" to="/adminpanel/booking">
								Users
							</Link>
						)
					}

				</div>
				<div className="rightbar">
					<Switch>
						<Route
							exact
							path="/adminpanel/apartment"
							component={() => <Apartment />}
						></Route>
						<Route
							exact
							path="/adminpanel/booking"
							component={() => <Booking />}
						/>
						<Route component={() => <h1>...</h1>} />
					</Switch>
				</div>
			</div>
		</div>
	);
}

function Apartment() {

	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [type, setType] = useState("");
	const [purpose, setPurpose] = useState("");
	const [price, setprice] = useState("");
	const [image, setImage] = useState("");
	const [comment, setComment] = useState("");
	const [selectedImage, setSelectedImage] = useState(null)
	const [previewImage, setPreviewImage] = useState(null)
	const [bhk, setBhk] = useState('')

	const [apartmentList, setApartmentList] = useState([]);

	const dispatch = useDispatch()

	const authSession = useSelector(state => state.authSession)
	const userDetails = useSelector(state => state.userDetails)

	const isLoggedIn = () => {
		return authSession != null
	}

	useEffect(() => {
		getApartmentList()
	}, [])

	const getApartmentList = () => {
		if (isSeller) {
			ApiService.sendRequest('apartment/user-apartments').then(res=>{
				setApartmentList(res.data)
			}).catch(err=>{
				alert(err)
			})
		} else {
			ApiService.sendRequest('apartment/all-apartments').then(res=>{
				setApartmentList(res.data)
			}).catch(err=>{
				alert(err)
			})
		}
	}


	const isSeller = () => {
		return isLoggedIn && userDetails.role === 'seller'
	}

	const isAdmin = () => {
		return isLoggedIn && userDetails.role === 'admin'
	}

	const handleImageSelect = (e) => {
		let files = e.target.files || e.dataTransfer.files;
		if (!files.length) return;

		let file = files[0]

		let reader = new FileReader();
		reader.onload = (e) => {
			setPreviewImage(e.target.result)
		}
		reader.readAsDataURL(file);
		setSelectedImage(file)
	}

	const addButton = () => {
		var data = new FormData();
		data.append('name', name);
		data.append('location', location);
		data.append('type', type);
		data.append('purpose', purpose);
		data.append('description', comment);
		data.append('price', price);
		data.append('bhk', bhk);
		data.append('image', selectedImage);

		axios.post(`${baseURL}/api/apartment/add-apartment`, data, {
			headers: {
				'Content-Type': 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2),
				'Authorization': `Bearer ${authSession?.token}`
			},
			onUploadProgress: (e) => {
				let progress = parseInt(Math.round((e.loaded * 100) / e.total));
				console.log('Upload progress', progress);
			},
		}).then((response) => {
			console.log('API Res:', 'add', response.data);
			if (response.data.success) {
				alert(response.data.data.message)
			} else {
				alert(response.data.error.message || response.data.error[Object.keys(response.data.error)[0]])
			}
		})
			.catch((error) => {
				console.error('API Err:', 'add', error.message);
				alert(error.message)
			});
	};

	const deleteApartment = (id) => {
		// TODO:- Fix delete api
		ApiService.sendRequest('apartment/delete-apartment', {"apartment_id": id}).then(res=>{
			getApartmentList()
		}).catch(err=>{
			alert(err)
		})
	}

	return (
		<div className="apartment">
			<div className="header__text">Apartments List</div>
			<div className="horizontal" style={{ height: "2rem" }}></div>
			<div className="apartment__list">
				{apartmentList.map((item, i) => (
					<Card key={i} id={item.id} title={item.name} description={item.description} price={item.price} location={item.location} img={item.image} showDelete={false} onDelete={()=>deleteApartment(item.id)} />
				))}
			</div>
			<div className="horizontal" style={{ height: "2rem" }}></div>
			{
				isSeller() && (
					<div>
						<div className="header__text">Add new</div>
						<div className="horizontal" style={{ height: "2rem" }}></div>
						<div>
							<div className="row">
								<InputWrapper
									label="Name"
									type="text"
									value={name}
									onChangeText={(e) => setName(e.target.value)}
								/>
								<div className="vertical" style={{ width: "4rem" }}></div>
								<InputWrapper
									label="Location"
									type="text"
									value={location}
									onChangeText={(e) => setLocation(e.target.value)}
								/>
							</div>

							<div className="row">
								<div className="inputwrapper">
									<div className="row">
										<div className="label">Type</div>
										<div className="error">{ }</div>
									</div>
									<div className="input">
										<select
											placeholder="Select"
											value={type}
											onChange={(e) => setType(e.target.value)}
										>
											<option value="">Select</option>
											<option value="Buy">Buy</option>
											<option value="Rent">Rent</option>
										</select>
									</div>
								</div>
								<div className="vertical" style={{ width: "4rem" }}></div>
								<div className="inputwrapper">
									<div className="row">
										<div className="label">Purpose</div>
										<div className="error">{ }</div>
									</div>
									<div className="input">
										<select
											placeholder="Select"
											value={setPurpose}
											onChange={(e) => setPurpose(e.target.value)}
										>
											<option value="">Select</option>
											<option value="Residental">Residental</option>
											<option value="Office">Office</option>
										</select>
									</div>
								</div>
							</div>
							<div className="row">
								<InputWrapper
									label="Price"
									type="number"
									value={price}
									onChangeText={(e) => setprice(e.target.value)}
								/>

								<div className="vertical" style={{ width: "4rem" }}></div>

								<InputWrapper
									label="BHK"
									type="number"
									value={bhk}
									onChangeText={(e) => setBhk(e.target.value)}
								/>
							</div>


							<label>Description</label>
							<textarea
								className="comment__input"
								style={{ width: "100%" }}
								value={comment}
								onChange={(e) => setComment(e.target.value)}
							></textarea>
						</div>
						<br />
						<div className='inputwrapper'>
							<label> Select Image</label>
							<input type='file' id='image-select' onChange={handleImageSelect} />
							<div style={{ height: 300, width: 300 }}>
								<img style={{ objectFit: 'contain', height: '100%', width: '100%' }} src={previewImage} alt='' />
							</div>
						</div>
						<div className="horizontal"></div>
						<button
							className="primary__button"
							style={{ width: "200px" }}
							onClick={addButton}
						>
							Add
			</button>
					</div>
				)
			}

		</div>
	);
}

function Booking() {

	const [bookingRequests, setBookingRequests] = useState([])

	useEffect(() => {
		ApiService.sendRequest('booking/booking-requests').then(res=>{
			setBookingRequests(res.data)
		}).catch(err=>{
			alert(err)
		})
	}, [])

	const updateBookingStatus = (id, status) => {
		let params = {
			"booking_id": id,
			"new_status": status
		}
		ApiService.sendRequest('booking/update-status', params).then(res=>{
			alert(res.data.message)
		}).catch(err=>{
			alert(err)
		})
	}
	

	return (
		<div className="booking">
			<div className="header__text">Client Bookings Request</div>
			<div className="horizontal" style={{ height: "2rem" }}></div>
			<div className="booking__list">
				{
					bookingRequests.map(item=>{
						return <Cardwide data={item} onUpdateStatus={(status)=>updateBookingStatus(item.id, status)}/>
					})
				}
				
			</div>
		</div>
	);
}

export default AdminPanel;
