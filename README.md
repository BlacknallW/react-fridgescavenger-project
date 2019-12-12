# Fridge Scavenger (currently in development)
This website is designed to allow users to search for recipes they're interested in making at home, as well as input ingredients they have lying around in the fridge in hopes that perhaps they can scrounge up a meal or two. In the (very near) future, users will actually be able to create an account, log in, and save the recipes they're interested in.

## Why?
Surely there are many recipe aggregator websites out there, right? Probably. I'm developing this website purely out of personal interest as a wannabe home chef. I'll honestly probably use it from this point going forward, because if there's anything I don't like about it, I can remove it. If there are any functional components from other websites that I want to use, I can learn how to implement them then do so. It's quite invigorating.

## API Calls

### Spoonacular https://spoonacular.com/food-api/
In the beginning, if you read my commit messages, you'll see that I felt this api was the hottest piece of garbage this side of the Brooklyn Bridge. I'm not from Brooklyn, nor have I ever been there or seen the bridge in question. However, I realized after calling more endpoints, that the specific endpoint I was trying to use was formatted in this weird pseudo-JSON, but all of the other endpoints are actually okay. 

One potential problem I can foresee is that I'm using three different endpoints to generate one page of information, because for some reason all of the aforementoned information is spread out between three endpoints. Makes me sad. In any case, Spoonacular's api works pretty similarly to the FDA's food api. You do an initial search to get a bunch of food items, all with a unique id. That same ID is used to call the other endpoints with more specific recipe data such as directions and nutritional information. Meaning, to get one list of directions from a recipe is ultimately 4 calls to separate endpoints of the same api. The only real issue is that after 150 calls per day, the API stops working. By the time I finish this project the user will be able to use 1500 calls per day, which will cost me like $40 a month, which is fine I guess.

### NewsAPI https://newsapi.org/
I'm using this API to call five of the most recent articles regarding the query, "cooking", to appear on the recipe search page. This was done mostly because I felt the search pages were too bland and sparse before a call was actually made. One issue with this api is that they appear to either have a very limited pool of domains to pull articles from, or no one is writing about cooking in general. Furthermore, I had to add every "terrible" swear word I could think to the api call in order to filter those words out from appearing in the results. Now, however, if you look at the query itself in the code, you'll see a ton of terrible swears. Which, while funny in a way, there's got to be a better way to go about that.

## NextJS
So you've noticed, have you? Well, if you haven't, then this project uses NextJS, which is somewhat like a backend React framework, if that makes sense. To me, it's just a much lighter, much more user-friendly NodeJS. One of the problems I would have with my other React projects is the load times of some functions that would call api endpoints and map the data across the screen. With NextJS, all of the processing is done on the server-side, so the client gets near-instant loading. One of the best features of NextJS is the dynamic page creation using the "p/[id].js" file system. The recipes you pull up on the website are generated dynamically using the id of the page itself to call the api. If you don't have a recipe pulled up, the recipe page does not exist, in theory. This should ideally reduce server load and keep the site running fairly smoothly. Unless this project explodes and really takes off (popularity), I don't anticipate many/any users, so the server load shouldn't be an issue regardless, but the smoother the better.

## In Development
Finished implementing NewsAPI, so now it's time to build the backend user database and comment system.
