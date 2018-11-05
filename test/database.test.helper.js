// // 1. mocha starts
// // 2. empty database before every test

var mongoose = require('mongoose');

// optional : fix for promise warnings
// mongoose.Promise = global.Promise;

// // 2

// before() - will be call only once
const {startMongo} = require('./../database/connect.-mongodb');

before((done)=>{
    startMongo()
        .then((mongooseConnected)=>{
            mongoose = mongooseConnected;
            console.log('Connected');
            done();
        })
        .catch((error)=>{
            console.warn('Error ',error);
            done();
        });
        
});


beforeEach((done)=>{
    // console.log(mongoose.connection.collections);
    if(mongoose.connection.collections.users){
        mongoose.connection.collections.users.drop(()=> {
        // ready to run next test
        done();
    });
            
    } else{
        done();
    }
})