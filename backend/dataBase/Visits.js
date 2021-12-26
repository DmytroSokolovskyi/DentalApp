const {Schema, model} = require('mongoose');
const {tableNamesEnum} = require('../configs');

const visitsSchema = new Schema({
    start: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    end: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: tableNamesEnum.DOCTORS
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: tableNamesEnum.CLIENTS,
        required:true
    },
    finished: {
        type: Boolean,
        default: false
    }
}, { timestamps: true, toObject: { virtuals: true}, toJSON: { virtuals: true } });

module.exports = model(tableNamesEnum.VISITS, visitsSchema);
