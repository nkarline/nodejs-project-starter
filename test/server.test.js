const request  = require('supertest');      // assertion library
const app = require('./../server').app;
const rewire = require('rewire');


// it can work alone or inside "describe"



// describe can be nested

describe('Server',()=>{

    describe('GET /',()=>{
            it('should return working stat!',(done)=>{
                request(app)
                .get('/')
                .expect(200)
                .expect('<h1>Home page request</h1>')
                .end(done);
            });
        });
    
    describe('GET /users',()=>{
            it('should return working stat!',(done)=>{
                request(app)
                .get('/')
                .expect(200)
                .expect('<h1>Home page request</h1>')
                .end(done);
            });
        });

})