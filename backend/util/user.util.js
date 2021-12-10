const userNormalizator = (userToNormalize = {}) => {
    const fieldsToRemove = ['password'];

    fieldsToRemove.forEach((field) => {
        delete userToNormalize[field];
    });

    return userToNormalize;
};
class DoctorNormalize {
    constructor({ _id, name, email, phone, role, activate }) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.role = role;
        this.activate = activate;
    }
}

module.exports = {
    userNormalizator,
    DoctorNormalize
};
