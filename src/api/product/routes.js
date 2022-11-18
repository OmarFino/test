const router = require('express').Router();
const contorllerUser = require('./controller');
const { verifytokenUser } =require('./../../utils/verifitoke');

router.get('/getProduct',verifytokenUser,contorllerUser.getProduct);
router.post('/postProduct',verifytokenUser,contorllerUser.postProduct);
router.put('/putProduct',verifytokenUser,contorllerUser.putProduct);
router.delete('/deleteProduct/:idProduct',verifytokenUser,contorllerUser.deleteProduct);

module.exports = router;