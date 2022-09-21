A brief overview of this project:

update: 17/9/22

Well. Sorted pagination. Easy. Done. Restyled to add a rather fetching green if I do say so myself. Also Easy, also Done.

Started to add authentication via Netlify Identity - seems to work! Can log in and out. Need to add permissions to different users. Easy. Done.

HOWEVER. Made some cool fancy changes, pushed to main as worked on localserver, build failed. Not done?

So, stripped some of the fancy changes out figuring out what is causing the build fail.

Narrowed it down to: MUI ButtonGroup OR the loading message when fetching castles.







Update: 25/8/2022

Sacked off the webscraping for now. Discovered mongodb and decided to incorporate that into this project. Once I have the routes set up and the front end doign what I want it to do, I will have a choice whether to try and scrape the data I want or to populate it manually...

Next step, pagination.


//Initial brief below

I have a long list of things I want to play around with in tech, clsoe to top of that list is Next.js and web scraping.

I thought to combine the two and throw in something I am interested in too - in this case, castles.

I enjoy a good castle, and plan to visit quite a few.

To aid in this, I wanted to get all the information about castles in one place so learning how to scrape that data from, say, wikipedia and disply in with a framework that I wanted to learn makes sense.

At this point, I have got the frontend looking okay and have the ability to search for castles based on country.

Next stage is to learn about web scraping and over the next few days will return to this repo armed with somethings to try.

Few things I have learned - can scrape in a few different ways, using node can be done using a few dependencies which I have installed (cheerios, axios and express).

Havent found an exact tutorial for express and nextjs yet, so will have a look at the docs then try and find a video later



