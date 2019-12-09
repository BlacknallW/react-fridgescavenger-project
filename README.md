# Fridge Scavenger (currently in development)
This website is designed to allow users to search for recipes they're interested in making at home, as well as input ingredients they have lying around in the fridge in hopes that perhaps they can scrounge up a meal or two. In the (very near) future, users will actually be able to create an account, log in, and save the recipes they're interested in.

## Why?
Surely there are many recipe aggregator websites out there, right? Probably. I'm developing this website purely out of personal interest as a wannabe home chef. I'll honestly probably use it from this point going forward, because if there's anything I don't like about it, I can remove it. If there are any functional components from other websites that I want to use, I can learn how to implement them then do so. It's quite invigorating.

## API Calls

# Spoonacular https://spoonacular.com/food-api/
In the beginning, if you read my commit messages, you'll see that I felt this api was the hottest piece of garbage this side of the Brooklyn Bridge. I'm not from Brooklyn, nor have I ever been there or seen the bridge in question. However, I realized after calling more endpoints, that the specific endpoint I was trying to use was formatted in this weird pseudo-JSON, but all of the other endpoints are actually okay. 

One potential problem I can foresee is that I'm using three different endpoints to generate one page of information, because for some reason all of the aforementoned information is spread out between three endpoints. Makes me sad. In any case, Spoonacular's api works pretty similarly to the FDA's food api. You do an initial search to get a bunch of food items, all with a unique id. That same ID is used to call the other endpoints with more specific recipe data such as directions and nutritional information. Meaning, to get one list of directions from a recipe is ultimately 4 calls to separate endpoints of the same api. The only real issue is that after 150 calls per day, the API stops working. By the time I finish this project the user will be able to use 1500 calls per day, which will cost me like $40 a month, which is fine I guess.

# NewsAPI https://newsapi.org/
I am currently in the process of getting this API to work in a...stylish(?) fashion on the homepage. I can't think of what other imagery to add to the search page itself, and I figure having a few recent and relevant news articles on recipes, food, and cooking will be pleasing on the eyes as long as they are in components are that equally as pleasing on the eyes. We'll see if that comes to fruition.

## NextJS
So you've noticed, have you? Well, if you haven't, then this project uses NextJS, which is somewhat like a backend React framework, if that makes sense. To me, it's just a much lighter, much more user-friendly NodeJS. One of the problems I would have with my other React projects is the load times of some functions that would call api endpoints and map the data across the screen. With NextJS, all of the processing is done on the server-side, so the client gets near-instant loading. One of the best features of NextJS is the dynamic page creation using the "p/[id].js" file system. The recipes you pull up on the website are generated dynamically using the id of the page itself to call the api. If you don't have a recipe pulled up, the recipe page does not exist, in theory. This should ideally reduce server load and keep the site running fairly smoothly. Unless this project explodes and really takes off (popularity), I don't anticipate many/any users, so the server load shouldn't be an issue regardless, but the smoother the better.

## In Development
Currently working on implementing the News API, pagination for the search results so users can actually pull up multiple recipes instead of the first 20 of any given query, user signup/signin, and recipe saving. I will more than likely have to use an express server either way, but the postgres will be hosted by Amazon's cloud database, which has already been set up.
