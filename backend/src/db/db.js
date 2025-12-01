const e = require('express');
const mongoose = require('mongoose');

async function connectDb() { 
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected to mongoose successfully')

         }
         catch(err){
            console.error('Error connecting to MongoDb:', err)
         }
}

module.exports = connectDb;