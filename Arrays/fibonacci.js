const fibanacci = [];
fibanacci[1] = 1;
fibanacci[2] = 1;

for (let i = 3; i < 20; i++) {
  fibanacci[i] = fibanacci[i - 1] + fibanacci[i - 2];
}

for (let i = 1; i < fibanacci.length; i++) console.log(fibanacci[i]);