function repeatStringNumTimes(str, num) {
  // repeat after me
  let newStr = "";
  if (num < 0)
  {
    return "";
  }

  for(let i=0; i < num; i++)
  {
    newStr += str;
  }
  return newStr;
}

console.log(repeatStringNumTimes("abc", 4));