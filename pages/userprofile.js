import React from "react";
import cookies from "next-cookies";
import axios from "axios";
import Router from "next/router";
import Link from "next/link";

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
			`http://18.217.129.55/recipes/retrieve`,
			{ account, token }
		);
		this.setState({ recipes: response.data });
	};

	render() {
		return (
			<>
				<Layout account={this.props.account}>
					<section className="hero is-info" style={{ opacity: 0.5 }}>
						<div className="hero-body">
							<div className="container has-text-centered">
								<p className="title">
									Revisit your saved recipes!{" "}
								</p>
							</div>
						</div>
					</section>
					<div className="body is-flex-touch">
						<section className="section">
							{this.state.recipes.map(recipe => (
								<>
									<div className="tile is-ancestor box">
										<div className="tile">
											<div className="content">
												<figure>
													<img
														key={recipe.recipeid}
														className="image"
														src={recipe.recipeimage}
														style={{
															borderRadius: 10,
															marginLeft: "auto",
															marginRight: "auto",
															display: "block"
														}}
													/>
												</figure>
											</div>
										</div>
										<div className="tile">
											<div className="content">
												<Link
													href="/p/[id]"
													as={`/p/${recipe.recipeid}`}
												>
													<a key={recipe.id}>
														<p className="has-text-centered">
															{recipe.recipename}
														</p>
													</a>
												</Link>
											</div>
										</div>
									</div>
								</>
							))}
						</section>
						<div className="footer">
							<Footer />
						</div>
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
