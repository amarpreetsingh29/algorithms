/**
 * Created by samarpreet on 26/03/17.
 */

/**
 *
 *
 * @param input
 */

export function flattenArray(input,result){
    var result = result || [];
    for(let i =0; i < input.length;i++){
        if(typeof  input[i] !== "object"){
            result.push(input[i]);
        }else {
            flattenArray(input[i],result);
        }
    }
    return result;
}