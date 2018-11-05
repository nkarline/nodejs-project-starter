
const UserModel = require('./../database/models/user');
const assert = require('assert');



var user;
beforeEach((done)=>{
    user = new UserModel({name: 'Ram',email:'asdasd@g.com'});
    user.save()
        .then(()=>{
            done();
        });
});

   
    describe('Read ', () => {
            it('1. find a user by name', (done)=>{
                UserModel
                .find({name: 'Ram'})
                .then((users)=>{
                    // console.log(users);
                    assert(users[0]._id.toString() === user._id.toString());
                    done();
                })
                .catch((e)=>{ done();});

            });

            it('2. find a user by _id', (done)=>{
                UserModel
                .findOne({_id: user._id})
                .then((user)=>{
                    // console.log(users);
                    assert(user.name === 'Ram');
                    done();
                })
                .catch((e)=>{ done();});

            });

        });
   