const getState = ({ getStore, setStore }) => {
	return {
		store: {
			allContacts: []
		},
		actions: {
			addContacts: (name, address, number, email) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						agenda_slug: "moldovanjason",
						full_name: name,
						email: email,
						address: address,
						phone: number
					})
				})
					.then(res => res.json())
					.then(() => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/moldovanjason")
							.then(red => red.json())
							.then(data => setStore({ allContacts: data }));
					});
				// build fetch w/ post method body contents - look up in api
				// in 2nd .then do another fetch to get current contects of database(api)
				// save data to allContacts
			},

			deleteContacts: indexDel => {
				const store = getStore();

				fetch(`https://assets.breatheco.de/apis/fake/contact/${indexDel}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(() => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/moldovanjason")
							.then(red => red.json())
							.then(data => setStore({ allContacts: data }));
					});
			},
			// build fetch w/ delete method
			// same as line 13

			editContact: (name, address, number, email, id) => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						agenda_slug: "moldovanjason",
						full_name: name,
						email: email,
						address: address,
						phone: number
					})
				})
					.then(res => res.json())
					.then(() => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/moldovanjason")
							.then(red => red.json())
							.then(data => setStore({ allContacts: data }));
					});

				// build fetch w/ put method
				// 2nd .then will have a fetch like line13
			}

			// addContacts(...args) {
			//     const store = getStore();
			//     const newObjArr = args.reduce((obj, value) => {
			//     const newObj = {};
			//         newObj[value] = value
			//         return {...obj, newObj}});
			//     const newState = store.allContact.concat(newObjArr)
			//     setStore({allContact: newState})
			// },

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
