// almost working, some test with '\' not correct

function VigenèreCipher(key, abc) {
    (this.abc = abc || 'abcdefghijklmnopqrstuvwxyz'),
      (this.key = key || 'password');
  
    this.checkWordLength = function (str) {
      let newKey = '';
      if (str.length > this.key.length) {
        let rest = str.length - this.key.length;
        let quotient = Math.floor(rest / this.key.length);
        let remainder = rest % this.key.length;
        if (quotient > 1) {
          let chunk = this.key.repeat(quotient);
          newKey += chunk;
        }
        if (remainder) {
          newKey = this.key;
          for (let i = 0; i < remainder; i++) {
            newKey += this.key[i];
          }
        }
      } else {
        newKey = this.key;
      }
  
      return newKey;
    };
  
    this.getIndex = function (str) {
      let indContainer = [];
      let abc = this.abc.split('');
      let arr = str.split('');
      arr.forEach((e) => {
        !this.abc.includes(e) ? indContainer.push(e) : indContainer.push(this.abc.indexOf(e, 0));
      });
      return indContainer;
    };
  
    this.encode = function (str) {
      let res = [];
      let newKey = this.checkWordLength(str);
      let keyInd = this.getIndex(newKey);
      let wordInd = this.getIndex(str);
  
      wordInd.forEach((e, i) => {
        if (!Number.isInteger(e)) {
          res.push(e);
        } else {
          
          let encInd = e + keyInd[i];
          if (encInd > 25) {
            encInd -= 26;
          }
          let encSym = this.abc[encInd];
          res.push(encSym);
        }
      });
      return res.join('');
    };
    this.decode = function (str) {
      let res = [];
      let newKey = this.checkWordLength(str);
      let keyInd = this.getIndex(newKey);
      let wordInd = this.getIndex(str);
      wordInd.forEach((e, i) => {
        if (!Number.isInteger(e)) {
          res.push(e);
        } else {
          let decInd = e - keyInd[i];
          if (decInd < 0) {
            decInd += 26;
          }
          let decSym = this.abc[decInd];
          res.push(decSym);
        }
      });
      return res.join('');
    };
  }
//   let c = new VigenèreCipher();
  
  