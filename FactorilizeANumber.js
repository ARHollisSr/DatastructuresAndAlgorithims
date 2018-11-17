function factorilize(num) {
  let factored = 1;
  for (let i = 1; i < num + 1; i++) {
    factored *= i;
  }
  return factored;
}

console.log(factorilize(5));