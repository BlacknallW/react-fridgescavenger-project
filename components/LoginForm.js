import React from "react";
import axios from "axios";
import cookies from "next-cookies";
import Router from "next/router"

class LoginForm extends React.Component {
	state = {
		loginEmail: "",
		loginPassword: ""
	};

	static async getInitialProps(ctx) {
		return {
			account: cookies(ctx).account || "",
			token: cookies(ctx).token || ""
		};
	}

	updateValues = () => {
		this.setState({
			loginEmail: document.querySelector("#loginUsername").value,
			loginPassword: document.querySelector("#loginPassword").value
		});
	};

	loginSend = async () => {
		event.preventDefault();
		const response = await axios.post(`http://http://localhost:5000/api/auth`, {
			password: this.state.loginPassword,
			email: this.state.loginEmail
		});
		if (!response.data.browser_token) {
			alert("Wrong email address or password");
		} else {
			document.cookie = `account=${response.data.account_name}; `;
			document.cookie = `token=${response.data.browser_token}; `;
			alert("Successfully logged in");
			Router.push('/userprofile')
		}
	};
	render() {
		return (
			<>
				<p className="title has-text-centered">
					Already A Member? Sign In!
				</p>
				<form className="field ">
					<label className="label">Email Address:</label>
					<div className="control">
						<input
							className="input"
							type="text"
							id="loginUsername"
							value={this.state.loginEmail}
							onChange={e => this.updateValues()}
						></input>
					</div>
					<label className="label">Password</label>
					<div className="control">
						<input
							className="input"
							type="password"
							id="loginPassword"
							value={this.state.loginPassword}
							onChange={e => this.updateValues()}
						></input>
					</div>
					<br />
					<button
						type="submit"
						className="button is-success"
						onClick={this.loginSend}
					>
						Login
					</button>
				</form>
			</>
		);
	}
}

export default LoginForm;
