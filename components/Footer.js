import React from "react";

export default function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="content has-text-centered">
					<p>
						Fridge Scavenger, by{" "}
						<a
							href="https://www.blacknallw.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							William Blacknall.
						</a>
					</p>
					<p>
						This website is powered by NextJS, the recipes are
						generated through the wonderful assistance of the APIs
						from{" "}
						<a
							href="https://spoonacular.com/food-api/"
							target="_blank"
							rel="noreferrer noopener"
						>
							Spoonacular
						</a>{" "}
						and{" "}
						<a
							href="https://newsapi.org/"
							target="_blank"
							rel="noreferrer noopener"
						>
							NewsAPI
						</a>
					</p>
				</div>
			</footer>
		</>
	);
}
