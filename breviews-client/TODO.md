For production, you should create a seperate config that extends and modifies the development version.

## DEVELOPMENT:
### Front-End
- fix footer position to stay on the bottom in all pages.
- make header fixed (currenly fixed but works okay);
- use better Date library for showing review date.
- persist page position after handlesubmit refreshes it
- add favicon to index.html (currently not working, maybe use : https://www.npmjs.com/package/react-favicon )
- find UI/UX designer to fix look of the page
- is spinner okay if fetch is failed ?
- long imports move to index.js files
- fix TEAM/ LEGAL/ CONTACT pages html/css
- fix media queries 

- STATE DESIGN:
  ```  ideally i want state to be like this:  
    (or design database routes better so front end can fetch only relevant data, on this get help from back end engineers)

    this.state = {
        data: {
            seytech: {
                data: data,
                reviewInput: '', 
                nameInput: '', 
                dataToPost: {}
                ... 
            },
            cybertek: {
                data: data,
                reviewInput: '', 
                nameInput: '', 
                dataToPost: {},
                ... 
            }
            ... more bootcamps
        }
    }
```