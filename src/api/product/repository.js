const knex = require('../../database');

const getProduct = async (idUSer) => {
  const query = await knex
    .select()
    .from('product')
    .where({stateProducto: 'A'})
  return query;
};

const postProduct = async (
  nombreProducto,
  precioProducto,
  idUser) => {
  return knex('product')
    .insert({
      nombreProducto:nombreProducto,
      precioProducto:precioProducto,
      user_idUser:idUser
    })
};

const putProduct = async (
  nombreProducto,
  precioProducto,
  idProduct) => {
  return knex('product')
    .update({
      nombreProducto:nombreProducto,
      precioProducto:precioProducto,
    })
    .where({idProduct:idProduct})
};

const deleteProduct = async (
  idProduct) => {
  return knex('product')
    .update({
      stateProducto: 'I',
    })
    .where({idProduct:idProduct})
};

module.exports = { getProduct, postProduct, putProduct, deleteProduct };
