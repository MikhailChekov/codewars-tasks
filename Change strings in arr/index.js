function pigIt(str) {
    const template = /[a-zA-Z]/;
    return str
      .split(' ')
      .map((el) => {
        if (template.test(el)) {
          return el.slice(1) + el.charAt(0) + 'ay';
        } else {
          return el;
        }
      })
      .join(' ');
  }
  