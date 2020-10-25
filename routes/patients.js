var express = require('express');
var router = express.Router();
var Patient = require( '../models/PatientModel');
var Records = require( '../models/PatientRecordModel');
const { v4: uuidv4 } = require('uuid');

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
    // {
    //     "firstName": "Kenyi",
    //     "lastName": "Despean",
    //     "dateOfBirth": "11-03-1994",
    //     "doctor": "Dr. John Pilom",
    //     "address": "43 longbridge street ",
    //     "age" : 34
    // }
    // data body format
    var patient = new Patient(req.body);
    patient.patientID  = uuidv4();
    patient.mostRecentVisit = Date.now();
    patient.save()
    res.send(patient.toJSON());
});


module.exports = router;
