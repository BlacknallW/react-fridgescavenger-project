import React from "react";

export default function Navbar() {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href="/">
                    <figure>
					<img src="https://i.imgur.com/reKZlmN.png" /></figure>
				</a>

					<a href="/" className="navbar-item">
						Recipes
					</a>
					<a href="/scavenge" className="navbar-item">
						Scavenge
					</a>
			</div>
		</nav>
	);
}
