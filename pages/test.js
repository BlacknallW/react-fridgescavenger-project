import React, {useState, useEffect} from "react";
import Axios from "axios"

import "../styles/styles.sass";

export default function Test(props) {
	return (
		<>
        <ol>
            {props.articles.map(article => 
                <li>
                    {article.description}
                </li>)}
        </ol>
        
		</>
	);
}

Test.getInitialProps = async () => {
    const res = await Axios.get(`https://newsapi.org/v2/everything?q=cooking&sortBy=relevancy&apiKey=2412b7d48fe045f08fc92bc9140f561a`)

    const articles = res.data.articles

    console.log(typeof articles)
    return {articles}

    
}
