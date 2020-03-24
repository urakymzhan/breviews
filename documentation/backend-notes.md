### how to fireup mongo database: 
    1.terminal: ``` $ cd /usr/local/bin``` -> then run $ mongod --dbpath /Users/ulan13/Desktop/node-tutorial-2-restful-app/datab```
    2.terminal: ```$ mongo -> to go shell```

##### some useful mongodb commands:
-  show dbs
- use nodetest2
- show collections
- db.userlist.find() // findOne() || db.userlist.find().pretty() 
- find() method has many options 
- db.userlist.find().sort({ title: 1 or -1}).pretty()
- db.userlist.find().sort({ title: -2 }).count()
- db.userlist.find().count()
- db.userlist.find().limit(2)
- db.insert(), insertMany();
- db.userlist.find().forEach(function(doc) { print( 'Blog Post: ' + doc.title )})
- db.userlist.update( { title: 'Review 1'}, { title: 'Review 2', text: 'this is updated review'}, { upsert: true })

### CORS issue on server side:
https://expressjs.com/en/resources/middleware/cors.html


### DATABASE DESIGN
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
    },
        {
        schoolname: "cybertek",
        reviews: [ 
            { id: 1, name: "Aza", date: "03/10/2020", pros: "Nice", cons: "Bad", dateGraduated: 2020, star: 4.0 }, 
            { id: 2, name: "Nass", date: "03/10/2000", pros: "Ok", cons: "Nothing", dateGraduated: 2008, star: 4.0 } 
            ], 
        logo: "https://urlc.com",
        overall: 4.0,
        lastreview: { id: 2, name: "Nass", date: "03/10/2000", pros: "Ok", cons: "Nothing", dateGraduated: 2008, star: 4.0 } 
    }
}
    ...
    more schools
 
- when user click "LEAVE AND READ MORE REVIEWS" fetch all reviews.
- For Optimiziation: use pagination (load more)


### IMG URLS:

seytech -> https://ibb.co/CKjtwM4
cybertek -> https://cybertekschool.com/wp-content/uploads/2020/02/cybertek_logo_header.svg
cloudgateacademy -> https://ibb.co/ZMq7F4J
salesforcebootcamp -> https://ibb.co/j3CF2Zj
