For production, you should create a seperate config that extends and modifies the development version.
# DEVELOPMENT:

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
- when you open review pages header is slightly covering up body fix it (its when you scroll down on main page before you enter a review page)
- fix styled-components issue several instances of ...)

- move to redux 


- STATE DESIGN:
  ```  ideally i want state to be like this:  
    (or design database routes better so front end can fetch only relevant data, on this get help from back end engineers)
    but right now i am providing school name to state and rendering only relevat information to each school

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
{
    seytech: { 
        reviews: [ { id: 1, name: "Ulan", date: Date, pros: "", cons: "", dateGraduated: date, star: STAR(number) }] , 
        logo: URL,
        overall: number,
        lastreview: object 
    }
    cybertek: same ...

}
 
 when user click "LEAVE AND READ MORE REVIEWS" fetch all reviews.

 For Optimiziation: use pagination (load more)

