# bootcampAvenue 🏕️

> bootcampAvenue project

# Instructions

1. Create a `.env` inside `/breviews-client` and `nodemon.json` file inside `/brevews-backend`

2. Inside `.env` in `/breview-client` put this
   ```
   API_PROD_URL=https://ba-backend.herokuapp.com/api
   API_DEV_URL=http://localhost:5000/api
   ```
3. In development inside `nodemon.json` in `/breviews-backend` write (Testing database):
   ```
   {
       "env": {
            "DATABASE_NAME": "breviews",
            "DATABASE_PASSWORD": "123",
            "DATABASE_USER": Ulan",
            "SECRET_KEY": "your key"
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

### Learn

- Cookie and Auth:
  - https://www.youtube.com/watch?v=uXDnS5PcjCA&ab_channel=LearnWebCode
  - https://github.com/LearnWebCode/youtube-cookies-and-more

## Separated deployments

- https://github.com/urakymzhan/breviews-frontend
- https://github.com/urakymzhan/breviews-backend
