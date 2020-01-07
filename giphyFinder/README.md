[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/contains-cat-gifs.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
### GiphyFinder 🔎🖼
[Giphy Finder](giphyFinder/) is one of my favorite in class homework turned passion project.
The project started off as a simple website that just pulls images from the api and displays them without much visual appeal or freedom just a grid of sad squares.  
My love for gifs and memes called out to me and I proceeded on a 2 week journey in midst of the busiest part of the semester - mid-terms to consider numerous libraries, solutions, and even stacks to implement my vision.  
You are crazy - my prof said. And soon enough after racking my brains I came up with something I was proud of... The Giphy Finder. It's far from my ideal vision but hey it's somewhere on the right way!  

![Giphy finder sample](GitHubAssets/giphyfinder.gif)  
Try out GiphyFinder for youself! 👉 [click me](https://people.rit.edu/ag9126/235/GiphyFinder/ "A link to giphy finder")🐱‍🐉
### Resources Used:
#### Giphy API
For this project I am using the [Giphy API](https://developers.giphy.com/).

#### Darkmode 🌗:
Darkmode was a bit of a hurdle. I first tried to use [Darkmode.JS](https://darkmodejs.learn.uno/), however, the default css mix was applied to everything and it made the images negative. The solution offered by the library broke the grid/ flex layouts and had to be dealt manually, which was too tedious and out of scope due to the dynamic nature of my layouts and content.
After that I struggled with implementing my own darkmode in JS but it turned out to be tedious as I found I would have to apply every single style using JS and keep track of state.
At the ends, SCSS came to the rescue! I was able to use local storage and CSS vars to implement dynamic css on the fly with minimal dependencies whilst maximizing efficiency.

#### Masonry layout 📰:
At first I tried to use [Masonry.js](https://masonry.desandro.com/) even though the library was feature rich it was cumbersome to implement due to the dynamic nature of the content.
After, some research I came across [Colcade.JS](https://github.com/desandro/colcade) a lightweight-refined version of [Masonry.js](https://masonry.desandro.com/), the dynamic nature of the content made it dificult to generate masonry layouts. However implementing some quick workarounds I was able to get it up and running perfectly.

#### Javascript ES2017()🔥:
I decided to use [async/ await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) (watch this amazing [video by fireship](https://www.youtube.com/watch?v=vn3tm0quoqE) on async/ await) introduced in [ECMA-2017](https://www.ecma-international.org/ecma-262/8.0/#sec-async-function-definitions) instead of using XHR, AJAX, or any other flavor/ method of reloading or obtaining content dynamically. This partly due to my sheer tenacity to learn and find simplest yet efficient ways to do things. 
