const { Schema, model } = require('mongoose');

const { rolesEnum, tableNamesEnum } = require('../configs');
const { passwordService } = require('../service');
const { DoctorNormalize } = require('../util/user.util');

const doctorsSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: false
    },
    role: {
        type: String,
        default: rolesEnum.DOCTOR,
        enum: Object.values(rolesEnum)
    },
    clients: [{
        type: Schema.Types.ObjectId,
        ref : tableNamesEnum.CLIENTS
    }]
}, { timestamps: true, toObject: { virtuals: true}, toJSON: { virtuals: true } });

doctorsSchema.methods = {
    comparePassword(password) {
        return passwordService.compare(password, this.password);
    },

    normalize() {
        return new DoctorNormalize(this);
    }
};

doctorsSchema.statics = {
    async createDoctorWithPassword(item) {
        const hashedPassword = await passwordService.hash(item.password);

        return this.create({ ...item, password: hashedPassword });
    }
};


module.exports = model(tableNamesEnum.DOCTORS, doctorsSchema);
