
const UserModel = require('./../database/models/user');
const assert = require('assert');



// Terminlogy
//      model class = UserModel
//      model instance = user

//  Ways to delete 
// model class :
//  1. remove
//  2. findOneAndRemove
//  3. findByIdAndRemove
// model instance
//  1. remove
//

function assertName(operation, done){
    operation
    .then(()=> UserModel.findOne({name: 'Ram'}))
    .then((user)=>{
        assert(user === null);
        done();
    })
    .catch((e)=>{ done();});
}

    describe('Delete ', () => {

        var user;
        beforeEach((done)=>{
            user = new UserModel({name: 'Ram',email:'asdasd@g.com'});
            user.save()
                .then(()=>{
                    done();
                })
                .catch((e)=>{
                    done();
                });
        });

// done is available for every "it" and "beforeEach" function
            it('1. model instance remove', (done)=>{
                user.remove()
                    .then(() => UserModel.findOne({name: 'Ram'}))
                    .then(user=>{
                        // console.log(user);
                        assert(user === null);
                        done();
                    })
                    .catch((e)=>{
                        done();
                    });
            });

            it('2. model class remove', (done)=>{
                UserModel.remove({name: "Ram"})
                    .then(()=> UserModel.findOne({name: 'Ram'}))
                    .then((user)=>{
                        assert(user === null);
                        done();
                    })
                    .catch((e)=>{ done();});
                    
            });

            it('3. model class findOneAndRemove', (done)=>{
                UserModel.findOneAndRemove({name: "Ram"})
                    .then(()=> UserModel.findOne({name: 'Ram'}))
                    .then((user)=>{
                        assert(user === null);
                        done();
                    })
                    .catch((e)=>{ done();});
                    
            });

            it('4. model class findByIdAndRemove', (done)=>{
                UserModel.findByIdAndRemove(user._id)
                    .then(()=> UserModel.findOne({name: 'Ram'}))
                    .then((user)=>{
                        assert(user === null);
                        done();
                    })
                    .catch((e)=>{ done();});
                    
            });

            it('5. model class deleteOne', (done)=>{
                assertName(UserModel.deleteOne({name: "Ram"}, done));
            });

            it('6. model class deleteMany', (done)=>{
                assertName(UserModel.deleteMany({name: "Ram"}, done));
            });


        });
   