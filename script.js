"use strict";

/* TASK 01 */

/* 
	Сделайте функцию, которая отнимает от первого числа второе и делит на
третье. 
	Числа передаются параметром.
*/

{
	let math = (a, b, c) => (a - b) / c;

	console.log(math(10, 4, 2)); //3
}

/* TASK 02 */

/* 
	Сделайте функцию, которая возвращает куб числа и его квадрат. 
	Число передается параметром.
*/

{
	let math = (num) => {
		let square = Math.pow(num, 2);
		let cube = Math.pow(num, 3);

		return `
			Square of ${num} is ${square}.
			Cube of ${num} is ${cube}.
		`;
	};

	console.log(math(2)); //4 и 8
}

/* TASK 03 */

/* 
	Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b.
*/

{
	let min = (a, b) => {
		return a < b ? a : b;
	};

	let max = (a, b) => {
		return a > b ? a : b;
	};

	console.log(min(4, 8)); //4
	console.log(max(4, 8)); //8
}

/* TASK 04 */

/* 
	Напишите две функции: 
	первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; 
	вторая – выводить полученный массив.
*/

{
	let minValue = +prompt("Enter min value:");
	let maxValue = +prompt("Enter max value:");
	let length = +prompt("Enter length:");

	function setArray(min, max, length) {
		let arr = new Array(length);

		for (let i = 0; i < arr.length; i++) {
			let value = Math.floor(Math.random() * (max - min) + min);
			arr[i] = value;
		}

		return arr;
	}

	function getArray(arr) {
		arr.forEach((element) => {
			console.log(element);
		});
	}

	let arr = setArray(minValue, maxValue, length);
	getArray(arr);
}

/* TASK 05 */

/* 
	Сделайте функцию isEven() (even - это четный), 
	которая параметром принимает целое число и проверяет: четное оно или нет. 
	Если четное - пусть функция возвращает true, если нечетное — false.
*/

{
	let isEven = (num) => {
		if (isFinite(num)) {
			return num % 2 === 0 ? true : false;
		} else {
			return "Value is not a number!";
		}
	};

	console.log(isEven(1)); //false
	console.log(isEven(2)); //true
	console.log(isEven("Hello")); //Value is not a number!
}

/* TASK 06 */

/* 
	Напишите ф-цию, в которую передается массив с целыми числами.
	Верните новый массив, где останутся лежать только четные из этих чисел.
	Для этого используйте вспомогательную функцию isEven из предыдущей
задачи.
*/

{
	let isEven = (num) => {
		if (isFinite(num)) {
			return num % 2 === 0 ? true : false;
		} else {
			return "Value is not a number!";
		}
	};

	function getEvenArray(arr) {
		let evenArray = [];

		arr.forEach((element) => {
			isEven(element) ? evenArray.push(element) : null;
		});

		return evenArray;
	}

	let arr = [1, 2, 3, 4, 5, 6, 7, 8];
	console.log(getEvenArray(arr)); //[2, 4, 6, 8]
}

/* TASK 07 */

/* 
	Напишите ф-цию, которая рисует следующую пирамидку 
	(использовать вложенные циклы):
	1
	22
	333
	4444
	55555
	666666
	7777777
	88888888
	999999999

	Кол-во рядов должно вводиться параметром. 
	Если пользователь ввел доп.параметр, непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, 
	то пирамида должна быть нарисована этим символом, например:

	*
	**
	***
	****
	*****
	******
	*******
	********
	*********
*/

{
	function getPyramid(row) {
		let line = "";

		for (let i = 1; i <= row; i++) {
			for (let j = 0; j < i; j++) {
				if (arguments.length > 1) {
					line += arguments[1];
				} else {
					line += i;
				}
			}
			console.log(line);
			line = "";
		}
	}

	getPyramid(4);
	getPyramid(4, "*");
}

/* TASK 08 */

/* 
	Напишите ф-цию, которая рисует равнобедренный треугольник из
	звездочек:
	*
	***
	*****
	*******
	*********
	Кол-во рядов должно вводиться с клавиатуры. 
	Доп., напишите такую же ф-цию, но которая выведет перевернутый треугольник.
*/

{
	let row = +prompt("Etner number of rows:");

	function getTriangle(row) {
		let whiteSpace = " ".repeat(row - 1);
		let symbol = "*";

		for (let i = 0; i < row; i++) {
			console.log(whiteSpace + symbol + whiteSpace);
			whiteSpace = whiteSpace.substring(1);
			symbol += "**";
		}
	}

	function getInvertedTriangle(row) {
		let line = ["*"];

		while (row > 1) {
			line.push("**");
			row--;
		}

		let whiteSpace = "";

		while (line.length > 0) {
			console.log(whiteSpace + line.join("") + whiteSpace);
			whiteSpace += " ";
			line.length--;
		}
	}

	getTriangle(row);
	getInvertedTriangle(row);
}

