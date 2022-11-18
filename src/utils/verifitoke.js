const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  verifytokenUser: async function (req, res, next) {
    let token = req.headers['authorization'];
    if (!token) {
      return res
        .status(401)
        .send({ message: 'no token No se ha proporcionado ningún token' });
    }
    try {
      token = token.replace('Bearer ', '');
      const decoded = await jwt.verify(token, process.env.KEY_SECRET);
      decoded.data.fkRole === 1
        ? next()
        : res.status(401).send({
            message: 'No tiene autorización para esta solicitud'
          });
    } catch (error) {
      return res.status(401).send({
        message: error.message
      });
    }
  }
};
