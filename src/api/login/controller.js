const repo = require('./repository');
const jwt = require('jsonwebtoken');

const getUsersLogin = async (req, res) => {
  try {
    const { emailUser, password } = req.body;
    const [data] = await repo.getUsersLogin(emailUser,password);
    if (!data == []) {
        const token = await jwt.sign(
          { data: data },
          process.env.KEY_SECRET,
          {}
        );
        res.status(200).json({ ...data, token });
      
    } else {
      res.status(500).send({ Message: 'Credenciales Invalidas' });
    }
  } catch (error) {
    res.status(500).send({ Message: error.sqlMessage });
  }
};

module.exports = { getUsersLogin };