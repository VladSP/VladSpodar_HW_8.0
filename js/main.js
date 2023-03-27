// 1.
let result = "";
for (let i = 10; i <= 20; i++) {
  result += i + ",";
}
console.log(result.slice(0, -1));

// 2.
for (let i = 10; i <= 20; i++) {
  console.log(i * i); 
}

// 3.
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// 4.
let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
console.log(sum);

// 5.
let product = 1;
for (let i = 15; i <= 35; i++) {
  product *= i;
}
console.log(product);

// 6.
sum = 0;
for (let i = 1; i <= 500; i++) {
  sum += i;
}
let avg = sum / 500;
console.log(avg);

// 7.
sum = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);

// 8.
output = "";
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    output += i + ",";
  }
}
console.log(output.slice(0, -1));

// 9.
let number = 30; 
output = "";
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    output += i + ",";
  }
}
console.log(output.slice(0, -1));

// 10. 
let num = 24;
let count = 0; 
for (let i = 1; i <= number; i++) {
  if (num % i === 0 && i % 2 === 0) {
    count++;
}
}
console.log(`Кількість парних дільників ${num}: ${count}`);

// 11.
let n = 24; 
let s = 0; 
for (let i = 1; i <= n; i++) {
  if (n % i === 0 && i % 2 === 0) {
    s += i;
  }
}
console.log(`Сума парних дільників  ${n}: ${s}`);

// 12.
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    const product = i * j;
    document.write(`${i} * ${j} = ${product} <br>`);
  }
  document.write("<br>");
}