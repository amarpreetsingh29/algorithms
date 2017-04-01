/**
 * Created by samarpreet on 02/04/17.
 */

import tSort from './sort';

export default function elementUniqueness(input) {
    if(input && input.length){
        var input = tSort(input); //sort it
        let result =new Array();
        for(let i =0;i<input.length;i++){
            let dif = Math.abs(input[i] - input[i+1]);
            if( dif === 0){
                result.push(input[i]);
            }
        }
        return result;
    }else{
        return "Empty Array"
    }
}