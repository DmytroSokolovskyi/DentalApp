const Joi = require("joi");
const {constants} = require("../configs");

const visitValidate = Joi.object({
    start: Joi
        .string()
        .required()
        .trim(),
    end: Joi
        .string()
        .required()
        .trim(),
    client: Joi
        .string()
        .required()
        .regex(constants.ID_REGEXP)
        .trim(),
});

const editVisitValidate = Joi.object({
    start: Joi
        .string()
        .trim(),
    end: Joi
        .string()
        .trim(),
    client: Joi
        .string()
        .regex(constants.ID_REGEXP)
        .trim(),
});

module.exports = {
    visitValidate,
    editVisitValidate
};
