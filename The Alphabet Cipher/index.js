let encrypt = (key, input) => {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  let newKey = '';
  encryptCode = [];
  const makeNewKey = function () {
    if (input.length > key.length) {
      let rest = input.length - key.length;
      let quotient = Math.floor(rest / key.length);
      let remainder = rest % key.length;
      if (quotient > 1) {
        let chunk = key.repeat(quotient);
        newKey = key;
        newKey += chunk;
      }
      if (remainder) {
        for (let i = 0; i < remainder; i++) {
          newKey += key[i];
        }
      }
    } else {
      newKey = key;
    }
  };
  makeNewKey();

  const encryptLetter = function (letter, index) {
    let ind,
      encLetter = newKey[index],
      abcEnc = `${encLetter}${abc.split(encLetter)[1]}${abc.split(encLetter)[0]}`;

    ind = abc.indexOf(letter);

    return abcEnc.split('')[ind];
  };

  const doEncrypt = function () {
    input.split('').forEach((e, i) => {
      encryptCode.push(encryptLetter(e, i));
    });
  };

  doEncrypt();

  return encryptCode.join('');
};