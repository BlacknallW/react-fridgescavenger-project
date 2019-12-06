import React from "react";

export default function Navbar() {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href="/">
                    <figure>
					<img src="https://i.imgur.com/reKZlmN.png" /></figure>
				</a>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start">
					<a href="/" className="navbar-item">
						Recipes
					</a>
					<a href="/scavenge" className="navbar-item">
						Scavenge
					</a>
				</div>

				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							<a className="button is-info">
								<strong>Sign up</strong>
							</a>
							<a className="button is-light">Log in</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
