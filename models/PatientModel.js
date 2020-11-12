var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:fYudGuww0m2wxCG0@cluster0.ihevv.mongodb.net?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});


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
