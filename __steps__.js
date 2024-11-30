

//----------MongoDB connection---------------

// 1. create account in MongoDB
// 2. create an user with password
// 3. whitelist IP address
// 4. database > connect > driver > Node > view full code
// 5. change the password in the uri

//--------------------------------------------





//            ---CRUD-C---


// . CREATE ----> POST   ---> Server side
// app.post('/users', async(req, res) => {})
// make the function async to use await inside it
// make sure you use the express.json() middleware
// access data from the body: const user = req.body
// const result = await usersCollection.insertOne(user);
// res.send(result)

// . CREATE -----> POST  ---> Client side
// create fetch
// add second parameter as an object
// provide method: 'POST'
// add headers: {'content-type': 'application/json'}
// add body: JSON.Stringify(user)











//  Many             ---CRUD-R---

// . READ--->GET      ---> Server side
// create a cursor = userCollection.find()
// const result = await cursor.toArray()









//            ---CRUD-D--

// .DELETE       --->Server side
// create app.delete('/users/:id', async(req, res) => {})
// const id = req.params.id;
// specify unique ObjectId to delete the right user
// const query = {_id: new ObjectId(id)};
// const result = await usersCollection.deleteOne(query);
// res.send(result);



// . DELETE      ---> Client side
// create dynamic url with id
// mention the DELETE method