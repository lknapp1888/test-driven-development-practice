const caesarCipher = function (string = '', shift = 0) {
    let str = string.toLowerCase()
    let retStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            retStr += ' '
            continue;
        }
        if (str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122) {
            retStr += str[i];
            continue;
        }
        let alphNum = str.charCodeAt(i) - 96;
        let charCode = ((alphNum + shift) % 26) + 96;
        retStr += String.fromCharCode(charCode)
    }
    return retStr;
}



module.exports = caesarCipher;