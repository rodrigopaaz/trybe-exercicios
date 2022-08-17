const {encode , decode } = require('./encodeDecode')


describe('Testando Encode e Decode', () => {
test ('testa função', () => expect(encode('aeiou')).toMatch('12345'))

test ('testa função', () => expect(decode('12345')).toMatch('aeiou'));

test ('testa função', () => expect(decode('67890')).not.toMatch('aeiou'))
test ('testa função', () => expect(decode('bcdfg')).not.toMatch('12345'));

test ('testa função', () => expect(decode('abcde').length).toBe(5));

});