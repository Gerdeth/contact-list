import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
    const {store , actions}  = useContext(context);
    const[state,setState]=useState({
        address: null,
		agenda_slug: "gdan",
		email: null,
		full_name: null,
		phone: null
    });
    useEffect (()=>{
        const loadContact=async()=>{
            const contact = await store.allContacts.find(element=> element.id==props.match.params.id);
            setState(contact);
        };
        loadContact();
    } ,[]);
	
		return(
            <div className="container">
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
										defaultValue={state.full_name}
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
										defaultValue={state.email}
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
										defaultValue={state.phone}
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
										defaultValue={state.address}
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
											state.id
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
			
            </div>
        );

    };

EditContact.propTypes = {
	match: PropTypes.object
};
