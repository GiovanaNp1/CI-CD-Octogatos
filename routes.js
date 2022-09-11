const { Router } = require('express')
const routes = Router();
const PeopleController = require('./controller/peopleController')


 routes.get('/people', PeopleController.show);
 routes.post('/people', PeopleController.create);

 module.exports = routes