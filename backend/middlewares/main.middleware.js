const {errorsEnum, statusEnum} = require('../configs');
const {isValidObjectId} = require('mongoose');

module.exports ={
    checkOne: (tableName, key) => async (req, res, next) => {
        try {
            const user = await tableName.findOne({ [key]: req.body[key] });

            if (user) {
                return next(errorsEnum.CONFLICT);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    validateBody: (validator) => async (req, res, next) => {
        try {
            const {error, value} = await validator.validate(req.body);

            if (error) {
                return next({message: error.details[0].message, status: statusEnum.BAD_REQUEST});
            }

            req.body = value;
            next();
        } catch (e) {
            next(e);
        }
    },

    findAndCheckOne: (tableName, key, checkToExist) => async (req, res, next) => {
        try {
            const oneItem = await tableName.findOne({ [key]: req.body[key] });

            if (!oneItem && !checkToExist) {
                return next(errorsEnum.NOT_FOUND);
            }

            if (oneItem && checkToExist) {
                return next(errorsEnum.CONFLICT);
            }

            if (oneItem && !checkToExist) {
                req.one = oneItem;
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkRole: (roles = []) => (req, res, next) => {
        try {
            const { role } = req.user;

            if (!roles.includes(role)) {
                return next(errorsEnum.FORBIDDEN);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkUserIdMiddleware: (tableName) => async (req, res, next) => {
        try {
            const {_id} = req.params;

            if (!isValidObjectId(_id)) {
                return next(errorsEnum.BAD_REQUEST);
            }

            const user = await tableName.findById(_id).lean();

            if (!user) {
                return next(errorsEnum.NOT_FOUND);
            }

            req.userById = user;

            next();
        } catch (e) {
            next(e);
        }
    },

    validateQuery: (validator) => async (req, res, next) => {
        try {
            const {error, value} = await validator.validate(req.query);

            if (error) {
                return next({message: error.details[0].message, code: statusEnum.BAD_REQUEST});
            }

            req.query = value;

            next();
        } catch (e) {
            next(e);
        }
    },
};
