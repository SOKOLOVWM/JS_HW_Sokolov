"use strict";

/* TASK 01 */

/* 
	Выведите числа от 1 до 50 и от 35 до 8.
*/

{
	for (let i = 1; i <= 50; i++) {
		console.log(i);
	}

	for (let i = 35; i >= 8; i--) {
		console.log(i);
	}
}

/* TASK 02 */

/* 
	Выведите столбец чисел от 89 до 11. 
	Воспользуйтесь циклом while.
	Отделите числа тегом <br /> друг от друга, чтобы получить столбец, а не строку.
*/

{
	let num = 89;

	while (num >= 11) {
		document.write(`${num}</br>`);
		num--;
	}
}

/* TASK 03 */

/* 
	С помощью цикла найдите сумму чисел от 0 до 100.
*/

{
	let sum = 0;

	for (let i = 1; i <= 100; i++) {
		sum += i;
	}

	console.log(sum);
}

/* TASK 04 */

/* 
	Найдите сумму чисел в каждом числе от 1 до 5.
	Например: в числе 3 сумма составляет 6 (1+2+3).
*/

{
	for (let i = 1; i <= 5; i++) {
		let sum = 0;

		for (let j = 1; j <= i; j++) {
			sum += j;
		}

		console.log(`${i} sum of numbers is ${sum}`);
	}
}

/* TASK 05 */

/* 
	Выведите чётные числа от 8 до 56. 
	Решить задание через while и for.
*/

{
	let start = 8;
	let end = 56;

	for (let i = start; i <= end; i++) {
		if (i % 2 == 0) {
			console.log(i);
		}
	}

	while (start <= end) {
		if (start % 2 == 0) {
			console.log(start);
		}

		start++;
	}
}

/* TASK 06 */

/* 
	Необходимо вывести на экран полную таблицу умножения (от 2 до 10).
	2*2 = 4 
	2*3 = 6 
	2*4 = 8 
	2*5 = 10
*/

{
	for (let i = 2; i <= 10; i++) {
		for (let j = 2; j <= 10; j++) {
			console.log(`${i} * ${j} = ${i * j}`);
		}
		console.log("\n");
	}
}

/* TASK 07 */

/* 
	Дано число n=1000. 
	Делите его на 2 столько раз, пока результат деления не станет меньше 50.
	Какое число получится? 
	Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
*/

{
	let n = 1000;
	let i = 0;

	while (n > 50) {
		n /= 2;
		i++;
	}

	console.log(`Final number is: ${n}`);
	console.log(`Quantity iteration are: ${i}`);
}

/* TASK 08 */

/* 
	Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет введена пустая строка или 0. 
	После выхода из цикла выведите общую сумму и среднее арифметическое введённых чисел. 
	Если пользователь ввел не число, то вывести сообщение об ошибке ввода. 
	При подсчете учесть, что пользователь может ввести отрицательное значение.
*/

{
	let num = 0;
	let sum = 0;
	let i = 0;

	while (true) {
		num = +prompt("Enter number", 10);

		if (num > 0) {
			sum += num;
			i++;
		} else if (num < 0) {
			alert("Enter only positive numbers!");
		} else if (isNaN(num)) {
			alert("Incorrect value!");
			break;
		} else {
			break;
		}
	}

	console.log(`Sum of numbers is: ${sum}`);
	console.log(`Arithmetic mean is: ${sum / i}`);
}

/* TASK 09 */

/* 
	Дана строка с числами разделенными пробелами 
	«4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57».
	Найдите самое большое и самое маленькое число в строке, используя цикл.
*/

{
	let str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
	let arr = str.split(" ");

	let max = arr[0];
	let min = arr[0];

	for (let i = 1; i < arr.length; i++) {
		max = max < arr[i] ? arr[i] : max;
		min = min > arr[i] ? arr[i] : min;
	}

	console.log(`Max value: ${max}`);
	console.log(`Min value: ${min}`);
}

/* TASK 10 */

/* 
	Дано произвольное целое число n. 
	Написать программу, которая:
		a. разбивает число n на цифры и выводит их на экран;
		b. подсчитывает сколько цифр в числе n;
		c. находит сумму цифр числа n;
*/

{
	let n = Math.floor(Math.random() * (100000 - 100) + 100);
	let str = n.toString();
	let count = 0;
	let sum = 0;

	for (let i = 0; i < str.length; i++) {
		console.log(str[i]);
		count++;
		sum += +str[i];
	}

	console.log(`
		Number ${n} has ${count} digits.
		Sum of digits is ${sum}.
	`);
}
