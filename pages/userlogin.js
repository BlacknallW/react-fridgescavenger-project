import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { loadFirebase } from "../lib/db";
import "firebase/firestore";

import SignupForm from "../components/SignupForm"
import LoginForm from "../components/LoginForm"

UserLogin.getInitialProps = async () => {
	const snapshot = await loadFirebase()
		.firestore()
		.collection("users")
		.get();
	let data = [];
	snapshot.forEach(doc => {
		data.push({ id: doc.id, ...doc.data() });
	});
	return { users: data };
};

export default function UserLogin(props) {
	return (
		<>
			<Layout>
				{props.users.map(results => (
					<p key={results.id}>{results.username}</p>
				))}
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
