'use strict'
var minute = 10;
if (minute >= 0 && minute <= 14) {console.log('В первую');}
if (minute >= 15 && minute <= 30) {console.log('Во вторую');}
if (minute >= 31 && minute <= 45) {console.log('В третью');}
if (minute >= 46 && minute <= 59) {console.log('В четвертую');}



var lang = 'ru';
if (lang == 'ru') {var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];}
if (lang == 'en') {arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];}
console.log(arr);



var num = prompt('Введите число', 0);
if (num == 0) {
  alert( "Число " + num + " ноль" );
} else if (num > 0 && num < 10) {
  alert( "Число " + num + " однозначное положительное" );
} else if (num >= 10 && num < 100) {
  alert( "Число " + num + " двухзначное положительное" );
} else if (num >= 100) {
  alert( "Число " + num + " положительное трехзначное и более" );
} else if (num < 0 && num > -10) {
  alert( "Число " + num + " однозначное отрицательное" );
} else if (num <= -10 && num > -100) {
  alert( "Число " + num + " двухзначное отрицательное" );
} else {
  alert( "Число " + num + " отрицательное трехзначное и более" );
}


let red = "Нет", yellow = "Нет";
if (red == "Да") 
{console.log("При красном сигнале стоим - дорогу переходить нельзя!");
} else if(yellow == "Да")
{console.log("При жёлтом сигнале нужно приготовиться, но дорогу пока переходить нельзя!");
} else 
{console.log("Зелёный сигнал - переходим дорогу.");}


let i5 = 1;
while(i5 <= 12){console.log(i5);
i5++;}


let i6 = 5;
while(i6 <= 13){console.log(i6);
i6++;}


for (var i7 = 0; i7 <= 16; i7++) {
	if(i7 % 2 == 0) {
		console.log(i7);
	}
  }


let result8=0;
let arr8=[2,5,8,3,6];
for(let i8=0; i8<arr8.length; i8++){
	result8=result8+arr8[i8];
}
console.log(result8);