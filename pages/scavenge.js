import React, { useState } from "react";
import Link from "next/link";
import Axios from "axios";
import uuidv4 from "uuid/v4";
import cookies from "next-cookies";

import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

const Scavenge = props => {
    const [recipes, setRecipes] = useState([]);

    const onSearchSubmit = async term => {
        const res = await Axios.get(
            `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${term}&number=30&apiKey=aeeadf9c72f14c55befd99ff1e40a70d`
        );

        setRecipes(res.data);
    };
    return (
        <>
            <Layout account={props.account}>
                <section className="hero is-info" style={{ opacity: 0.5 }}>
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">Scavenge</h1>
                            <p className="subtitle">
                                Find recipes based on ingredients you already
                                own!
                            </p>
                        </div>
                    </div>
                </section>

                <div className="body is-flex-touch">
                    <section className="section">
                        <div className="grid-container">
                            <div className="box search-box">
                                <SearchBar
                                    onSubmit={onSearchSubmit}
                                    placeholder="Type in your ingredients, separated by commas."
                                />
                            </div>

                            <div className="recipes-box">
                                {recipes.map(recipe => (
                                    <>
                                        <div
                                            className="tile is-ancestor box"
                                            key={recipe.id}
                                        >
                                            <div className="tile">
                                                <div className="content">
                                                    <figure className="image">
                                                        <img
                                                            src={recipe.image}
                                                            style={{
                                                                borderRadius: 10,
                                                                marginLeft:
                                                                    "auto",
                                                                marginRight:
                                                                    "auto",
                                                                display:
                                                                    "block",
                                                            }}
                                                        />
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="tile">
                                                <div className="content">
                                                    <Link
                                                        href="/p/[id]"
                                                        as={`/p/${recipe.id}`}
                                                    >
                                                        <a key={uuidv4()}>
                                                            <p className="has-text-centered">
                                                                {recipe.title}
                                                            </p>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

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
                        display: flex;
                        flex-direction: column;
                    }
                    footer {
                        margin-top: auto;
                    }
                    .recipes-box {
                        opacity: 0.95;
                        margin-left: auto;
                        margin-right: auto;
                        display: block;
                        grid-column: 2;
                        grid-row: 2;
                    }
                    .search-box {
                        grid-column: 2;
                    }
                    .grid-container {
                        display: grid;
                        grid-template-columns: 25% auto 25%;
                    }
                    .body {
                        font-family: "Dosis", sans-serif;
                        font-size: 20px;
                        background-image: url("https://i.imgur.com/X4qREVj.jpg");
                        background-repeat: no-repeat;
                        background-attachment: fixed;
                        background-size: cover;
                    }
                `}
            </style>
        </>
    );
};

Scavenge.getInitialProps = ctx => {
    return {
        account: cookies(ctx).account || "",
        token: cookies(ctx).token || "",
    };
};

export default Scavenge;
