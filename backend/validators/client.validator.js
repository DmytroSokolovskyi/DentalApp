const Joi = require('joi');

const {constants, rolesEnum} = require('../configs');

const clientValidate = Joi.object({
    name: Joi
        .string()
        .min(3)
        .max(30)
        .trim()
        .required(),
    surname: Joi
        .string()
        .min(5)
        .max(30)
        .trim(),
    phone: Joi
        .string()
        .regex(constants.MOBILE_REGEXP)
        .required(),
    email: Joi
        .string()
        .regex(constants.EMAIL_REGEXP)
        .lowercase(),
    role: Joi
        .string()
        .allow(...Object.values(rolesEnum))
});

const clientEditValidate = Joi.object({
    name: Joi
        .string()
        .min(2)
        .max(30)
        .trim(),
    surname: Joi
        .string()
        .min(5)
        .max(30)
        .trim(),
    role: Joi
        .string()
        .allow(...Object.values(rolesEnum)),
});

module.exports = {
    clientValidate,
    clientEditValidate
};
