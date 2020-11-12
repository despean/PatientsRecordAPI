var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:fYudGuww0m2wxCG0@cluster0.ihevv.mongodb.net?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});


const recordSchema = new mongoose.Schema({
    dataType: {type:String, required:true},
    dateRecorded : {type:Date, required:true},
    readings : {type:String, required:true},
    patientID: {type:String, required:true}
});

const PatientRecord = mongoose.model('PatientRecord', recordSchema);

module.exports  = PatientRecord;