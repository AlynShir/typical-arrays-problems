exports.min = function min(array) {
    if (array == undefined || array.length == 0) return 0;
    let minNum = array[0];
    array.forEach(function(element) {
        if (minNum > element)
            minNum = element;
    });
    return minNum;
}

exports.max = function max(array) {
    if (array == undefined || array.length == 0) return 0;
    let minNum = array[0];
    array.forEach(function(element) {
        if (minNum < element)
            minNum = element;
    });
    return minNum;
}

exports.avg = function avg(array) {
    if (array == undefined || array.length == 0) return 0;
    let sum = 0;
    array.forEach(function(element) {
        sum = sum + element;
    });
    return sum / array.length;
}