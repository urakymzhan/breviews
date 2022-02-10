# bootcampAvenue 🏕️

> bootcampAvenue project

# Instructions

1. Create a `.env` inside `/breviews-client` and `nodemon.json` file inside `/brevews-backend`

2. Inside `.env` in `/breview-client` put this
   ```
   API_PROD_URL=https://ba-backend.herokuapp.com/api
   API_DEV_URL=http://localhost:5000/api
   ```
3. In development inside `nodemon.json` in `/breviews-backend` write:
   ```
   {
       "env": {
            DATABASE_NAME: askme
            DATABASE_PASSWORD: askme
            DATABASE_USER: askme
       }
   }
   ```

### Run in Development:

- from breviews-backend:
- $ `npm install`
- $ `npm run install:both`
- $ `npm run dev`

### Read Important

- if you new to frontend please use webpack and env variables carefully.
- Messing them up would mess up whole development and production code :)

- There are several advantages in separating development and production modes
  - Ex: caching, logging, security etc.
- Currently on backend secret keys coming from `nodemon.json` file in `development.`
- In `production` keys set on `heroku dashboard.`
- Change this behavior to store all prod and dev keys in local and use of libraries like "node-config", "dotenv" etc.

### Notes

- keep copyright year [2020](https://stackoverflow.com/questions/2390230/do-copyright-dates-need-to-be-updated)

### Features to add

- login system
- show all bootcamps (Leave a Review button is not intuitive)
- server side filter etc for **top** and **remote** bootcamps
- remove Support page
- improve Search
- improve rating system
