function map(array, projection, thisArg) {
    'use strict';
    if (array instanceof Array && projection instanceof Function) {
        var index = 0, result = [];
        var len = array.length;

        //iteration over fixed length 
        for (; index < len; index++) {

            //check for sparse array
            if (index in array) {
                
                var currentElm = array[index];

                //projection is called for undefined values also
                if (currentElm || currentElm === undefined) {
                    result.push(projection.call(thisArg, currentElm, index, array));
                }
            }
        }
        return result;
    }else {
        throw TypeError(`${array} is not a function`);
    }
}