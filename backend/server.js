const express = require('express');  // imports express 
const cors = require('cors'); // imports cors
const mongoose = require('mongoose');  //imports mongoose

require('dotenv').config();   // imports dotenv

const app= express();        // creating an express app
const port= process.env.PORT || 5000;   // defining the port as being 5000

app.use(cors());                    // our app uses cors
app.use(express.json());            // and uses express.json

const uri = process.env.ATLAS_URI;          //uri which is the mongoose atlas link for connecting to the data base
mongoose.connect(uri, { useNewUrlParser:true, useCreateIndex : true})   //connects our app to our mongo DataBase

const connection =mongoose.connection;      // creating an instance of a mongoose connection
connection.once('open', () => {             //specifiying what happens when a connection with mongooose is established
    console.log("MongoDB database connecion established successulty")
})

const exercicesRouter = require('./routes/exercices')       // defining the exercices route which is /exercices
const usersRouter = require('./routes/users')           //defining the users route which is /users

app.use('/exercices',exercicesRouter)       //our app uses our exercices route
app.use('/users',usersRouter)               //and our users route

app.listen(port, () => {            //specifiying at which port the app listens 
    console.log("server is running on port :",port)
})

//To run the server we need to type :nodemon server in the console
