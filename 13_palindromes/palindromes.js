const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedWord = word
     .toLowerCase()
     .split('')
     .filter((character) => alphanumerical.includes(character))
     .join('');

    const reversedWord = cleanedWord.split('').reverse().join('');

    return reversedWord === cleanedWord;
};

// Do not edit below this line
module.exports = palindromes;
