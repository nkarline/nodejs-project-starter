
const UserModel = require('./../database/models/user');
const assert = require('assert');

before((done)=>{
    done();
});

beforeEach((done)=>{
    done();
});

    describe('Create ', () => {
// done is available for every "it" and "beforeEach" function
            it('1. should saves a user', (done)=>{
                const user = new UserModel({name: 'Ram',email:'asdasd@g.com'});
                user.save()
                    .then(()=>{
                        // Has user been saved successfully - is it not new
                        assert(!user.isNew);
                        done();
                    });
            })
        });
   