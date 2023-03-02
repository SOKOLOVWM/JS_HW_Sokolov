"use strict";

/* COMMON VARIABLES*/

// const name = prompt("Your name");
// const age = prompt("Your age");
// 	let a = 10;
// 	let b = 2;

/* TASK 01 */

// {
// 	const city = prompt("Your city");
// 	const phone = prompt("Your phone");
// 	const email = prompt("Your email");
// 	const company = prompt("Your company");

// 	console.log(`
// 		My name is ${name}.
// 		I am ${age} years old.
// 		I live in ${city} and work for ${company}.
// 		My contacts are: phone ${phone}, e-mail ${email}.
// 	`);
// }

/* TASK 02 */

// {
// 	const yearCurrant = 2023;
// 	const yearBirth = yearCurrant - age;
// 	console.log(`${name} was born in ${yearBirth}.`);
// }

/* TASK 03 */

// {
// 	const str = prompt("Enter number of 6 characters", "");
// 	let sumLeft = 0;
// 	let sumRight = 0;

// 	if (str.length === 6) {
// 		for (let i = 0, y = str.length - 1; i < 3; i++, y--) {
// 			sumLeft += +str[i];
// 			sumRight += +str[y];
// 		}
// 		console.log(sumLeft === sumRight ? "Yes" : "No");
// 	} else {
// 		console.log("Incorrect quantity of characters");
// 	}
// }

/* TASK 04 */

// {
// 	const a = prompt("Enter number", "");
// 	const result = +a > 0 ? "correct" : "incorrect";
// 	console.log(`Number ${a} is ${result}`);
// }

/* TASK 05 */

// {
// 	let sum = a + b;
// 	let dif = a - b;
// 	let mul = a * b;
// 	let div = Number(a / b).toFixed(2);
// 	let squ = 0;

// 	if (sum > 1) squ = Math.pow(sum, 2);

// 	console.log(`
// 		Sum is ${sum}
// 		Dif is ${dif}
// 		Mul is ${mul}
// 		Div is ${div}
// 		Squ is ${squ}
// 	`);
// }

/* TASK 06 */

if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
	console.log("Верно");
} else {
	console.log("Неверно");
}
