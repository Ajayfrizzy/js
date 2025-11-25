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

function randomNumber(min, max){
    return Math.random() * (max - min) + min;
}

console.log(randomNumber(2, 10));