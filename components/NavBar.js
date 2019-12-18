import React from "react";
import cookies from "next-cookies";

export default class Navbar extends React.Component {
	static getInitialProps = async ctx => {
		return {
			account: cookies(ctx).account || "",
			token: cookies(ctx).token || ""
		};
	};

	reset = () => {
		document.cookie =
			"name=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
	};

	render() {
		console.log(this.account);
		console.log(this.token);
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
						{!this.account ? (
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
