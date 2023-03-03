"use strict";

/* COMMON VARIABLES*/

const name = prompt("Your name");
const age = prompt("Your age");
const a = 10;
const b = 2;

/* TASK 01 */

{
	const city = prompt("Your city");
	const phone = prompt("Your phone");
	const email = prompt("Your email");
	const company = prompt("Your company");

	console.log(`
		My name is ${name}.
		I am ${age} years old.
		I live in ${city} and work for ${company}.
		My contacts are: phone ${phone}, e-mail ${email}.
	`);
}

/* TASK 02 */

{
	const yearCurrant = new Date().getFullYear();
	console.log(yearCurrant);
	const yearBirth = yearCurrant - age;
	console.log(`${name} was born in ${yearBirth}.`);
}

/* TASK 03 */

{
	const str = prompt("Enter number of 6 characters", "");
	let sumLeft = 0;
	let sumRight = 0;

	if (str.length === 6) {
		for (let i = 0, y = str.length - 1; i < 3; i++, y--) {
			sumLeft += +str[i];
			sumRight += +str[y];
		}
		console.log(sumLeft === sumRight ? "Yes" : "No");
	} else {
		console.log("Incorrect quantity of characters");
	}
}

/* TASK 04 */

{
	const a = prompt("Enter number", "");
	const result = +a > 0 ? "correct" : "incorrect";
	console.log(`Number ${a} is ${result}`);
}

/* TASK 05 */

{
	const sum = a + b;
	const dif = a - b;
	const mul = a * b;
	const div = Number(a / b).toFixed(2);
	let squ = 0;

	if (sum > 1) squ = Math.pow(sum, 2);

	console.log(`
		Sum is ${sum}
		Dif is ${dif}
		Mul is ${mul}
		Div is ${div}
		Squ is ${squ}
	`);
}

/* TASK 06 */

{
	if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
		console.log("Верно");
	} else {
		console.log("Неверно");
	}
}

/* TASK 07 */

{
	const n = Math.floor(Math.random() * 59 + 1);

	if (n >= 0 && n <= 59) {
		let result =
			n <= 15 ? "first" : n <= 30 ? "second" : n <= 45 ? "third" : "fourth";

		console.log(result);
	} else {
		console.log("Enter correct value");
	}
}

/* TASK 08 */

{
	const day = +prompt("Enter day of month", 1);

	if (day > 0 && day <= 31) {
		console.log(day < 11 ? "first" : day < 21 ? "second" : "third");
	} else {
		console.log("Enter correct value");
	}
}

/* TASK 09 */

{
	const day = +prompt("Enter quantity of days", 1);

	if (day >= 365) {
		const year = Math.floor(day / 365);
		console.log(`${year} year`);
	} else {
		console.log("Less than a year");
	}

	if (day >= 31) {
		const month = Math.floor(day / 31);
		console.log(`${month} months`);
	} else {
		console.log("Less than a month");
	}

	if (day >= 7) {
		const week = Math.floor(day / 7);
		console.log(`${week} weeks`);
	} else {
		console.log("Less than a week");
	}

	const hour = Math.floor(day * 24);
	console.log(`${hour} hours`);

	const minute = Math.floor(day * 24 * 60);
	console.log(`${minute} minutes`);

	const second = Math.floor(day * 24 * 60 * 60);
	console.log(`${second} seconds`);
}

/* TASK 10 */

{
	const day = Math.floor(Math.random() * 365 + 1);
	const month = day > 360 ? 12 : Math.ceil(day / 30);

	switch (month) {
		case 1:
		case 2:
		case 12:
			console.log(`Month ${month} is winter`);
			break;

		case 3:
		case 4:
		case 5:
			console.log(`Month ${month} is spring`);
			break;

		case 6:
		case 7:
		case 8:
			console.log(`Month ${month} is summer`);
			break;

		case 9:
		case 10:
		case 11:
			console.log(`Month ${month} is autumn`);
			break;

		default:
			console.log("Incorrect value");
			break;
	}
}
