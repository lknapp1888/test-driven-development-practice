const capitalize = function (word) {
    if (typeof word !== 'string') return;
    let first = word[0];
    let newWord = word.slice(1, word.length);
    return first.toUpperCase() + newWord;
}

module.exports = capitalize;