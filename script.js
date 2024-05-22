// if(5<10){
//     console.log("5 is less")
// }
// else{
//     console.log("10 is greather")
// }

// let age=19;
// if( age<18){
//     console.log("You are  not eligible for license")
// }
// else{
//     console.log("YOU are eligible for license")
// }

// let time=2;
// if (time<=12) {
//     console.log("Good Morning")
// }
// else if(time>12 && time<=15){
//     console.log("Good Afternoon")
// }
// else if(time>=15 && time<=19){
//     console.log("Good Evening")
// }
// else if(time>=19 && time<=24) {
//     console.log("Good Night")
// }


// let a = 18;
// (a<20)?console.log("a is less than 20"):console.log("a is greather than 20")

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// for(let i = 1;i<=5;i++){
//     console.log(i)
// }


// for(let i = 0;i<=10;i++){
//     console.log(i)
// }

// let fruits = ["apple","orange","grapes","banana"];
//     for(let i =0; i<fruits.length;i++){
//         console.log(fruits[i]);
//     }


// let numbers =  [1,2,3,4,5,6];
//   for(let i)
// Initializing numbers array


// let number = [1,2,3,4,5,6];
// for(i=0;i<number.length;i++){
//     if(number[i]%2==0){
//     console.log(`${number[i]} is even`)
// }
// else{
//     console.log(`${number[i]} is odd`)
// }
// }

// let values = [1,2,3,4,5,6,7,8,9];

// let sum = 0;

// for (let i = 0; i < values.length; i++) {
// 	sum += values[i];
// }

// console.log("Sum is " + sum) 

// for(let i =1 ; i<=5 ; i++){
//     for(j=1 ; j<=5; j++){
//         console.log(`${i} * ${j} = ${i *j}`)
//     }
// }


// reverse the string

const str = "Hello Nirmala"  


function reverseString(str) {
    const strRev =  Array.from(str).reverse().join("");
    console.log(strRev);
}

