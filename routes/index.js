const { Router } = require('express');
const router = Router();

const ticketController = require('../controllers/ticketController');
const comunicacionController = require('../controllers/comunicacionController')

module.exports = (app) => {
    // Rutas para los tickets de parqueo
    router.get('/tickets', ticketController.getAllTickets);
    router.get('/tickets/:id', ticketController.getTicketById);
    router.post('/tickets', ticketController.createTicket);
    router.put('/tickets/placa', ticketController.updateTicket);
    router.delete('/tickets/:id', ticketController.deleteTicket);

    // Respuesta Mongo
    router.post('/tickets/estado', ticketController.handleMongoResponse);

    app.use('/', router);
};

