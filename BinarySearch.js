/**
 * Created by samarpreet on 02/04/17.
 */


function BinarySearch2(input,elm,start,end) {
    var start=start||0, end=end||input.length;
    if(start>end) return -1;
    let middle = parseInt((start+end)/2);
    if(elm === input[middle]){
        return middle;
    }else if(elm > input[middle]){
        start = middle+1;
    }else if(elm <  input[middle]){
        end=middle-1;
    }
    return BinarySearch2(input,elm,start,end);
}

console.log(BinarySearch2([1,2,3,5],4));