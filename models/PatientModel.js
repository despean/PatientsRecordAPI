var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Patient', {useNewUrlParser: true});


const patientSchema = new mongoose.Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    dateOfBirth: {type:Date, required:true},
    patientID: {type:String, required:true},
    doctor: {type:String, required:true},
    address: {type:String, required:true},
    age : {type:String, required:true},
    mostRecentVisit: {type:Date, required:true}
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports  = Patient;
