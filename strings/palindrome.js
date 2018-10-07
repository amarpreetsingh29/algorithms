function palindrome(str){
    var i,length;
    i=0;
    length=str.length;
    for(;i<length/2;i++ ){
        if(str[i] !== str[length-1-i]) return false;
    }
    return true;
}
console.log(palindrome("kinik"))
console.log(palindrome("amar"))