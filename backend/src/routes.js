const express = require('express')

const sessionControllers = require('./controllers/SessionController')
const ongControllers = require('./controllers/OngControllers')
const IncidentController = require('./controllers/IncidentControllers')
const profileController = require('./controllers/ProfileController')
const routes = express.Router();

routes.post('/sessions', sessionControllers.create)

routes.get('/ongs', ongControllers.index)
routes.post('/ongs', ongControllers.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;