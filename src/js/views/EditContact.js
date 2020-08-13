import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
	const [state, setState] = useState({
		//

		address: null,
		agenda_slug: "gdan",
		email: null,
		full_name: null,
		phone: null
	});
	// const updateState=contact=>{
	//     setState(contact);
	// }

	return (
		<div className="container">
			<Context.Consumer>
				{({ actions, store }) => {
					var contact = store.allContacts.find(element => element.id == props.match.params.id); // setState(contact);

					return (
						<div>
							<h1 className="text-center mt-5">Edit contact</h1>
							<form>
								<div className="form-group">
									<label>Full Name</label>
									<input
										value={state.full_name}
										onChange={event => {
											setState({ ...state, full_name: event.target.value });
										}}
										type="text"
										className="form-control"
										placeholder="Full Name"
										defaultValue={contact.full_name}
									/>
								</div>
								<div className="form-group">
									<label>Email</label>
									<input
										value={state.email}
										onChange={event => {
											setState({ ...state, email: event.target.value });
										}}
										type="email"
										className="form-control"
										placeholder="Enter email"
										defaultValue={contact.email}
									/>
								</div>
								<div className="form-group">
									<label>Phone</label>
									<input
										value={state.phone}
										onChange={event => {
											setState({ ...state, phone: event.target.value });
										}}
										type="phone"
										className="form-control"
										placeholder="Enter phone"
										defaultValue={contact.phone}
									/>
								</div>
								<div className="form-group">
									<label>Address</label>
									<input
										value={state.address}
										onChange={event => {
											setState({ ...state, address: event.target.value });
										}}
										type="text"
										className="form-control"
										placeholder="Enter address"
										defaultValue={contact.address}
									/>
								</div>
								<button
									disabled={(!state.name && !state.address) || !state.phone || !state.email}
									onClick={() => {
										actions.editContact(
											state.full_name,
											state.address,
											state.phone,
											state.email,
											contact.id
										);
									}}
									type="button"
									className="btn btn-primary form-control">
									save
								</button>
								<Link className="mt-3 w-100 text-center" to="/">
									or get back to contacts
								</Link>
							</form>
						</div>
					);
				}}
			</Context.Consumer>
		</div>
	);
};

EditContact.propTypes = {
	match: PropTypes.object
};
