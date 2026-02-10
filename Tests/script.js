// OUTPUT
/* document.write("Hello World");
console.log("Hello world");
console.info("Hello world"); 

console.error("Erorr Hello");
console.warn("warning World");*/


// VARIABLES
/* let name = "Olzhas";
console.log(name); 

const PI = 3.14;
let r = 4;
let area = 4 * 4 * PI;
console.log("Area of circle with radius = 4: " + area);*/


// IF, ELSE, ELSE IF
/* let age = 47;

if(age > 21){
    console.log("U r allowe to use app")
}
else if(age == 18){
    console.log("U r allowe to use app with parrent")
}
else {
    console.log("U r not allowed to use app")
} */



// SWITCH CASE
/* let day = 8;

switch(day) {
    case 1:
        console.log("Its Monday");
        break;
    case 2:
        console.log("Its Tuesday");
        break;
    case 3:
        console.log("Its Wensday");
        break;
    case 4:
        console.log("Its Thursday");
        break;
    case 5:
        console.log("Its Friday");
        break;
    case 6:
        console.log("Its Saturday");
        break;
    case 7:
        console.log("Its Sunday");
        break;
    default:
        console.log("IDK");
} */



// ARRAY MATRIX
/* let arr = [2, 7, 9, 14, 26, 37, 41, 57];
console.log(arr);
console.log(arr[0]);

let matrix = [[1, 2], [3, 4]];
console.log(matrix);
console.log(matrix[0][0]); */



// FOR WHILE
/* let arr = [2, 4, 6, 8, 10];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

let i = arr.length - 1;
while(i>=0){
    console.log(arr[i]);
    i--;
}

let x = 0;
do {
    console.log(x);
    x++
} while(x < 10){

} */



// FUNCTION
/* function info(){
    console.log("Hello User");
}

info(); */



/* function btnPress(){
    alert("U pressed  button");
} */


function printName(name){
    console.log(name.value);
}