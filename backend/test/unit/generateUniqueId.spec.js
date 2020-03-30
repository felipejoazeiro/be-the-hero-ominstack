const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Genarete Unique ID', () => {
    it('Hould generate at unique ID', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(8);    
    })
})