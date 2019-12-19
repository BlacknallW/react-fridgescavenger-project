import React from "react";
import cookies from "next-cookies";
import axios from "axios";
import Router from "next/router";

import Layout from "../components/Layout";
import Footer from "../components/Footer";

class userProfile extends React.Component {
	state = { recipes: [] };

	static async getInitialProps(ctx) {
		return {
			account: cookies(ctx).account || "",
			token: cookies(ctx).token || ""
		};
	}

	componentDidMount() {
		if (!this.props.account && !this.props.token) {
			alert("Please log in before accessing this page.");
			Router.push("/userlogin");
		} else {
			this.getRecipes();
		}
	}

	getRecipes = async () => {
		const account = this.props.account;
		const token = this.props.token;
		const response = await axios.post(
			`http://localhost:5252/recipes/retrieve`,
			{ account, token }
		);
		this.setState({ recipes: response.data });
	};

	render() {
		return (
			<>
				<Layout account={this.props.account}>
					<div className="body"></div>
					{this.state.recipes.map(recipe => (
						<p>{recipe.name}</p>
					))}
					<div className="footer">
						<Footer />
					</div>
				</Layout>
				<style jsx>
					{`
						html,
						.body {
							height: 100%;
							margin: 0;
						}
						.footer {
							height: 50px;
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
					`}
				</style>
			</>
		);
	}
}

export default userProfile;
