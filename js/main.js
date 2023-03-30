// 1.
document.write("<h2>1. Вивести на сторінку в один рядок через кому числа від 10 до 20.</h2><br>");
let result = "";
for (let i = 10; i <= 20; i++) {
  result += i + ",";
};
document.write(result.slice(0, -1));
document.write("<br>");
// 2.
document.write("<h2>2. Вивести квадрати чисел від 10 до 20.</h2><br>");
for (let i = 10; i <= 20; i++) {
  document.write(i * i +","); 
};
document.write("<br>");
// 3.
document.write("<h2>3. Вивести таблицю множення на 7.</h2><br>");
for (let i = 1; i <= 10; i++) {
  document.write(`7 x ${i} = ${7 * i}`);
  document.write("<br>");
};
// 4.
document.write("<h2>4. Знайти суму всіх цілих чисел від 1 до 15.</h2><br>");
let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
document.write(sum);
document.write("<br>");
// 5.
document.write("<h2>5. Знайти добуток усіх цілих чисел від 15 до 35.</h2><br>");
let product = 1;
for (let i = 15; i <= 35; i++) {
  product *= i;
}
document.write(product);
document.write("<br>");
// 6.
document.write("<h2>6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.</h2><br>");
sum = 0;
for (let i = 1; i <= 500; i++) {
  sum += i;
}
let avg = sum / 500;
document.write(avg);
document.write("<br>");
// 7.
document.write("<h2>7. Вивести суму лише парних чисел в діапазоні від 30 до 80.</h2><br>");
sum = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
document.write(sum);
document.write("<br>");
// 8.
document.write("<h2>8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.</h2><br>");
output = "";
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    output += i + ",";
  }
}
document.write(output.slice(0, -1));
document.write("<br>");
// 9.
document.write("<h2>9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.</h2><br>");
let number = 30; 
output = "";
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    output += i + ",";
  }
}
document.write(output.slice(0, -1));
document.write("<br>");
// 10. 
document.write("<h2>10. Визначити кількість його парних дільників.</h2><br>");
let num = 24;
let count = 0; 
for (let i = 1; i <= number; i++) {
  if (num % i === 0 && i % 2 === 0) {
    count++;
  }
}
document.write(`Кількість парних дільників ${num}: ${count}`);
document.write("<br>");
// 11.
document.write("<h2>11. Знайти суму його парних дільників.</h2><br>");
let n = 24; 
let s = 0; 
for (let i = 1; i <= n; i++) {
  if (n % i === 0 && i % 2 === 0) {
    s += i;
  }
}
document.write(`Сума парних дільників  ${n}: ${s}`);
document.write("<br>");
// 12.

let i, j;
document.write("<h2>12. Надрукувати повну таблицю множення від 1 до 10.</h2>");
document.write("<table>");
    for (let j = 1; j <= 10; j++) {
        document.write("<tr>");
      for (let i = 1; i <= 10; i++) {
        document.write("<td style='border: 1px solid black;'>" +i + "*" + j + "=" + (i * j) + "</td>");
      }
      document.write ("</tr>");
};
document.write("</table>");