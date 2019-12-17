import React, { useState } from "react";
import "firebase/firestore";
import { loadFirebase } from "../lib/db";

const LoginForm = () => {
	const [loginUsername, setCreateUsername] = useState("");
	const [loginPassword, setCreatePassword] = useState("");
    const db = loadFirebase().firestore();
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });

    

	const updateValues = () => {
		setCreateUsername(document.querySelector("#loginUsername").value);
		setCreatePassword(document.querySelector("#loginPassword").value);
	};
	return (
		<>
			<p className="title">Already a member? Sign in!</p>
			<form className="field ">
				<label className="label">Username</label>
				<div className="control">
					<input
						className="input"
						type="text"
						id="loginUsername"
						value={loginUsername}
						onChange={e => updateValues()}
					></input>
				</div>
				<label className="label">Password</label>
				<div className="control">
					<input
						className="input"
						type="password"
						id="loginPassword"
						value={loginPassword}
						onChange={e => updateValues()}
					></input>
				</div>
				<br />
				<button
					type="submit"
					className="button is-success"
					onClick={e => e.preventDefault}
				>
					Login
				</button>
			</form>
		</>
	);
};

export default LoginForm;
