function maxCharOccurence(str){
    var obj={};
    var i,max,result;
    i=max=0;

    for(;i<str.length;i++){
        if(obj[str[i]]) obj[str[i]]++;
        else obj[str[i]]=1;
        if(obj[str[i]]>max) {
            max= obj[str[i]];
            result = str[i];
        }
    }
    return result;
}
console.log(maxCharOccurence("amarpreet"));