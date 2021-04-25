import React, { useState, useEffect } from "react";

import { MDBBtn, MDBDataTable } from "mdbreact";

import "../css/usertable.css";
import ApiService from "../Service/ApiService";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function UserTable() {
	const [data, setData] = useState({});

	useEffect(() => {
		getUserList();
	}, []);

	const deleteUser = (id) => {
		if (!window.confirm("Confirm Delete?")) {
			return;
		}

		ApiService.sendRequest("user/delete-user", { user_id: id })
			.then((res) => {
				getUserList();
			})
			.catch((err) => {
				alert(err);
			});
	};

	const getUserList = () => {
		ApiService.sendRequest("user/user-list")
			.then((res) => {
				const temp = {
					columns: [
						{
							label: "Name",
							field: "name",
							sort: "asc",
							width: 150,
						},
						{
							label: "Email",
							field: "email",
							sort: "asc",
							width: 270,
						},
						{
							label: "Role",
							field: "role",
							sort: "asc",
							width: 100,
						},
						{
							label: "Address",
							field: "address",
							sort: "asc",
							width: 150,
						},
						{
							label: "Contact",
							field: "contact",
							sort: "asc",
							width: 150,
						},
						{
							label: "Actions",
							field: "actions",
							sort: "asc",
							width: 150,
						},
					],
					rows: res.data.map((item) => {
						return {
							name: item.name,
							email: item.email,
							role: item.role,
							address: item.address,
							contact: item.contact,
							actions:
								item.role !== "admin" ? (
									<button
										style={{
											backgroundColor: "#b22",
											border: "none",
											padding: 4,
											color: "#fff",
										}}
										onClick={() => deleteUser(item.id)}
									>
										Delete
									</button>
								) : (
									<div />
								),
						};
					}),
				};
				setData(temp);
			})
			.catch((err) => {
				alert(err);
			});
	};

	return (
		<div className="usertable">
			<MDBDataTable striped bordered small data={data} />
		</div>
	);
}

export default UserTable;
