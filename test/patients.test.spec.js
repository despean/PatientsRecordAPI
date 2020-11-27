let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

const app = require('../app')
describe('/patients', function() {
    it('Returns Json Array of patients', function(done) {
        chai.request(app)
            .get('/patients')
            .end(function(err, res){
                res.should.have.status(200);
                res.body.should.be.a('array');
                done()
            });
    });
    it('Array of patients not empty', function(done) {
        chai.request(app)
            .get('/patients')
            .end(function(err,res){
                res.should.have.status(200);
                res.body.length.should.be.greaterThan(0);
                done()
            });
    });
    it('Get Patient with given ID', function(done) {
        var patienID = '6c2cb3d4-361f-4584-a4b5-c947c36eb4cc'
        chai.request(app)
            .get('/patients/'+patienID)
            .end(function(err, res){
                res.should.have.status(200);
                res.body.should.be.an('array');
                res.body[0].should.have.property("firstName").eql("John");
                done()
            });
    });
    it('Adds a patient to the database', function(done) {
        var patient = {
            "firstName": "Joseph",
            "lastName": "Mithland",
            "dateOfBirth": "11-03-1985",
            "doctor": "Dr. John Oliver",
            "address": "4323 Striner Road",
            "age" : 35
        }
        chai.request(app)
            .post('/patients/')
            .send(patient)
            .end(function(err, res){
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property("address").eql("4323 Striner Road");
                done()
            });
    });
});
describe(' /patients/records', function() {
    it('Returns Json Array of patients records', function(done) {
        chai.request(app)
            .get('/patients/records')
            .end(function(err, res){
                res.should.have.status(200);
                res.body.should.be.a('array');
                done()
            });
    });
    it('patients records of a given patient', function(done) {
        var patienID = '6c2cb3d4-361f-4584-a4b5-c947c36eb4cc'
        chai.request(app)
            .get('/patients/records/'+patienID)
            .end(function(err, res){
                res.should.have.status(200);
                res.body.should.be.a('array');
                done()
            });
    });
});