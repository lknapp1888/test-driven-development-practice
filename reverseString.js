const reverseString = function (word) {
    if (typeof word !== 'string') {return}
    let newWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        newWord += word[i]
    }
    return newWord;
}

module.exports = reverseString;