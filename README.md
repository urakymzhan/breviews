# bootcampAvenue  🏕️

> bootcampAvenue project

### dev:
- from breviews-backend
- $ `npm run install:both`
- $ `npm run dev`

### IMPORTANT
- if you new to frontend please use webpack and env variables carefully.
- Messing them up would mess up whole development and production code :)


In general currently we have 3 webpack config files on front end.<br /> 
because we can't use NODE_ENV etc. in front end, we have to utilize webpack and other bunch libraries for it. <br /> 
I divided dev and prod api urls according to node_env. You might add KEYS etc later. <br /> Please refer to each config file for that to see. It can be handled in a better way probably. But it is what it is at the moment. Hope you will come up with better one.


- There are several advantages in separating development and production modes
    - Ex: caching, logging, security etc.
- Currently on backend secret keys coming fron nodemon.json file in development.
- In production i set keys in heroku dashboard.
- Change this behavior to store all prod and dev keys in local and use of libraries like "node-config", "dotenv" etc.

### Notes
- keep copyright year [2021](https://stackoverflow.com/questions/2390230/do-copyright-dates-need-to-be-updated)

### Features to add
- login system
- show all bootcamps (Leave a Review button is not intuitive)
- server side filter etc for **top** and **remote** bootcamps
- remove Support page
- improve Search
- improve rating system 
