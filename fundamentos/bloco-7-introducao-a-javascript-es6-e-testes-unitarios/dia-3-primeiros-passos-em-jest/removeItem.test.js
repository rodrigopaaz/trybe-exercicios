const myRemove = require('./removeItem');
/* const { it } = require('node:test');
const { describe } = require('yargs'); */

describe('testando array:', () => {
    it('verifica se o array contém a informação', () => {
        expect(myRemove([1,2,3,4],5)).toStrictEqual([1,2,3,4]) 
    })
})
