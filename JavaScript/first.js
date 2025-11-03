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
let item=[250,300,400,500,600];
let sum=0;
let k=0;
for(let i of item)//giving 10% offer on each product =product*0.9;
{
    console.log(`value at indes = ${k} before discount =${i}`);
   i=i*0.9;
   item[k]=i;
   console.log(`value at indes = ${k} after discount =${item[k]}`);
    k++;
}

