import React, { useState } from "react";
import axios from "axios";

const SignupForm = () => {
	const [createUsername, setCreateUsername] = useState("");
	const [createPassword, setCreatePassword] = useState("");
	const [createEmailAddress, setCreateEmailAddress] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const onFormSubmit = e => {
		e.preventDefault();
		if (createPassword !== confirmPassword) {
			alert("Your passwords don't match. Please try again.");
		} else {
			createUser();
		}
	};

	const createUser = async () => {
		const response = await axios.post(
			"http://localhost:5000/api/users",
			{
				username: createUsername,
				email: createEmailAddress,
				password: createPassword
				
			}
		);
		if (response.data === "success") {
			alert(
				`Account successfully created! Thank you for joining us, ${createUsername}!`
			)
			setCreateUsername("")
			setCreatePassword("")
			setCreateEmailAddress("")
			setConfirmPassword("");
		} else {
			alert(
				"Something went wrong. Your account name or email may already be in use."
			);
		}
	};

	const updateValues = () => {
		setCreateUsername(document.querySelector("#username").value);
		setCreatePassword(document.querySelector("#password").value);
		setCreateEmailAddress(document.querySelector("#emailAddress").value);
		setConfirmPassword(document.querySelector("#confirmPassword").value);
	};
	return (
		<>
			<p className="title has-text-centered">New Around Here? Sign Up!</p>
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
