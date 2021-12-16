const doctorRouter = require('express').Router();

const {Clients, O_Auth} = require('../dataBase');
const {doctorController} = require('../controllers');
const {mainMiddleware, authMiddleware} = require('../middlewares');
const {clientValidator} = require('../validators');
const {tokenEnum} = require("../configs");


doctorRouter.get('/', doctorController.getVisits);
doctorRouter.get(
    '/client',
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
// todo createVisit
doctorRouter.post('/visit', doctorController.createVisit);
doctorRouter.delete(
    '/client/:_id',
    authMiddleware.checkToken(O_Auth, tokenEnum.ACCESS),
    mainMiddleware.checkUserIdMiddleware(Clients),
    doctorController.deleteClientById
);
doctorRouter.delete('/visit', () => 'del visit');
doctorRouter.get(
    '/client/:client_id',
    // mainMiddleware.validateId('client_id'),
    // mainMiddleware.getOneById(Teethes, 'client_id'),
    doctorController.getClientById
);
doctorRouter.put('/client/:_id',
    authMiddleware.checkToken(O_Auth, tokenEnum.ACCESS),
    mainMiddleware.validateBody(clientValidator.clientEditValidate),
    mainMiddleware.checkUserIdMiddleware(Clients),
    doctorController.updateClient);
doctorRouter.put('/visit/:visit_id', () => 'edit visit');

module.exports = doctorRouter;
