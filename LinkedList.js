/**
 * Created by samarpreet on 04/04/17.
 */

//Recursive Pattern
function createLinkedList(input, start) {
    var obj = null;
    if (input instanceof Array && input.length) {
        obj = new Object();
        var start = start || 0;

        // solution for base case
        if (start >= input.length) return null;

        //Each case is handled correctly
        else {
            obj['data'] = input[start];
            obj['next'] = createLinkedList(input, ++start);  // problem gets smaller each time
        }
    }
    return obj;
}

//Iterative pattern
function iterativeLinkedList(input) {
    var linkedList = null;
    if (input instanceof Array && input.length) {
        var i, temp;
        i = input.length - 1;
        for (; i != -1; i--) {
            temp = {
                data: input[i],
                next: null
            }
            temp.next = linkedList;
            linkedList = temp;
        }
    }
    return linkedList;
}
var t = iterativeLinkedList([2, 3])

//search

function search(list, key) {
    if (list instanceof iterativeLinkedList && key) {
        var temp = list;
        do {
            if (temp.data === key) {
                return temp;
            } else {
                temp = temp.next;
            }
        } while (temp != null);
    }
}

var r = search(t, 3);
console.log(r);