/**
 * Created by samarpreet on 04/04/17.
 */

function createLinkedList(input,start) {
    var obj =  new Object();
    var start = start||0;

    // solution for base case
    if(start >= input.length) return null;

        //Each case is handled correctly
    else {
        obj['data'] = input[start];
        obj['next'] = createLinkedList(input,++start);  // problem gets smaller each time
    }

    return obj;
}

console.log(createLinkedList([1,2,3,4,5]));



