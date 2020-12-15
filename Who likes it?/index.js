function likes(names) {
    if(!names.length) return "no one likes this";
    if(names.length === 1) return `${names[names.length - 1]} likes this`;
    if(names.length === 2) return `${names[0]} and ${names[names.length - 1]} like this`;
    if(names.length === 3) return `${names[0]}, ${names[1]} and ${names[names.length - 1]} like this`;
    if(names.length > 3) return `${names[0]}, ${names[1]} and ${names.length -2} others like this`;
  }