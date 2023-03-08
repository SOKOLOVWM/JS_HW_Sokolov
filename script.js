"use strict";

/* TASK 01 */

/* 
	Дан массив с элементами [1, 2, 3, 4, 5]. 
	С помощью цикла for выведите все эти элементы на экран.
*/

{
	let arr = [1, 2, 3, 4, 5];

	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

/* TASK 02 */

/* 
	Дан массив с числами:
	[-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]
	Числа могут быть положительными и отрицательными. 
	Выведите на экран только отрицательные числа, которые больше -10, но меньше -3.
*/

{
	let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

	for (const i of arr) {
		if (i < -3 && i > -10) {
			console.log(i);
		}
	}
}

/* TASK 03 */

/* 
	Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и while. 
	Выведите оба массива. 
	С помощью цикла for найдите сумму элементов этого массива. 
	Запишите ее в переменную result и выведите.
*/

{
	let arrWhile = [];
	let i = 23;

	while (i < 57) {
		arrWhile.push(i);
		i++;
	}

	for (const elem of arrWhile) {
		console.log(elem);
	}

	let arrFor = [];
	let sum = 0;

	for (let i = 23; i < 57; i++) {
		arrFor.push(i);
		sum += i;
	}

	for (const elem of arrFor) {
		console.log(elem);
	}

	console.log(sum);
}

/* TASK 04 */

/* 
	Дан массив c числами (строчного типа): 
	[‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. 
	Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
*/

{
	let arr = ["10", "20", "30", "50", "235", "3000"];

	for (const el of arr) {
		if (el[0] == 1 || el[0] == 2 || el[0] == 5) {
			console.log(el);
		}
	}
}

/* TASK 05 */

/* 
	Составьте массив дней недели (ПН, ВТ, СР и т.д.). 
	С помощью цикла for выведите все дни недели, 
	а выходные дни выведите жирным.
*/

{
	let arr = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

	for (const el of arr) {
		if (el === "СБ" || el === "ВС") {
			document.write(`<b>${el}</b> `);
		} else {
			document.write(`<span>${el}</span> `);
		}
	}
}

/* TASK 06 */

/* 
	Создайте массив с произвольными данными. 
	Добавьте в конец массива любой элемент, 
	и получите последний элемент массива, 
	используя свойство length.
*/

{
	let arr = new Array(8);

	for (let el of arr) {
		el = Math.floor(Math.random() * (100 - 50) + 50);
		console.log(el);
	}

	arr.push("The end");
	console.log(arr[arr.length - 1]);
}

/* TASK 07 */

/* 
	Запросите у пользователя по очереди числовые значения при помощи prompt и сохраните их в массив. 
	Собирайте числа до тез пор пока пользователь не введет пустое значение.
	Выведите получившийся массив на экран. 
	Выполните сортировку чисел массива, и выведите его на экран.
*/

{
	let arr = new Array();

	while (true) {
		let element = prompt("Enter number", 10);

		if (+element || element == 0) {
			arr.push(element);
		} else if (!isFinite(element)) {
			alert("Only numbers");
		} else {
			break;
		}
	}

	for (const el of arr) {
		console.log(el);
	}

	arr.sort((a, b) => a - b);

	for (const el of arr) {
		console.log(el);
	}
}

/* TASK 08 */

/* 
	Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] 
	(выведите в обратном порядке) 
	используя цикл while и метод reverse.
*/

{
	let arr = [12, false, "Текст", 4, 2, -5, 0];
	arr.reverse();
	let i = 0;

	while (i < arr.length) {
		console.log(arr[i]);
		i++;
	}
}

/* TASK 09 */

/* 
	Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].
*/

{
	let arr = [5, 9, 21, , , 9, 78, , , , 6];
	let count = 0;

	for (const elem of arr) {
		if (elem === undefined) [count++];
	}

	console.log(count);
}

/* TASK 10 */

/* 
	Найдите сумму элементов массива между двумя нулями 
	(первым и последним нулями в массиве). 
	Если двух нулей нет в массиве, то выведите ноль. 
	В массиве может быть более 2х нулей. 
	Пример массива: 
	[48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] 
	или 
	[1,8,0,13,76,8,7,0,22,0,2,3,2].
*/

{
	let arr = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2];

	let start;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			start = i;
			break;
		}
	}

	let end;

	for (let i = arr.length; i > 0; i--) {
		if (arr[i] === 0) {
			end = i;
			break;
		}
	}

	let sum = 0;

	if (start === undefined || end === undefined) {
		console.log(0);
	} else {
		for (let i = start + 1; i < end; i++) {
			sum += arr[i];
		}
		console.log(sum);
	}
}

/* TASK 11 */

/* 
	Нарисовать равнобедренный треугольник из символов ^. 
	Высоту выбирает пользователь. 
	Например: высота = 5, на экране:
*/

{
	// Определяю размер многомерного массива
	let arrHeight = prompt("Enter height of triangle:");

	// Определяю длинну каждого элемента массива
	let arrLength = 1;

	for (let i = 1; i < arrHeight; i++) {
		arrLength += 2;
	}

	// Создаю многомерный массив
	let matrix = new Array(arrHeight);

	for (let i = 0; i < arrHeight; i++) {
		matrix[i] = new Array(arrLength);

		for (let j = 0; j < matrix[i].length; j++) {
			matrix[i][j] = " ";
		}
	}

	// Добавляю символы
	let pos = arrLength / 2; //центральный элемент массива
	let del = 1; //количество элементов для удаления
	let sym = "^"; //символ для замены

	for (let i = 0; i < matrix.length; i++) {
		matrix[i].splice(pos - i, del, sym);
		sym += "^^";
		del += 2;
	}

	// Вывожу в консоль
	let line = "";

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			line += matrix[i][j];
		}
		console.log(line);
		line = "";
	}
}
