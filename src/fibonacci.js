function fibSeq() {
  const fibanacci = [];
  fibanacci[1] = 1;
  fibanacci[2] = 1;

  for (let i = 3; i < 20; i++) {
    fibanacci[i] = fibanacci[i - 1] + fibanacci[i - 2];
  }

  return fibanacci[19];
}

console.log(fibSeq());