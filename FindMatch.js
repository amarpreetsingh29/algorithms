/**
 * Created by samarpreet on 10/04/17.
 */

/**
 *
 * Runs in O(n)
 * @param input
 * @param check
 * @returns {boolean}
 * @constructor
 */
function FindMatch(input,check){
    let i=0,j=0;
    while ( j<check.length && i<input.length ){
        if(check[j] == input[i]){
            i=i+1;
            j=j+1;
        }else{
            i=i+1;
            j=0;
        }
    }
    return j==check.length ? true : false;
}

console.log(FindMatch(new String("Amarpreet") ,new String("preet"))); // passing string objects, as js internally converts primitive strings to string objects
