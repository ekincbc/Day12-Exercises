// Triangle Exercise

// const angle1 = Number(prompt('Enter Angle 1'));
// const angle2 = Number(prompt('Enter Angle 2'));
// const angle3 = Number(prompt('Enter Angle 3'));
// const sum = angle1 + angle2 + angle3;

// if (sum === 180){
//     document.write("That's a triangle!!!");
// }else {
//     document.write("Sorry it's not a triangle!");
// }

// Days in a month Exercise

// const monthNumber = Number(prompt('Enter month number: '));

// let days = 31

// if ( monthNumber === 2){
//     days = 28;
// }else if ( 
//     monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber === 11
// ) {
//     days = 30;
// }

// document.write('This month has ' + days + ' days.');

// Login Exercise

// const login = prompt('Enter you login username: ');
// const password = prompt('Enter your password: ');

// if (password === 'sore-thumb-218') {
//     document.write('Access granted.');
// } else {
//     document.write('Nice try!');
// }

// const password1 = prompt('Enter your password: ');
 
// if (password1.length >= 8) {
//   const password2 = prompt('Enter the same password: ');
 
//   if (password1 === password2) {
//     document.write('Password ok');
//   } else {
//     document.write('Your passwords do not match.');
//   }
// } else {
//   document.write('Passwords must have at least 8 characters.');
// }

// Bus tickets Exercise --------------------------------

// const age = Number(prompt('Please enter your age:'));
// const basePrice = 12; 
// let price = 0;
 
// if (age < 6) {
//   price = 0;
// } else if (age <= 15) {
//   price = Math.ceil(basePrice * 0.35);
// } else if (age <= 26) {
//   price = Math.ceil(basePrice * 0.65);
// } else if (age <= 64) {
//   price = basePrice;
// } else {
//   price = basePrice * 0.5
// }
 
// document.write('Ticket price: ' + price);

// Temperatures Exercise ----------------------------

// let temp1 = Number(prompt('Enter first temperature: '));
// let temp2 = Number(prompt('Enter second temperature: '));
// let temp3 = Number(prompt('Enter last temperature: '));

// let tempMax = 0;

// if (temp1 > temp2 && temp1 > temp3){
//     tempMax = temp1;
// } else if (temp2 > temp1 && temp2 > temp3){
//     tempMax = temp2;
// }else {
//     tempMax = temp3;
// }

// alert('Highest temp of the day: ' + tempMax);


// Swimming simulation exercise ------------------------------------

// const swimmerOne = prompt('Enter the swimmers name:');
// const swimmerTwo = prompt('Enter the next swimmers name:');
// const swimmerThree = prompt('Enter the another swimmers name:');

// const randomTime = (min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;  // sor öğren öğrenince nedenini yaz.
// }
 
// const timeOne = randomTime(45, 60);
// const timeTwo = randomTime(45, 60);
// const timeThree = randomTime(45, 60);

// if (timeOne > timeTwo && timeOne > timeThree) {
 
//     document.write('1. ' + swimmerOne  + ' (Gold)');
 
//     if (timeTwo > timeThree) {
//         document.write('2. ' + swimmerTwo + ' (Silver)');
//         document.write('3. ' + swimmerThree + ' (Bronze)');
//     } else {
//         document.write('2. ' + swimmerThree + ' (Silver)');
//         document.write('3. ' + swimmerTwo + ' (Bronze)');
//     }
// } else if (timeTwo > timeOne && timeTwo > timeThree) {
 
//     document.write('1. ' + swimmerTwo + ' (Gold)');
 
//     if (timeOne > timeThree) {
//         document.write('2. ' + swimmerOne + ' (Silver)');
//         document.write('3. ' + swimmerThree + ' (Bronze)');
//     } else {
//         document.write('2. ' + swimmerThree + ' (Silver)');
//         document.write('3. ' + swimmerOne + ' (Bronze)');
//     }
// } else if (timeThree > timeOne && timeThree > timeTwo) {
 
//     document.write('1. ' + swimmerThree + ' (Gold)');
 
//     if (timeOne > timeTwo) {
//         document.write('2. ' + swimmerOne + ' (Silver)');
//         document.write('3. ' + swimmerTwo + ' (Bronze)');
//     } else {
//         document.write('2. ' + swimmerTwo + ' (Silver)');
//         document.write('3. ' + swimmerOne + ' (Bronze)');
//     }
// } else {
//     document.write('Something went wrong.');
// }


// A leap year exercise -----------------------------------------------

// const year = Number(prompt("Enter a year: "));
// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       document.write(year + ' is a leap year');
//     } else {
//       document.write(year + ' is not a leap year');
//     }
//   } else {
//     document.write(year + ' is a leap year');
//   }
// } else {
//   document.write(year + ' is not a leap year');
// }

// kısa çözümü --------

// const year = Number(prompt("Enter a year: "));
// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//   document.write(year + ' is a leap year');
// } else {
//   document.write(year + ' is not a leap year');
// }