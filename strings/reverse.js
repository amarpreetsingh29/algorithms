function reverse(index,str){
    var index = index || 0;
    if(index>=str.length) return;
    console.log(str[index]);
    reverse(++index,str);
}
reverse(null,'amar');