/* TASK 09 */

/* 
	Напишите ф-цию, которая возвращает массив заполненный числами
Фибоначи от 0 до 1000.
*/

{
	function fib() {
		let arr = [];
		let a = 1;
		let b = 1;
		let c = 0;

		for (let i = 0; i < 1000; ) {
			if (i < 2) {
				arr.push(1);
				i++;
			} else {
				c = a + b;
				a = b;
				b = c;
				arr.push(b);
				i = b;
			}
		}

		arr.length -= 1;
		return arr;
	}

	console.log(fib()); //[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
}

/* TASK 10 */

/* 
	Дано число. 
	Сложите его цифры. 
	Если сумма получилась более 9-ти, опять сложите его цифры. 
	И так, пока сумма не станет однозначным числом (9 и менее). 
	Исп. Рекурсию.
*/

{
	let num = 248;

	function getOneSymNum(num) {
		let sum = 0;
		let str = num.toString();

		for (let i = 0; i < str.length; i++) {
			sum += +str[i];
		}

		return sum <= 9 ? sum : getOneSymNum(sum);
	}

	console.log(getOneSymNum(num)); //5
}

/* TASK 11 */

/* 
	Дан массив с числами (передается параметром). 
	Выведите последовательно его элементы, используя рекурсию и не используя цикл.
*/

{
	let numArr = [1, 2, 3, 4];

	function getArr(arr) {
		let tempArr = arr;

		if (tempArr.length) {
			console.log(tempArr[0]);
			tempArr.shift();
			getArr(tempArr);
		}
	}

	getArr(numArr); // 1 2 3 4
}

/* TASK 12 */

/* 
	Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
	группы студента и выводящую введённые данные в следующем виде:
	*****************************
	* Домашняя работа: «Функции» *
	* Выполнил: студент гр. W4017 *
	* Иванов Иван Иванович *
	*****************************
	Размер рамки должен определятся автоматически по самой длинной строке.
	Рамку вывести в консоль.
*/

{
	let firstName = "Ivan";
	let secondName = "Ivanov";
	let thirdName = "Ivanovich";
	let group = "FE130";

	function getDataOfStudent(firstName, secondName, thirdName, group) {
		//Присваиваю значенийа строкам
		let lineTop = 'Homework: "Functions"';
		let lineMid = `Executor: student ${group}`;
		let lineBottom = `${secondName} ${firstName} ${thirdName}`;
		let length = 4;

		//Определйаю самую длинную строку
		if (lineTop.length > lineMid.length) {
			length +=
				lineTop.length > lineBottom.length ? lineTop.length : lineBottom.length;
		} else {
			length +=
				lineMid.length > lineBottom.length ? lineMid.length : lineBottom.length;
		}

		//Добавлйаю символ * в строки
		let lineCommon = "*".repeat(length);
		let lineLeft = "* ";
		let lineRight = length - lineLeft.length - 1;

		//Вывожу строки на консоль
		console.log(lineCommon);
		console.log(
			lineLeft + lineTop + " ".repeat(lineRight - lineTop.length) + "*"
		);
		console.log(
			lineLeft + lineMid + " ".repeat(lineRight - lineMid.length) + "*"
		);
		console.log(
			lineLeft + lineBottom + " ".repeat(lineRight - lineBottom.length) + "*"
		);
		console.log(lineCommon);
	}

	getDataOfStudent(firstName, secondName, thirdName, group);
}

/* TASK 13 */

/* 
	Напишите ф-цию, которая должна проверить правильность ввода адреса
	эл. почты, неиспользуя регулярные выражения. 
	Почта верна при условии:

	a. весь адрес не должен содержать русские буквы и спецсимволы, кроме
	одной «собачки», знака подчеркивания, дефиса и точки, 
	причем они не могут быть первыми и последними в адресе, и идти подряд, например: «..», «@.», «.@» или «@@», «_@», «@-», «--» и т.п.

	b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
	имя может содержать только буквы, цифры, но не быть первыми и
	единственными в имени, и точку;

	c. после последней точки и после @, домен верхнего уровня (ru, by, com и
	т.п.) не может быть длиной менее 2 и более 11 символов.
*/

{
}
