var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Patient', {useNewUrlParser: true});


const patientSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    patientID: String,
    doctor: String,
    address: String,
    age : String,
    mostRecentVisit: Date
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports  = Patient;
