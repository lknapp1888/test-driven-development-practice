const calculator = require('./calculator')

test('expect two parameters entered to be integers', ()=> {
    expect(calculator.add('dsds', 2)).toBe('please enter two valid integers');
    expect(calculator.add(2, 'fdfd')).toBe('please enter two valid integers');
    expect(calculator.subtract('dsds', 2)).toBe('please enter two valid integers');
    expect(calculator.subtract(2, 'fdfd')).toBe('please enter two valid integers');
    expect(calculator.divide('dsds', 2)).toBe('please enter two valid integers');
    expect(calculator.divide(2, 'fdfd')).toBe('please enter two valid integers');
    expect(calculator.multiply('dsds', 2)).toBe('please enter two valid integers');
    expect(calculator.multiply(2, 'fdfd')).toBe('please enter two valid integers');
})

test('expect two parameters, even if first is integer', () => {
    expect(calculator.add(2)).toBe('please enter two valid integers')
    expect(calculator.subtract(2)).toBe('please enter two valid integers')
    expect(calculator.divide(2)).toBe('please enter two valid integers')
    expect(calculator.multiply(2)).toBe('please enter two valid integers')
})

test('add function should return sum of two integers', () => {
    expect(calculator.add(2, 4)).toBe(6)
})

test('subtract function should return second param subtracted from first param', () => {
    expect(calculator.subtract(10, 6)).toBe(4)
})  

test('divide second param by first', () => {
    expect(calculator.divide(25, 5)).toBe(5)
})

test('multply the two parameters', () => {
    expect(calculator.multiply(25, 5)).toBe(125)
})

