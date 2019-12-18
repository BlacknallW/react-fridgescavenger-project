import React, { useState } from "react";

const LoginForm = () => {
	const [loginEmail, setEmail] = useState("");
	const [loginPassword, setCreatePassword] = useState("");

	const updateValues = () => {
		setEmail(document.querySelector("#loginUsername").value);
		setCreatePassword(document.querySelector("#loginPassword").value);
	};

	const loginSend = async () => {
		event.preventDefault();
		const response = await axios.post(`http://localhost:5252/users/login`, {
			password: loginPassword,
			email: loginUsername
		});
		if (!response.data.browser_token) {
			alert("Wrong email address or password");
		} else {
			document.cookie = `account=${response.data.account_name}; `;
			document.cookie = `token=${response.data.browser_token}; `;
			alert("Successfully logged in");
			Router.push("/recipes");
		}
	};

	return (
		<>
			<p className="title">Already a member? Sign in!</p>
			<form className="field ">
				<label className="label">Email Address:</label>
				<div className="control">
					<input
						className="input"
						type="text"
						id="loginUsername"
						value={loginEmail}
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
					onClick={e => loginSend}
				>
					Login
				</button>
			</form>
		</>
	);
};

export default LoginForm;
