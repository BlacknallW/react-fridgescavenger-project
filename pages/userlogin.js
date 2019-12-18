import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";


import SignupForm from "../components/SignupForm"
import LoginForm from "../components/LoginForm"



export default function UserLogin() {
	return (
		<>
			<Layout>
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
			</Layout>
		</>
	);
}
