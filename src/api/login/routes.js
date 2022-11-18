const router =require('express').Router();
const controllerLogin= require('./controller');

router.get('/login', controllerLogin.getUsersLogin);

module.exports = router;