
# FRONT END ------------------------------------------------------------------

- why i favored this design?
- Because: State at top level component and stateless child components is always preferred in React.
- Good apprach would be: use few callbacks from child component, 2 levels of nesting from the top most component,
    use  ES6 destructuring, Immutability Helpers, triple dot ...(Rest Parameters) operator to manage the state at the top component (on receiving data from children) and keep all the children as stateless components.
- improve test coverage
- If you have components that need 'events' to be passed down and not state (data), or if your nested levels are going beyond 2 and code is unmanageable then you have to explore state management frameworks like Redux. 




# BACK END ------------------------------------------------------------------

### db design 
{ 
    {
        schoolname: "seytech",
        reviews: [ 
            { id: 1, name: "Ulan", date: "03/10/2020", pros: "Nice", cons: "Bad", dateGraduated: 2020, star: 4.4 }, 
            { id: 2, name: "Jazzy", date: "03/10/2020", pros: "Nice", cons: "Bad", dateGraduated: 2008, star: 4.2 }
            ], 
        logo: "https://urls.com",
        overall: 4.3,
        lastreview: { id: 2, name: "Jazzy", date: "03/10/2020", pros: "Nice", cons: "Bad", dateGraduated: 2008, star: 4.2 } 
        ...
    },
        {
        schoolname: "cybertek",
        reviews: [ 
            { id: 1, name: "Jazzy", date: "03/10/2020", pros: "Nice", cons: "Bad", dateGraduated: 2020, star: 4.0 }, 
            { id: 2, name: "Ulan", date: "03/10/2000", pros: "Ok", cons: "Nothing", dateGraduated: 2008, star: 4.0 } 
            ], 
        logo: "https://urlc.com",
        overall: 4.0,
        lastreview: { id: 2, name: "Ulan", date: "03/10/2000", pros: "Ok", cons: "Nothing", dateGraduated: 2008, star: 4.0 } 
        ...
    }
}
    ...
    more schools
 
### notes:
- when user click "LEARN MORE" fetch all reviews.
- For Optimiziation: use pagination (load more)  


### CORS issue on server side:
https://expressjs.com/en/resources/middleware/cors.html


### img urls:
seytech -> https://ibb.co/CKjtwM4
cybertek -> https://cybertekschool.com/wp-content/uploads/2020/02/cybertek_logo_header.svg
cloudgateacademy -> https://ibb.co/ZMq7F4J
salesforcebootcamp -> https://ibb.co/j3CF2Zj