import React, { useState, useEffect } from "react";
import Axios from "axios";
import { loadFirebase } from "../lib/db";

Test.getInitialProps = () => {
	return loadFirebase()
		.firestore()
		.collection("users")
		.limit(10)
		.get()
		.then(snapshot => {
			let data = [];
			snapshot.forEach(doc => {
				data.push({ id: doc.id, ...doc.data() });
			});
			return { users: data };
		});
};

export default function Test(props) {
	return (
		<>
			{props.users.map(results => (
				<p key={results.id}>{results.username}</p>
			))}
		</>
	);
}
