import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

export default function UserLogin() {
	return (
		<>
			<Layout>
				<div className="body">
					<div className="tile is-ancestor section">
						<div className="tile is-parent">
							<div className="tile is-child box">
								<LoginForm />
							</div>
						</div>
						<div className="tile is-parent">
							<div className="tile is-child box">
								<SignupForm />
							</div>
						</div>
					</div>
				</div>
			
			<div className="footer">
				<Footer />
			</div>
</Layout>
			<style jsx>{`
				html,
				.body {
					height: 100%;
					margin: 0;
				}
				.footer {
					height: 50px;
				}
				footer {
					margin-top: auto;
				}
				.body {
					font-family: "Dosis", sans-serif;
					font-size: 20px;
					background-image: url("https://i.imgur.com/X4qREVj.jpg");
					background-repeat: no-repeat;
					background-attachment: fixed;
					background-size: cover;
					display: flex;
					flex-direction: column;
				}
			`}</style>
		</>
	);
}
