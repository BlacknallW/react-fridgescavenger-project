import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { loadFirebase } from "../lib/db";
import "firebase/firestore";

UserLogin.getInitialProps = async () => {
	const snapshot = await loadFirebase()
		.firestore()
		.collection("users")
		.get();
	let data = [];
	snapshot.forEach(doc => {
		data.push({ id: doc.id, ...doc.data() });
	});
	return { users: data };
};

export default function UserLogin(props) {
	const [createUsername, setCreateUsername] = useState("");
	const [createPassword, setCreatePassword] = useState("");
	const [createEmailAddress, setCreateEmailAddress] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const db = loadFirebase().firestore();

	const onFormSubmit = e => {
		createUser();
	};

	const createUser = () => {
		db.collection("users")
			.add({
				username: createUsername,
				password: createPassword,
				emailaddress: createemailaddress
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
			<Layout>
				{props.users.map(results => (
					<p key={results.id}>{results.username}</p>
				))}
				<div className="tile is-ancestor section">
					<div className="tile is-parent">
						<div className="tile is-child box">
							<p className="title">Already a member? Sign in!</p>
							<form className="field ">
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
								<label className="label">Password</label>
								<div className="control">
									<input
										className="input"
										type="text"
										id="password"
										value={createPassword}
										onChange={e => updateValues()}
									></input>
								</div>
								<br />
								<button
									type="submit"
									className="button is-success"
									onClick={
										(e => e.preventDefault(), onFormSubmit)
									}
								>
									Login
								</button>
							</form>
						</div>
					</div>
					<div className="tile is-parent">
						<div className="tile is-child box">
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
											type="text"
											id="password"
											value={createPassword}
											onChange={e => updateValues()}
										></input>
									</div>
								</div>
								<div className="field">
									<label className="label">
										Confirm Password
									</label>
									<div className="control">
										<input
											className="input"
											type="text"
											id="confirmPassword"
											value={confirmPassword}
											onChange={e => updateValues()}
										></input>
									</div>
								</div>
								<div className="field">
									<label className="label">
										Email Address
									</label>
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
									onClick={
										(e => e.preventDefault(), onFormSubmit)
									}
								>
									Create Account
								</button>
							</form>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
