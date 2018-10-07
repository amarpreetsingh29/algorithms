function panagram(str){
    var alp= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z'];
    var i=0;
    for(;i<alp.length;i++){
        if(!str.includes(alp[i])) return false;
    }
    return true;
}
console.log(panagram("The quick brown fox jumps over the lazy dog "));
console.log(panagram("The quick brown fox jumps over the  dog "));