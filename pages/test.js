import React, { useState, useEffect } from "react";
import Axios from "axios";
import {loadFirebase} from "../lib/db"

Test.getInitialProps = async () => {
	let firebase = await loadFirebase()
	let result = await new Promise((resolve,reject) => {
		firebase.firestore().collection('users')
		.limit(10)
		.get()
		.then(snapshot => {
			let data = []
			snapshot.forEach((doc) => {
				data.push(
					Object.assign({id: doc.id}, doc.data())
				)
			})
			resolve(data)
		})
		.catch(error => {
			reject([])
		})
	})
	console.log(result)
	return {result}
}

export default function Test(props) {
	return (<>
		{props.result.map(results => <p>{results.username}</p>)}
	</>);
}


