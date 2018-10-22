//--push
//adds elements to the end of an array
let values = [2,3,4,5,8];
values.push(11);
values.push(12,13);

//--unshift
//inserts the values passed in the methods args at the start of the array.
values.unshift(1);
values.unshift(0,-1,-2);

//--pop
//removes a value from the end of an array
values.pop();

//--shift
//removes an element from the begining of the array
values.shift();

//--splice
//removes an element from an array by specifing the pos/index that we want to delete from and how many elements we want to remove
values.splice(5,3); //remove three elements starting fron index 5

//--splice (inserting)
//if wanted to insert the values 2 - 4 back into the array starting from pos 5
values.splice(5,0,2,3,4); //arg is index we want to remove elements from or insert into, second argument is number of elements we want to remove, in the this case we pass 0. From the third arg onward we have the values we want to insert.

//--concat
const zero = 0;
const positiveNumbers = [1,2,3];
const negativeNumbers = [-3,-2,-1];
let theseNumbers = negativeNumbers.concat(zero, positiveNumbers);

console.log(theseNumbers);

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

//ITERATOR FUNCTIONS
const isEven = x => x % 2 === 0;

//--every
//Iterates each element of the array until the function returns false
numbers.every(isEven); //first element is 1, func will return false - not a multiple of 2

//--some
//Opposite of every; iterates over each element until it returns true
numbers.sum(isEven); //second element is 2, func will return true - iteration will stop

//--foreach
//iterates entire array no matter what -- same as for loop
numbers.forEach(x => console.log(x % 2 === 0));

//--map
//iterates over every element in the array passed to it and returns a new array with a result
const myMap = numbers.map(isEven);

//--filter
//iterates over every element in the array passed to it and retuns a new array with the elements for which the function returned true.
const evenNumbers = numbers.filter(isEven);

//--reduce
//receives a function with the following params, previouse and current, index, and array. Both index and array are optional params. We use this function to return a value that will be added to an accumulator, which returns a value that will be added to an accumulator which will be returned after the reduce method stops being executed. Good for summing up all values in an array.
numbers.reduce((previous,current)=> previous + current);

//--for...of loop
//(ES2015)
for (const n of numbers) {
    console.log(n % 2 === 0 ? 'even' : 'odd');
}

//--@@iterator object
//in order to use this object we need to access the Symbol.iterator property
let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value); //1
console.log(iterator.next().value); //2
console.log(iterator.next().value); //3
console.log(iterator.next().value); //4
console.log(iterator.next().value); //5
//... and so on
//now we can individually call the next method of the iterator to retrieve the next value of the array. You have to call the iterators array for however many values you have in the array.
iterator = numbers[Symbol.iterator]();
for (const n of iterator) {
    console.log(n);
}
//when the array is iterated and there are no more values the iterator.next() will return undefined.

//--Entries, Keys, and Values
//--entries
//returns @@iterator which contain key/value pairs
let aEntries = numbers.entries(); //retrive iterator of key/value pair
console.log(aEntries.next().value); //[0,1] - pos 0, value 1
console.log(aEntries.next().value); //[1,2] - pos 1, value 2
console.log(aEntries.next().value); //[2,3] - pos 2, value 3
//the number array only contains numbers, so key will be the pos of the array and value will be the value stored in the array index.
//alternatively:
aEntries = numbers.entries();
for (const n of aEntries) {
    console.log(n);
}

//--keys
//returns @@iterator which contains the keys of the array
const aKeys = numbers.keys(); //retrieve iterator of keys
console.log(akeys.next()); //{value: 0, done: false}
console.log(akeys.next()); //{value: 1, done: false}
console.log(akeys.next()); //{value: 2, done: false}
//for the numbers array, the keys will be the indexes of the array. Once there are no more values to be iterated aKeys.next() will return undefined as value and done as true. 

//--values
//returns @@iterator which contains the value of the array
const aValues = numbers.values();
console.log(aValues.next()); //{value: 1, done: false}
console.log(aValues.next()); //{value: 2, done: false}
console.log(aValues.next()); //{value: 3, done: false}

//--from
//creates a new array from an existing one. A copy.
let numbers2 = Array.from(numbers);
//we can also pass a function to determine which values we want to map
let evens = Array.from(numbers, x => (x % 2 == 0));

//--Array.of
//creates a new array from the args passed in.
let numbers3 = Array.of(1);
let numbers4 = Array.of(1,2,3,4,5,6);
//the above is equivalent to
let numbers3 = [1];
let numbers4 = [1,2,3,4,5,6];
//we can also use Array.of to make a copy of an existing array
let numbersCopy = Array.of(...numbers4);

//--fill
//fills the array with a value.
let numbersCopy = Array.of(1,2,3,4,5,6);
//fill the entire array with 0's
numbersCopy.fill(0);
//using a start index
numbersCopy.fill(2,1); //start at index 1 and fill the rest with 2's
//using a start and end index
numbersCopy.fill(1,3,5); //fill with 1's from index 3 to index 5
//useful for creating an array and intializing it's values
let ones = Array(6).fill(1); //creates an array of length 6 with it's values set to 1's

//--copyWithin
//copies a sequnce of values of the array into the position of a start index
let copyArray = [1,2,3,4,5,6];
copyArray.copyWithin(0,3); // copies the values 4,5,6 to the first three positions of the array [4,5,6,4,5,6]
//if say, we wanted to copy the values 4 and 5 (pos 3 and 4) to pos 1 and 2
copyArray.copyWithin(1,3,5); //copy the elements starting in pos 3 ending in pos 5 to position 1 - [1,4,5,6,4,5,6]













