// TODO: decode method

function VigenèreCipher() {
    let keyInd = [], wordInd = [], encode = [], decode = [];
    abc = abc.split('');
    key = key.split('');
    word = word.split('');
    encWord = encWord.split('');

    key.forEach(e => {
        keyInd.push(abc.indexOf(e, 0));
    });
    word.forEach(e => {
        wordInd.push(abc.indexOf(e, 0));
    });
    console.log(wordInd, 'wordInd');
    console.log(keyInd, 'keyInd');

    wordInd.forEach((e , i)=> {
        let encInd = e + keyInd[i];
        if(encInd > 25){
            encInd -=26;
        }
        let encSym = abc[encInd];
        encode.push(encSym);
    });
    
    console.log(encode);


    // this.encode = function (str) 
    // this.decode = function (str) 
}

let key = 'password', abc = 'abcdefghijklmnopqrstuvwxyz' , word = 'codewars', encWord = 'rovwsoiv';

VigenèreCipher(key, abc, word, encWord);

    // 'codewars', 'rovwsoiv'
