/* Student: Albena Indzheva
 *
 * Да се изведат съобщения към потребителя и да се прочетат две целочислени числа
 * от клавиатурата A и B. Запишете тяхната сума, разлика, произведение и остатък от деление в отделни променливи и разпечатайте тези резултати в конзолата. 
 * Опитайте същото с числа с плаваща запетая. 
 */


var x = prompt("Въведете X:");
x = parseFloat(x);
var y = prompt("Въведете Y:");
y = parseFloat(y);
var sum;
var difference;
var product;
var remainder;

if (!Number.isNaN(x) && !Number.isNaN(y)) {
  sum = x + y;
  difference = x - y;
  product = x * y;
  remainder = x % y;
  console.log("Сумата на " + x + " и " + y + " e " + sum);
  console.log("Разликата на " + x + " и " + y + " e " + difference);
  console.log("Произведението на " + x + " и " + y + " e " + product);
  console.log("Остатъкът от делението на " + x + " и " + y + " e " + remainder);

} else {
 
 console.log("Не сте въвели числа.");

}