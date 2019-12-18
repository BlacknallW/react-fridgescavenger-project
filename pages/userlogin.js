import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import cookies from "next-cookies";

import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

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

UserLogin.getInitialProps = ctx => {
	return {
		account: cookies(ctx).account || "",
		token: cookies(ctx).token || ""
	};
};
