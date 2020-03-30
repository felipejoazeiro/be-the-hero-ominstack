/* Instalar: npm install supertest -D  |  Para iniciar um teste: npm test*/
const request = require('supertest')
const connection = require('../../src/database/connection')
const app = require('../../src/app')
describe('ONG', () =>{
    beforeEach(async()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })
    afterAll(async () =>{
        await connection.destroy()
    })
    it('Should be able to create a new ONG', async () =>{
        const response = await request(app).post('/ongs').send({
            name: "TESTE",
            email: "contato@gmail.com",
            whatsapp: "4700000000",
            city: "Rio de Janeiro",
            uf: "RJ"
        })
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8);
    })
})