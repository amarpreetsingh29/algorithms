/**
 * Created by samarpreet on 26/03/17.
 */


function flattenArray(input, result) {
    var result = result || [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] instanceof Array) {
            flattenArray(input[i], result);
        } else {
            result.push(input[i]);
        }
    }
    return result;
}

var t = flattenArray([1,2,[3,4,[5,6]]]);
console.log(t);