 
 // find the maximum between two numbers
 
 let smallNum = 50000;
 let bigNum = 10000;

 if ( smallNum > bigNum){
 console.log(smallNum)
 }
 else{
    console.log(bigNum)
 }
 
//number is negative, positive or zero

let num = 3330;

if (num==0){
    console.log("number i zero", num)


}else if (num>0){
    console.log("number is possitive", num)
}else{
    console.log("number is negative", num)
}

//check whether a number is divisible by 10 or not. 

let number = 20;

if(number  % 10 == 0){
    console.log("number is dividible by 10")
}else{
    console.log(" number is not dividible by 10")
}
//even or odd. 
let numbers = 3;

if(numbers  % 2 == 0){
    console.log("number is odd")
}else{
    console.log(" number is even")
}

//alphabet or not

let alph = '5';

if ((alph >="A" && alph <= "Z") || alph >="a" && alph <= "z"
){
console.log("this is a alphabet")
}else{
    console.log("this is not a alphabet")
}
//Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)


let temprature = 10;

if(temprature>=30){
    console.log("weather is too hot")
}else if(temprature<=25){
    console.log("weather is cold")
}else{
    console.log("weather is normal")
}

//Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)

let n1 = 5555550;
let n2 = 102220;
let n3 = 77744;

let largest = Math.max( n1, n2 ,n3 );

console.log(largest);

//Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.


{
    let num = 13;

    (num % 2==0)? console.log("even numner",num) : console.log("odd number",num)
}

//Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.


let numOne = 0;
let numTwo = 200;

if (numOne>30 && numTwo>30){
    console.log("are both grater then 30")
}else {
    console.log("are not grater than 30")
}


//Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)

let age =15;

if (age>=13  && age<=19){
    console.log("teenager")
}else{
    console.log("not teenagr")
}