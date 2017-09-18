
/** 
 * function inner does not have a closure, 
 * as it does not access any varibale 
 * from function top. 
*/

function top() {
    var a;
    function inner() {
        console.log("hello");
    }
    inner();
}


/** 
 * function inner does have a closure, 
 * as it is accessing  varibale a
 * from function top2.
 * During creation phase,
 *  The compiler(v8,chakra) does a lexical analysis of code, 
 * and identifies the closure variables and 
 * allocates them memory on heap .
*/

function top2() {
    var a;
    function inner() {
        console.log(a);
    }
    inner();
}

/**
 *  Inner function even being returned,
 *  will have a closure with only property a not b.
 * 
 */

function top3() {
    var a, b;
    function inner() {
        console.log(a);
    }
    return inner;
}

