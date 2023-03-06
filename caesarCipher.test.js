const caesarCipher = require('./caesarCipher')

test('string should be converted to lower case', ()=> {
    expect(caesarCipher('LEWiS KNapp')).toBe('lewis knapp')
})

test('string with valid shift value should returned caesaredCipher', ()=> {
    expect(caesarCipher('lewis Knapp', 4)).toBe('piamw orett')
})

test('do not cipher any non a-z or A-Z characters', ()=> {
    expect(caesarCipher('LEWIs Knapp!!!@')).toBe('lewis knapp!!!@')
})