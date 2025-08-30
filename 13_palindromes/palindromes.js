const palindromes = function (string) {
    let cleanString = string
        .toLowerCase()
        .split('')
        .filter(char => {
            return (
                char.toLowerCase() !== char.toUpperCase() ||
                char == parseInt(char)
            )
        })
        .join('')

    return cleanString === cleanString.split('').reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
