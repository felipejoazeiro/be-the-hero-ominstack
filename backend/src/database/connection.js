const knex = require('knex')
const configuration = require('../../knexfile')

/*Campo criado para ambiente de testes. Instalar npm install  cross-env*/
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(config)

module.exports = connection;