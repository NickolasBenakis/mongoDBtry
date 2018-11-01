const request = require('supertest');
const expect = require('expect');

const { app } = require('./../server');
const { Contacts } = require('./../models/contacts');
const { Users } = require('./../models/users');

beforeEach((done) => {
    Users.remove({}).then(() => done());
});

describe('POST /users', () => {
    it('should create a new user', (done) => {
        var email = "test@gmail.com";



        request(app)
            .post('/users')
            .send({ email })
            .expect(200)
            .expect((res) => {
                expect(res.body.email).toBe(email);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Users.find().then((users) => {
                    expect(users.length).toBe(1);
                    expect(users[0].email).toBe(email);
                    done();
                }).catch((err) => done(err));
            });
    });
    // it('should not create Users with invalid body data', (done) => {
    //     request(app)
    //         .post('/todos'
    //             .send({})
    //             .end((err, res) => {
    //                 if (err) {
    //                     return done(err);
    //                 }
    //                 Users.find().then(( )=>{
                        
    //                 })
    //             })
    //         )
    // });
})