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