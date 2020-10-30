function duplicateEncode(word){

    return [...word.toLowerCase()].map(e => {
        e = isValid(e) ? ("\\"+ e) : e;
        
        return (word.toLowerCase().match(new RegExp(e, "g"))||[]).length > 1 ? ")" : "(";
    }).join('');

    function isValid(str){
        return /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g.test(str);
    }
}