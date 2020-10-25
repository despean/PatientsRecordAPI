var express = require('express');
var router = express.Router();
var Patient = require( '../models/PatientModel');
var Records = require( '../models/PatientRecordModel');
const { v4: uuidv4 } = require('uuid');


router.get('/', function(req, res, next) {
    Patient.find({}, function(err, docs){
        res.send(docs);
    })

});

router.get('/:id', function(req, res, next) {
    Patient.find({patientID:req.params.id}, function(err, docs){
        res.send(docs);
    })

});

router.post('/', function(req, res, next) {
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
    patient.save().then(function(data){
        res.send(patient.toJSON());
    }).catch(function(ex){
        res.send(ex)
    })

});

router.post('/records/:id', function(req, res, next) {
    // {
    //     dataType: {type:String, required:true},
    //     dateRecorded : {type:Date, required:true},
    //     readings : {type:String, required:true},
    //     patientID: {type:String, required:true}
    // }
    // record data field
    var record = new Records(req.body);
    Patient.find({patientID:req.params.id}, function(err, docs){
        if(docs.length >= 1){
            record.dateRecorded = Date.now();
            record.patientID = req.params.id;
            record.save().then(function(doc){
                res.send(doc.toJSON())
            }).catch(function(ex){
                res.send(ex)
            })
        }else{
            res.send({'error': 'Patient not found make sure patient ID is correct'})
        }
    })
});

router.get('/records/:id', function(req, res, next) {
    Records.find({patientID:req.params.id}, function(err, docs){
        res.send(docs);
    })
});

router.get('/records/:id/:datatype', function(req, res, next) {
    var datatype  = req.params.datatype.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    Records.find({patientID:req.params.id, dataType:datatype}, function(err, docs){
        res.send(docs);
    })
});

router.get('/records/', function(req, res, next) {
    Records.find({}, function(err, docs){
        res.send(docs);
    })
});


module.exports = router;
