"use strict";

/* Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию
prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д.
Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в
городе %Город% и работаю в компании %Компания%. Мои контактные данные:
%Телефон%, %Почта%.». */

/* TASK 01 */

{
	const name = prompt("Your name");
	const age = prompt("Your age");
	const city = prompt("Your city");
	const phone = prompt("Your phone");
	const email = prompt("Your email");
	const company = prompt("Your company");

	console.log(`
		My name is ${name}.
		I am ${age} years old.
		I live in ${city}.
		My phone is ${phone}.
		My e-mail is ${email}.
		I work for ${company}.
	`);
}
