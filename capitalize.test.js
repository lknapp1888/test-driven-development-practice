const capitalize = require('./capitalize')

test(`variable entered must be a string`, () => {
    expect(capitalize(3)).toBeUndefined();
})

test('first letter of word must be capitalized', () => {
    expect(capitalize('lewis')).toBe('Lewis')
})