/**
 * Created by samarpreet on 27/03/17.
 */

import smallest from './smallest';

function tSort(input) {
    return util(JSON.parse(JSON.stringify(input)));
}

function util(input,result) {
    var result = result || [];
    for(let i=0; i<input.length; i++){
       let elm = smallest(input,result);
        input.splice(input.indexOf(elm),1);
        result.push(elm);
        tSort(input,result);
    }
    return result;
}
