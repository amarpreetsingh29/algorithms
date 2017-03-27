/**
 * Created by samarpreet on 26/03/17.
 */

/**
 *
 * @param input
 * Find and return the smallest element from an array in O(n)
 */
export function smallest(input){
    if(input.length){
        let smallest = input[0];
        for(let i=0;i<input.length;i++){
            if(input[i] < smallest){
                smallest = input[i];
            }
        }
        return smallest;
    }else{
        return "Empty array"
    }
}
