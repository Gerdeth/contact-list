import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ContactCard from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});

	return (
		<div className="container">
			<Context.Consumer>
				{({ store, actions }) => (
					<div>
						<p className="text-right my-3">
							<Link className="btn btn-success" to="/add">
								Add new contact
							</Link>
						</p>
						<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
							<ul className="list-group pull-down" id="contact-list">
								{/* map allContacts from store */}
								{/* in the map call ContactCard; pass name, address ect... as props */}
								{/* <ContactCard onDelete={() => setState({ showModal: true })} /> */}
								{store.allContacts.map((value, indexOfContact) => (
									<ContactCard
										name={value.full_name}
										address={value.address}
										phone={value.phone}
										email={value.email}
										key={indexOfContact}
										index={indexOfContact}
										id={value.id}
									/>
								))}
							</ul>
						</div>
					</div>
				)}
			</Context.Consumer>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
