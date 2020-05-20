const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var SymptomSchema = new Schema(
	{
		code: String,
		name: String,
	}, { collection : 'symptoms' } 
);

module.exports = mongoose.model('Symptom', SymptomSchema);
