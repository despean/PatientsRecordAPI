var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Patient', {useNewUrlParser: true});


const recordSchema = new mongoose.Schema({
    dataType: String,
    dateRecorded : Date,
    readings : [{value: String}],
    patientID: String
});

const PatientRecord = mongoose.model('PatientRecord', recordSchema);

module.exports  = PatientRecord;