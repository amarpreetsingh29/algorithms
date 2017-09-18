
/** 
 * function inner does not have a closure, 
 * as it does not access any variable 
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
 * as it is accessing  variable a
 * from function top2.
 * During creation phase,
 *  The js enginer/compiler(v8,chakra etc) does a lexical analysis of code, 
 * and identifies the closure variables and 
 * allocates memory for them on heap .
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

/**
 * The level of nesting is directly proportional to number of closures created for a function.
 * Inner 1 has 1 closure  -> top4(a)
 * Inner 2 has 2 closures -> inner1(b) and top4(a)
 */

function top4(){
    var a;
    function inner1(){
        var b;
        function inner2(){
            console.log(a,b);
        }
        inner2();
    }
    inner1();
}
top4();
