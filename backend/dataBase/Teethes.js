const {Schema, model} = require('mongoose');

const {tableNamesEnum} = require('../configs');

const teethesSchema = new Schema({
    formula: {
        type: String,
        required: true,
        trim: true
    },
    side: {
        type: String,
        required: true,
        trim: true
    },
    details: {
        type: String,
        trim: true
    }
}, { timestamps: true, toObject: { virtuals: true}, toJSON: { virtuals: true } });

module.exports = model(tableNamesEnum.TEETHES, teethesSchema);
