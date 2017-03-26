/**
 * Created by samarpreet on 26/03/17.
 */
/**
 *
 * @param input
 * Find and return the largest element from an array in O(n)
 */
function largest(input){
    if(input.length){
        let largest = input[0];
        for(let i=0;i<input.length;i++){
            if(input[i] > largest){
                largest = input[i];
            }
        }
        return largest;
    }else{
        return "Empty array"
    }
}
