// const profile=
// {
//  name:"vaibhav",
// followers:79,
// following:80,
// location:"India"
// };
// console.log(profile);
// console.log("hello world");
// let number=prompt("Enter the score of student");
// if(number>=90&&number<=100)
// {
//     console.log("A grade student");
// }
// else if(number>=70&&number<=89){
//     console.log("B grade student");
// }
// else if(number>=60&&number<=69){
//     console.log("C grade student");
// }
// else if(number>=50&&number<=59){
//     console.log("D grade student");
// }
// else{
//     console.log("F grade student");
// }




// let user = prompt("enter the name");
// user=user+" ";
// let username="";
// let w = "";
// for (let i = 0; i < user.length; i++) {
//     let ch =  user.charAt(i);
//     if (ch == " ") {
//         username=username.concat(w);
//         w="";
//     }
//     else {
//         w = w + ch;
//     }

// }
// username = username.toLowerCase();
// let length=username.length;
// let result=`Username = ${"@"+username+length}`
// console.log(result);




// 10%off
// let item=[250,300,400,500,600];
// let sum=0;
// let k=0;
// for(let i of item)//giving 10% offer on each product =product*0.9;
// {
//     console.log(`value at indes = ${k} before discount =${i}`);
//    i=i*0.9;
//    item[k]=i;
//    console.log(`value at indes = ${k} after discount =${item[k]}`);
//     k++;
// }




//guess the number game 
// let number = Math.floor(Math.random() * 101);
// let userno;
// let count=0;
// alert("a number is generated between 0 and 100 you have 100 chances to guess your score will be calculated on the basis of that")
// do
// {
//     userno=prompt("enter a number"); 
//     userno=Number.parseInt(userno);
//     if(userno<number)
//     alert("your number is smaller than the actual no");
//      if(userno>number)
//     alert("your number is larger than the actual no");
//     if(Math.abs(userno-number)<=(4))
//    alert(" you are too close!!! ");
//     count++;
//  }while(userno!=number);
// alert("your Guess is right ..YOu won!!");
// alert("your score=",(100-count));

// console.log("your Guess is right ..YOu won!!");
// console.log("your score=",(100-count));






//Testing all console commands 
// console.log(console);//it will print a console button by which we can view other console commands list 
// console.assert(5 < 7);//give true because assertion is false work like ternary operator 
// console.time("forLoop")
// for (let i = 0; i < 5; i++) {
//     console.log(123);
// }
// console.timeEnd("forLoop")//for fetching the time taken by for loop or any loop but write the label for console.time() and concole.timeEnd() same like it is taken as "forLoop" and "whileLoop"
// console.time("whileLoop")
// let i = 0;
// while (i < 5) {
//     console.log(456);
//     i++
// }
// console.timeEnd("whileLoop");
// console.error("This is an error message");
// obj =
// {
//     name: "Vaibhav",
//     age: 18,
//     course: "BCA",
//     college: "Lucknow University",
// };
// console.table(obj);
// console.info("this is an info");
// console.warn("this is a warning");
// document.write("hello world");//it will write on the webpage
// confirm("are you sure you want to proceed");//it will give a dialog box with ok and cancel button





//practice Question 
//to check whether a user can drive a car or not depending upon his age 


// let age = prompt("enter your age");
// age = Number.parseInt(age);

// // function to check age
// const canDrive = (age) => {
//     let out = (age > 18 )? true : false;
//     return out;
// }
// if (canDrive(age)) {
//     alert("user can drive");
//     document.write("You can drive !! Congrats");
// }
// else
//     alert("user can not drive");



//change page background color as per user
// jump to another website as per user wish 
// let color=prompt("enter the color of your choice");
// document.body.style.backgroundColor=color;
// console.log(`background color changed to ${color}`);

// let web=prompt("enter the website you want to visit in the manner websitename.com");
// location.href=`https://www.${web}`;
// console.log(`you are being redirected to http://www.${web}`);





// Snake , water , gun game

const chars = ['s', 'w', 'g'];   // your 3 characters
let randomChar = chars[Math.floor(Math.random() * chars.length)];
let input = prompt("enter one character between S,W,G");
alert(randomChar);
// input = input.toUpperCase();
console.log(randomChar);
count = 0;
while (input != randomChar) {
    input = prompt("enter  again");
    // input = input.toUpperCase();   // your 3 characters
    randomChar = chars[Math.floor(Math.random() * chars.length)];
    alert(randomChar);
    count++;
}
console.log("your final score =", count);
document.write("Game over !! well played  your score =", count);



console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);
console.log(document.body.children);
console.log(document.body.childElementCount);
//childnodes is not an array but it is an collection to convert it into an array we need to perform the operation that is array.from(collection)
// in the elements tab of dev tools whenever we select any elemnt in the website the elememts tab shows $0 in front of it which means that element can be accessed using $0 in the console tab and if we $1 is used to select the previous element

