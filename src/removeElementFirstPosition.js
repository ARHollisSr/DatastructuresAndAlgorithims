
Array.prototype.reIndex = function(myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
}

    // remove first element manually and reIndex
Array.prototype.removeTheFirstPosition = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
};

let someValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
someValues.removeTheFirstPosition();
console.log(someValues);

//in production use:
someValues.shift();
