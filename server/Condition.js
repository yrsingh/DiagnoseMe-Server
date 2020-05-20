const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ConditionSchema = new Schema(
	{
        name: String,
        imageURL: String,
        symptoms:[String],
        suggestion: String
	}, { collection : 'conditions' } 
);

module.exports = mongoose.model('Condition', ConditionSchema);
