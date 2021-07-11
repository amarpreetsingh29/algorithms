
/**
 * created by amarpreet on  July 10, 2021
 */

let cache={
    0:0,
    1:1
}
function fib_c(n){
    if(cache[n] || n==0) return cache[n];
    result = fib_c(n-1) +  fib_c(n-2);
    cache[n] = result
    return result
}

result = fib_c(4)
console.log(result)