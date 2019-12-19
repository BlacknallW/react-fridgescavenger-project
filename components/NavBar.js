import React from "react";
import cookies from "next-cookies";
import Router from "next/router";

export default class Navbar extends React.Component {
	reset = e => {
		e.preventDefault();
		document.cookie = `account=deleted;expires=Thu, 01 Jan 1970 00:00:01 GMT `;
		document.cookie = `token=deleted; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
		Router.push("/login");
	};

	render() {
		return (
			<nav
				className="navbar"
				role="navigation"
				aria-label="main navigation"
			>
				<div className="navbar-brand">
					<a className="navbar-item" href="/">
						<figure>
							<img src="https://i.imgur.com/reKZlmN.png" />
						</figure>
					</a>

					<a href="/" className="navbar-item">
						Recipes
					</a>
					<a href="/scavenge" className="navbar-item">
						Scavenge
					</a>
					<div className="loginButton navbar-item">
						{!this.props.account ? (
							<a href="/userlogin">
								<button className=" button is-success">
									Login/ Signup
								</button>
							</a>
						) : (
							<a href="/">
								<button
									className="button is-success"
									onClick={this.reset}
								>
									Sign Out
								</button>
							</a>
						)}
					</div>
				</div>
			</nav>
		);
	}
}
