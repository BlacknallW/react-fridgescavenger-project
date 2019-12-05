import React, { useState, useEffect } from "react";
import Axios from "axios";

const Test = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        (async resource => {const recipe = await Axios.get(`https://api.spoonacular.com/recipes/478556/analyzedInstructions?apiKey=cbdb4c6c328541689e7db2d210a6b528`)
        return () => {
            const recipe = res.data
            setRecipes(data)
        }});
    }, [recipes])
}

export default Test;