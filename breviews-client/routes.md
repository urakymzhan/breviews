# Routes

```js
/                       => public
/results                => public
/support                => public
/about                  => public
/legal                  => public
/contact                => public
/bootcamps/:name        => public
/write-review/:name     => private
/form-complete/:name    => private
/login                  => public
/signup                 => public

```

### TODOS

- Update Login to Logout on Navbar based on if use logged in or not (session)
- Update Layout and remove extra css code
- Make Helmet more managable
- Reuseable form component
- login system
- show all bootcamps (Leave a Review button is not intuitive)
- server side filter etc for **top** and **remote** bootcamps
- remove Support page
- improve Search
- improve rating system
