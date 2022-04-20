const chai = require('chai');
const chaiHttp = require('chai-http');
const res = require('express/lib/response');
const app = require('../app');

chai.use(chaiHttp);
chai.should();

describe("/",() => {
    describe("POST /",() => {
        it("should succed a sort and post data",(done) => {
            let body = {
                number: "5,3,79,0,4,3,5,6,7,4,3"
            }
            chai.request(app)
            .post('/sort-data')
            .send(body)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
      
        })
    })
})