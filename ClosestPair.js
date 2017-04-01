/**
 * Created by samarpreet on 01/04/17.
 */

import {tSort} from './sort';

export function closestPair(input) {
    if(input && input.length){
        var input = tSort(input);  // sort it
        let dif = Number.MAX_VALUE;
        let result =new Array();
        for(let i =0;i<input.length;i++){
            let temp = Math.abs(input[i] - input[i+1]);
            if(temp < dif){
                dif = temp;
                // lowest tuple found, empty the result and store the tuple
                if(result.length){
                    result.length=0;
                }
                result.push([input[i] , input[i+1]]);
            }else if(temp == dif){
                result.push([input[i] , input[i+1]]);
            }
        }
        return result;
    }else{
        return "Empty Array"
    }
}


