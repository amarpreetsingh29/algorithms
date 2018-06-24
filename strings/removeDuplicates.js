function removeDup(str){
    var r,i,index;
    r=[],i=0;
    for(;i<str.length;i++){
        index = r.indexOf(str[i]);
        if(index == -1)  r.push(str[i]); 
       
    }
    return r.join('');
}
console.log(removeDup('amarpreet'));
console.log(removeDup('geeksforgeeks'));