import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";

const Layout = props => {
	return (
		<div>
			<div className="has-text-centered box">
				<p>Login System is currently down as database host changes. Sorry.</p>
			</div>
			<NavBar account={props.account}/>
			<Head>
				<title>FridgeScavenger</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.css"
				/>
			</Head>
			{props.children}
		</div>
	);
};

export default Layout;
