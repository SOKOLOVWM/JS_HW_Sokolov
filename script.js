//Task 02

let a1 = 5 % 3,
	a2 = 3 % 5,
	a3 = 5 + "3",
	a4 = "5" - 3,
	a5 = 75 + "кг",
	a6 = 785 * 653,
	a7 = 100 / 25,
	a8 = 0 * 0,
	a9 = 0 / 2,
	a10 = 89 / 0,
	a11 = 98 + 2,
	a12 = 5 - 98,
	a13 = (8 + 56 * 4) / 5,
	a14 = ((9 - 12) * 7) / (5 + 2),
	a15 = +"123",
	a16 = 1 || 0,
	a17 = false || true,
	a18 = true > 0;

console.log(a1, typeof a1);
console.log(a2, typeof a2);
console.log(a3, typeof a3);
console.log(a4, typeof a4);
console.log(a5, typeof a5);
console.log(a6, typeof a6);
console.log(a7, typeof a7);
console.log(a8, typeof a8);
console.log(a9, typeof a9);
console.log(a10, typeof a10);
console.log(a11, typeof a11);
console.log(a12, typeof a12);
console.log(a13, typeof a13);
console.log(a14, typeof a14);
console.log(a15, typeof a15);
console.log(a16, typeof a16);
console.log(a17, typeof a17);
console.log(a18, typeof a18);

//Task 03

const width = 10;
const height = 23;
const SPryam = width * height;
console.log(`Площадь прямоугольника: ${SPryam}см`);

//Task 04

const cylinderHeight = 10;
const cylinderDiameter = a7;
const VCilindra = Number(
	(Math.PI * cylinderDiameter * cylinderHeight).toFixed(2)
);
console.log(`Объем цилиндра: ${VCilindra}м`);

//Task 05

const radius = 5;
const SKruga = +(Math.PI * Math.pow(radius, 2)).toFixed(2);
console.log(`Площадь круга ${SKruga}см`);

//Task 06

let a = 5;
let b = 7;
let h = 10;
const STrap = ((a + b) / 2) * h;
console.log(`Площадь трапеции ${STrap}см`);

//Task 07

const amount = 2000000;
const rate = 10;
const years = 5;
const Pereplata = ((amount * rate) / 100) * years;
console.log(`Переплата по кредиту: ${Pereplata} рублей`);
