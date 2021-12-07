const { Doctors } = require('../dataBase');
const { config, rolesEnum} = require('../configs');

module.exports = async () => {
    const admin = await Doctors.findOne({ role: rolesEnum.ADMIN });

    if (!admin) {
        await Doctors.createDoctorWithPassword({
            name: 'Admin',
            email: config.ADMIN_EMAIL,
            phone: config.ADMIN_NUMBER,
            password: 'fsFD43!dsadxzc',
            role: rolesEnum.ADMIN,
            activate: true
        });
    }
};
