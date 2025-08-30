const removeFromArray = function (arr, ...elements) {

    for (const element of elements) {
        let index = 0;
        while (index !== -1 && arr.includes(element)) {
            index = arr.indexOf(element);
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
