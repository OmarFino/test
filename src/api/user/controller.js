const repo = require('./repository');
/**
 * esta funcion obtiene todos los datos del tipo de documento
 * @param {}
 * @returns id de tipo de documento, tipo de docuemnto , estado
 */
const getuser = async (req, res) => {
  try {
    const data = await repo.getuser();
    res.status(200).send(data);
  } catch (error) {
    res.send(error);
  }
};

const postUser = async (req, res) => {
  try {
    const {
      nombreUser,
      emailUser,
      password
    } = req.body;
    
    const data = await repo.postUser(
      nombreUser,
      emailUser,
      password
    );
    console.log(data+"sss");
    if (data != "") {
      res.status(200).send({ message: 'Transacción Exitosa' });
    } else {
      res.status(500).send({message: data.sqlMessage });
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = { getuser, postUser };
