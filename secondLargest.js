/**
 * Created by samarpreet on 26/05/17.
 */
function secondLargest(input){
    let largest=input[0];
    let s_largest =input[0];
    input.map((item)=>{
       if(item >  largest){
           largest = item;
       }
    });
    input.map((item)=>{
       if(item > s_largest && item != largest){
           s_largest = item;
       }
    });

    return s_largest;
}

window.console.log(secondLargest([1,1,3,4,4,5,5,2,2]));