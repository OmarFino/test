const router = require('express').Router();
const contorllerUser = require('./controller');

router.get('/getuser',contorllerUser.getuser);
router.post('/postUser',contorllerUser.postUser);

module.exports = router;
