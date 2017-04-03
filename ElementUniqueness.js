/**
 * Created by samarpreet on 02/04/17.
 */

import tSort from './sort';

export default function elementUniqueness(input) {
    if(input && input.length){
        var input = sort(input); //sort it
        let result =new Object();
        //sweep it
        for(let i =0;i<input.length-1;i++){
            if(!result[i]){
                let dif = Math.abs(input[i] - input[i+1]);
                if( dif === 0){
                    result[input[i]]=input[i];
                }
            }
        }
        return result;
    }else{
        return "Empty Array"
    }
}
