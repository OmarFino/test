const knex = require('../../database');

const getuser = async () => {
  const query = await knex
    .select()
    .from('user')
  return query;
};

const postUser = async (
  nombreUser,
  emailUser,
  password) => {
  return knex('user')
    .insert({
      nombreUser:nombreUser,
      emailUser:emailUser,
      password:password
    })
};

module.exports = { getuser, postUser };
