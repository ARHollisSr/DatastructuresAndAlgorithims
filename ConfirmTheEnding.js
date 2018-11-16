function confirmEnding(str, target) {
  let verify = str.slice(str.length - target.length, str.length);

  if (verify == target) {
      return true;
  }

  return false;
}

confirmEnding("Bastian", "n");

//or
function confirmEnding2(str, target) {
    return str.slice(str.length - target.length) === target;
}