var express = require('express');
var router = express.Router();
var Patient = require( '../models/PatientModel');
var Records = require( '../models/PatientRecordModel');

/* GET home page. */
router.get('/getPatients', function(req, res, next) {
    Patient.find({}, function(err, docs){
        res.send(docs);
    })

});

router.get('/getPatients/:id', function(req, res, next) {
    Patient.find({patientID:req.params.id}, function(err, docs){
        res.send(docs);
    })

});

router.post('/addPatient', function(req, res, next) {
    var patient = new Patient();
    console.log(req.body)
    patient.firstName = "despean"
    patient.save()
    res.send(patient.toJSON());
});

router.get('/addPatientRecord/:id', function(req, res, next) {
    var record = new Records();
    record.dataType = "Blood Pressure"
    record.save()
    res.send(record.toJSON());
});

router.get('/getPatientRecord/:id', function(req, res, next) {
    Patient.find({patientID:req.params.id}, function(err, docs){
        res.send(docs);
    })

});

router.get('/getPatientRecord/:id/:datatype', function(req, res, next) {
    Patient.find({patientID:req.params.id}, function(err, docs){
        res.send(docs);
    })

});
router.get('/getAllPatientRecord/', function(req, res, next) {
    Patient.find({patientID:req.params.id}, function(err, docs){
        res.send(docs);
    })

});


module.exports = router;
