### how to fireup mongo database: 
    1.terminal: ``` $ mongod --dbpath /Users/ulan13/Desktop/node-tutorial-2-restful-app/datab```
    2.terminal: ```$ cd /usr/local/bin``` -> then run ```$ mongo```
- later switch to mongoose and moongo Atlas
##### some useful commands:
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