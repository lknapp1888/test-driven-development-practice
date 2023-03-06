const calculator = {
    add: function (one, two) {
        if (!Number.isInteger(one) || !Number.isInteger(two)) {return 'please enter two valid integers'}
        return one + two;
    },
    subtract: function (one, two) {
        if (!Number.isInteger(one) || !Number.isInteger(two)) {return 'please enter two valid integers'}
        return one - two;
    },

    divide: function (one, two) {
        if (!Number.isInteger(one) || !Number.isInteger(two)) {return 'please enter two valid integers'}
        return one / two;
    },

    multiply: function (one, two) {
        if (!Number.isInteger(one) || !Number.isInteger(two)) {return 'please enter two valid integers'}
        return one * two;
    }
}


module.exports = calculator;