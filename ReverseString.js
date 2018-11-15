function reverseString(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }
  
  function reverseString2(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString('hello'));
  console.log(reverseString2('hello2'));