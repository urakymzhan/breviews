# Routes

```js
/                       => public
/results                => public
/support                => public
/about                  => public
/legal                  => public
/contact                => public
/bootcamps/:name        => public
/write-review/:name     => private [protected ?]
/form-complete/:name    => private [protected ?]
/auth/login             => public
/auth/signup            => public
/auth/logout            => public
/auth/user              => public
```

### TODOS

- Upgrade RR:https://reactrouter.com/docs/en/v6/upgrading/v5
- Update Layout and remove extra css code
- Make Helmet more managable
- Reuseable form component
- server side filter etc for **top** and **remote** bootcamps
- improve Search
- improve rating system
- do i need verify? https://livecodestream.dev/post/a-practical-guide-to-jwt-authentication-with-nodejs/

- Update Login to Logout on Navbar based on if use logged in or not [DONE]
- login system [DONE]
- show all bootcamps (Leave a Review button is not intuitive) [DONE]
- remove Support page [DONE]
