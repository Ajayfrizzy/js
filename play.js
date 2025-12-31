/*let seun = "Seun is here!";

alert(`${1}`);
alert("seun");
alert(seun);


let seun = confirm("Is Seun a Boss?");

alert(seun);

let age = prompt("How old are you?")
alert(`You are ${age} years old!`); */
// let seun = "";

// function showMessage(seun){
//     return seun;
// }

// console.log(showMessage("Seun is here again now!"));

// function calc(a, b, c){
//     let result = a * b * c;
//     return result;
// }

// console.log(calc(4, 4, 5))

// //To convert Celsius to Fahrenheit
// function cToF(celsius){
//     let fah = (celsius * 9/5) + 32;
//     return fah;
// }
// console.log(cToF(30));

//function to return larger number
/*function largeNum(a, b){
    return a>b?a:b;
}

console.log(largeNum(50,30))*/
// function sayHi(){
//     return "Hi"
// }
// alert(sayHi);

// let func = sayHi;

// func();
// sayHi();

// function toAskQuestion(question, yes, no){
//     if (confirm(question)) yes()
//         else no();
// }

// function showOk(){
//     alert("You agreed");
// }

// function showCancel(){
//     alert("You canceled the execution");
// }

// function randomNumber(min, max){
//     return Math.random() * (max - min) + min;
// }

// console.log(randomNumber(2, 10));


//Objects
/*let details ={
    fname: "Seun",
    lname: "Ajao",
    age: 28,
}

const changeDetails = details["fname" + "lname"] = "Adewale" + " " + "Samuel";
const ageDetails = details.age = 30;
console.log(`${"My names are " + changeDetails + " and I am " + ageDetails}`);

//Array Methods
const arr = [1,2,3,4,5,6]

const removeLastEle = arr.pop();
const addLastEle = arr.push(7,8,10)
const removeFirstEle = arr.shift();
const addFirstEle = arr.unshift(-2, -1, 0)

console.log(arr)


//Variable declaration and assignment
let admin;
let name = "John";
admin = name;
console.log(admin); //John

*/

//"use strict";
// let age = 25;
// function changeAge(){
//     age = 30;
//     let message = "New age is " + age;
//     alert(message);
// }

// alert( age );
// changeAge();
// alert( age );

/*function giveMeMessage(from, text = "No message here!"){
    console.log(from + " : " + text);
}

giveMeMessage("Aisha", "How far omo oro");
giveMeMessage("GB", "I needs some colos");
giveMeMessage("Seun"); */

/*function anotherText(from, text){
    if(text === undefined){
        text = "There isn't message here!";
    }
    console.log(from + ": " + text);
}

anotherText("Tunde");
anotherText("Bola", "wetin dey sup");*/

/*function newMessage(text){
    //text = text || "Default message here!"
    console.log(text ?? "Nothing to show");
}

newMessage();
newMessage("Seun is here");
newMessage(null) */

/*function math(a, b){
    return a * b;
}

let result = math(10, 56);
console.log(result);*/

/*function showMe(age){
    if (age >= 18){
        return true;
    } else {
        return confirm("Do not try if you don't have permission");
    }
}

let age = prompt(showMe("How old are you now?", ""));

if (showMe(age)){
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}*/

// function checkAge(age){
//     return (age >= 18) ? true : confirm("Do you have permission from your parents?");
// }

// let age = prompt("How old are you?");

// function min(a, b){
//     if (a < b) {
//         return a || b;
//     } else {
//         return "Both are equal";
//     }
// }

// console.log(min(5, 27));
// console.log(min(10, 10));

// function ask(question, yes, no){
//     if (confirm(question)) yes()
//         else no();
// }


// ask(
//     "Do you agree with the terms?",
//     function(){alert("You agree?");},
//     function(){alert("You canceled the execution");}
// );

// let sum = (a, b) => a + b;


// console.log(sum(2, 4))

/* let func = (question, yes, no) =>{
 if (confirm(question)) yes(); else no();
}
func(
    "Do you agree?",
    () => {alert("Yoh agree.");},
    () => {alert("You canceled the execution");}
); */

let array = [65, 42, 78, 12, 5, 67, 90, 36];

array.sort(() => Math.random() - 0.5);

console.log(arr);
    
