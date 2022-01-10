const doctorRouter = require('express').Router();

const {Clients, O_Auth} = require('../dataBase');
const {doctorController} = require('../controllers');
const {mainMiddleware, authMiddleware, doctorMiddleware} = require('../middlewares');
const {clientValidator, queryValidator, visitValidator} = require('../validators');
const {tokenEnum} = require("../configs");


doctorRouter.get('/',
    mainMiddleware.validateQuery(queryValidator.queryValidate),
    authMiddleware.checkToken(O_Auth, tokenEnum.ACCESS),
    doctorController.getVisits);

doctorRouter.get(
    '/client',
    mainMiddleware.validateQuery(queryValidator.queryValidate),
    authMiddleware.checkToken(O_Auth, tokenEnum.ACCESS),
    doctorController.getClients,
);

doctorRouter.post(
    '/client',
    authMiddleware.checkToken(O_Auth, tokenEnum.ACCESS),
    mainMiddleware.validateBody(clientValidator.clientValidate),
    mainMiddleware.checkOne(Clients, 'phone'),
    doctorController.createClient
);

doctorRouter.post(
    '/visit',
    mainMiddleware.validateBody(visitValidator.visitValidate),
    doctorMiddleware.checkClientIdToVisitMiddleware(),
    authMiddleware.checkToken(O_Auth, tokenEnum.ACCESS),
    doctorController.createVisit
);

doctorRouter.delete(
    '/client/:_id',
    authMiddleware.checkToken(O_Auth, tokenEnum.ACCESS),
    mainMiddleware.checkUserIdMiddleware(Clients),
    doctorController.deleteClientById
);
doctorRouter.delete('/visit', () => 'del visit');

doctorRouter.get(
    '/client/:_id',
    // mainMiddleware.validateId('client_id'),
    // mainMiddleware.getOneById(Teethes, 'client_id'),
    doctorController.getClientById
);

doctorRouter.put('/client/:_id',
    authMiddleware.checkToken(O_Auth, tokenEnum.ACCESS),
    mainMiddleware.validateBody(clientValidator.clientEditValidate),
    mainMiddleware.checkUserIdMiddleware(Clients),
    doctorController.updateClient
);

doctorRouter.put('/visit/:visit_id', () => 'edit visit');

module.exports = doctorRouter;
