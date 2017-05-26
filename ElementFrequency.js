/**
 * Created by samarpreet on 02/04/17.
 */

function optimizedElmFreq(input) {
    let result={};
    input.forEach((item)=>{
       if(result[item]){
           result[item] +=1;
       }else{
           result[item]=1;
       }
    });
    return result;
}

console.log(elementFrequency([3,1,5,3,7,1,8,8]));
console.log(optimizedElmFreq([3,1,5,3,7,1,8,8]));