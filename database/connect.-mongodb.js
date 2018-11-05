// To connect to mongoDB  , we can use mongoDB defualt library or mongoose
// 
// To start mongo use cmd - "mongod" 
//
//
// using MONGODB  V2
// const mongoClient = require('mongodb').MongoClient;
// // in mongodb database can be created dynamically 
// mongoClient.connect('mongodb://localhost:27017/databaseName', { useNewUrlParser: true } , (error, db) => {
//     if(error){
//         return console.log('Unable to connect to mongo server!')
//     } else {
//         console.log('Connected to mongo server');
//     }
//     db.close();
// });


// using MONGODB  V3
// const { MongoClient, ObjectID} = require('mongodb');     // object destructuring ES property
// var newId = new ObjectID();                              // generate new id
// // or we could assign _id manually in mongo

// // in mongodb database can be created dynamically 
// MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true } , (error, client) => {
//     if(error){
//         return console.log('Unable to connect to mongo server!')
//     } 
    
//     console.log('Connected to mongo server');
//     const db = client.db('School');

//     dbFunctions(db, 'users');
    
//     client.close();
   
// });


// using MONGOOSE - an ORM  (object relational mapping)
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/School';

mongoose.connect(uri,{useNewUrlParser: true});

const startMongo = () =>  new Promise((resolve,reject)=> {
    mongoose.connection
    .once('open', () => {
        resolve(mongoose);
     } )
    .on('error', (error) => {
        reject(error);
    });
});

module.exports.startMongo = startMongo;

// OR


// mongoose.connect( uri , { useNewUrlParser: true } , (error, db) => {
//     if(error){
//                 return console.log('Unable to connect to mongo server!')
//             } 
//         db.collection('users').insertOne({
//             name: 'Rahul singh',
//             email: 'rahul@gmail.com'
//         }, (err, res) => {
//             if(err){
//             return console.log("Unable to insert user",err);
//             }
//             console.log(JSON.stringify(res.ops, undefined, 2));
//         });
//             db.close();
//         });
