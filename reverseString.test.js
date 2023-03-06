const reverseString = require('./reverseString')

test('accept only strings', () => {
    expect(reverseString(2)).toBeUndefined()
})

test('return the string entered as a parameter in reverse', ()=> {
    expect(reverseString('lewis')).toBe('siwel')
})