import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { loadFirebase } from "../lib/db";
import "firebase/firestore";

Test.getInitialProps = () => {
	return loadFirebase()
		.firestore()
		.collection("users")
		.get()
		.then(snapshot => {
			let data = [];
			snapshot.forEach(doc => {
				data.push({ id: doc.id, ...doc.data() });
			});
			return { users: data };
		});
};

export default function Test(props) {
	const db = loadFirebase().firestore();

	const createUser = (user, pass) => {
		db.collection("users")
			.add({
				username: user,
				password: pass
			})
			.then(function(docRef) {
				console.log("Document written with ID: ", docRef.id);
			})
			.catch(function(error) {
				console.error("Error adding document: ", error);
			});
	};

	return (
		<>
			<Layout>
				{props.users.map(results => (
					<p key={results.id}>{results.username}</p>
				))}
				<form
					className="field section box"
					onSubmit={e => createUser("BillyBadson", "passwordlol")}
				>
					<label className="label">Username</label>
					<div className="control">
						<input
							className="input"
							type="text"
							id="username"
						></input>
					</div>
					<label className="label">Password</label>
					<div className="control">
						<input
							className="input"
							type="text"
							id="password"
						></input>
					</div>
					<br />
					<button type="submit" className="button is-success">
						Submit your information!
					</button>
				</form>
			</Layout>
		</>
	);
}
