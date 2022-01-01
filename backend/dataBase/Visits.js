const {Schema, model} = require('mongoose');
const {tableNamesEnum} = require('../configs');

const visitsSchema = new Schema({
    start: {
        type: Date,
        unique: true,
        required: true,
        trim: true
    },
    end: {
        type: Date,
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
}, { timestamps: true, toObject: { virtuals: true}, toJSON: { virtuals: true }});

visitsSchema.pre('find', function() {
    this.populate('client');
    visitsSchema.virtual('title').get(function() {
        const title = `${this.client.surname} ${this.client.name}`;
        return title;
    });
});
module.exports = model(tableNamesEnum.VISITS, visitsSchema);
