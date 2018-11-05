
const UserModel = require('./../database/models/user');
const assert = require('assert');



// Terminlogy
//      model class = UserModel
//      model instance = user

//  Ways to update  
// model class :     
//  1. update
//  2. findOneAndUpdate
//  3. findByIdAndUpdate
// model instance
//  1. update
//  2. set & save        
//  

function assertName(operation, done){
    operation
    .then(()=> UserModel.find({}))
    .then(users=>{
        assert(users.length === 1);
        assert(users[0].name === "Ram Gopal");
        done();
    })
    .catch((e)=>{ done();});
    
}

    describe('delete ', () => {

        var user;
        beforeEach((done)=>{
            user = new UserModel({name: 'Ram',email:'asdasd@g.com'});
            user.save()
                .then(()=>{
                    done();
                });
        });
// done is available for every "it" and "beforeEach" function

            // Deprecated
            // it('1. model instance set and save', (done)=>{
            //     user.set('name', 'Ram gopal');
            //     assertName(user.save(), done);
                    
            // });

            it('2. model instance update', (done)=>{
                assertName(user.update({name:"Ram Gopal"}), done);
            });

            it('3. model class remove', (done)=>{
                assertName(UserModel.update({name: "Ram"}, {name: "Ram Gopal"}), done);
                    
            });

            it('4. model class findOneAndUpdate', (done)=>{
                assertName(UserModel.findOneAndUpdate({name: "Ram"}, {name: "Ram Gopal"}), done);
            });

            it('5. model class findByIdAndUpdate', (done)=>{
                assertName(UserModel.findByIdAndUpdate(user._id, {name: "Ram Gopal"}), done);
            });

            it('6. model class updateOne', (done)=>{
                assertName(UserModel.updateOne({name: "Ram"}, {name: "Ram Gopal"}), done);
            });

            it('6. model class updateMany', (done)=>{
                assertName(UserModel.updateMany({name: "Ram"}, {name: "Ram Gopal"}), done);
            });

            


        });
   