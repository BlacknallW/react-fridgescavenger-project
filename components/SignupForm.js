import React, { useState } from "react";
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore";
import { loadFirebase } from "../lib/db";


const SignupForm = () => {
	const [createUsername, setCreateUsername] = useState("");
	const [createPassword, setCreatePassword] = useState("");
	const [createEmailAddress, setCreateEmailAddress] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
    const db = loadFirebase().firestore();
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider);

	const onFormSubmit = e => {
		e.preventDefault();
		if (createPassword !== confirmPassword) {
			alert("Your passwords don't match. Please try again.");
		} else {
			createUser();
		}
	};

	const createUser = () => {

		db.collection("users")
			.add({
				username: createUsername,
				password: createPassword,
				emailaddress: createEmailAddress
			})
			.then(function(docRef) {
				console.log("Document written with ID: ", docRef.id);
			})
			.catch(function(error) {
				console.error("Error adding document: ", error);
            });
	};

	const updateValues = () => {
		setCreateUsername(document.querySelector("#username").value);
		setCreatePassword(document.querySelector("#password").value);
		setCreateEmailAddress(document.querySelector("#emailAddress").value);
		setConfirmPassword(document.querySelector("#confirmPassword").value);
	};
	return (
		<>
			<p className="title">New around here? Sign up!</p>
			<form>
				<div className="field">
					<label className="label">Username</label>
					<div className="control">
						<input
							className="input"
							type="text"
							id="username"
							value={createUsername}
							onChange={e => updateValues()}
						></input>
					</div>
				</div>
				<div className="field">
					<label className="label">Password</label>
					<div className="control">
						<input
							className="input"
							type="password"
							id="password"
							value={createPassword}
							onChange={e => updateValues()}
						></input>
					</div>
				</div>
				<div className="field">
					<label className="label">Confirm Password</label>
					<div className="control">
						<input
							className="input"
							type="password"
							id="confirmPassword"
							value={confirmPassword}
							onChange={e => updateValues()}
						></input>
					</div>
				</div>
				<div className="field">
					<label className="label">Email Address</label>
					<div className="control">
						<input
							className="input"
							type="text"
							value={createEmailAddress}
							onChange={e => updateValues()}
							id="emailAddress"
						></input>
					</div>
				</div>
				<button
					type="submit"
					className="button is-success"
					onClick={onFormSubmit}
				>
					Create Account
				</button>
			</form>
		</>
	);
};

export default SignupForm;
