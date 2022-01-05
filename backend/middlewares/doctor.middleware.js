const {isValidObjectId} = require("mongoose");
const {errorsEnum} = require("../configs");
const Clients = require("../dataBase/Clients");

module.exports = {
    checkClientIdToVisitMiddleware: () => async (req, res, next) => {
        try {
            const id = req.body.client;

            if (!isValidObjectId(id)) {
                return next(errorsEnum.BAD_REQUEST);
            }

            const client = await Clients.findById(id).lean();

            if (!client) {
                return next(errorsEnum.NOT_FOUND);
            }

            req.client = client;

            next();
        } catch (e) {
            next(e);
        }
    },
};
