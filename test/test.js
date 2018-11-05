

// var addSurname = function(name, callback){
//     var surname = ' Smith';
//     var fullname = name + surname;
//     callback(fullname);
// }

// addSurname( "Will", function(fullname) {
//     console.log(fullname);
// }) ;

// var promise = new Promise((resolve , reject)=>{
    
//     const latePromise = setTimeout(()=>{
//         return new Promise((resolve,reject) => resolve("Resolved after 2s"));
        
//     }, 2000);

//     if(true){
//         resolve({msg:"Resolved",latePromise});
//         resolve("Resolved twice"); // will not execute -> resolve is not called twice
//         reject("Rejected after resolving"); // will not execute -> already resolve
//     } else {
//         reject("rejected");
//     }

    
// });

// promise
// .then(res=> console.log(res.))
// .catch(err=> console.log(err));
