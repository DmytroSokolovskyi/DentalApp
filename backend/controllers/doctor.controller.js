const {Visits, Clients} = require('../dataBase');
const Client = require('../dataBase/Clients');
const {statusEnum} = require("../configs");
const {clientService} = require("../service");

module.exports = {
    getVisits: async (req, res, next) => {
        try {
            const visits = await Visits.find();

            res.json(visits);
        } catch (e) {
            next(e);
        }
    },

    createVisit: async (req, res, next) => {
        try {
            const newVisit = {...req.body, client: req.client._id , doctor: req.user._id};

            const visits = await Visits.create(newVisit);

            res.json(visits);
        } catch (e) {
            next(e);
        }
    },

    getClients: async (req, res, next) => {
        try {
            const clients = await clientService.getAllclients(req.query);

            res.json(clients);
        } catch (e) {
            next(e);
        }
    },

    getClientById: (req, res, next) => {
        try {
            const oneById = req.oneById;

            res.json(oneById);
        } catch (e) {
            next(e);
        }
    },

    createClient: async (req, res, next) => {
        try {
            const client = await Clients.create(req.body);

            res.json(client);
        } catch (e) {
            next(e);
        }
    },
    updateClient: async (req, res, next) => {
        try {
            const {_id} = req.params;
            const client = await Clients.findByIdAndUpdate(_id,{...req.body}, {new: true} );

            res.json(client);
        } catch (e) {
            next(e);
        }
    },

    deleteClientById:async (req, res, next) => {
        try {
            const {_id} = req.params;
            await Client.findByIdAndDelete(_id);

            res.sendStatus(statusEnum.NO_CONTENT);
        } catch (e) {
            next(e);
        }
    },
};


// doctorRouter.get('/', () => 'all visits visit');
// doctorRouter.get('/client', () => 'all clients');
// doctorRouter.delete('/client', () => 'del client');
// doctorRouter.delete('/visit', () => 'del visit');
// doctorRouter.put('/visit/:visit_id', () => 'edit visit');
