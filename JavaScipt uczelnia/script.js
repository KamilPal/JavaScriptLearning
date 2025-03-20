/*//1.2
console.log("Witaj w świcie JavaScript!") 

//1.3
console.log(typeof 42);
console.log(typeof 'Hello');
console.log(typeof true);
console.log(typeof null);

//1.4
console.log(10+'5');

//1.5
var name = 'Jacek';
var age = 23;
var isStudent = true;
console.log(name,age,isStudent);

//1.6
const colors = ["red","blue","green"];
let first = colors[0];
let last = colors[2];
console.log(first,last);

//1.7
const person = {name:"Kamil",age:24,isEmployed:true};
console.log(person);

//1.8
var data = null;
console.log(typeof data);

//1.9
console.log(20/0);

//1.10
var x = 5;
x=10;
console.log(x);

//1.11
{
    let y=10;
    console.log(y)
}
console.log(y);
Uncaught ReferenceError: y is not defined
*/

//1.12
/*const z = 'JavaScript';
z = 5;
console.log(z);
Uncaught TypeError: Assignment to constant variable.


//1.13
const array = ["1","2","3"];
array.push("Kiwi");
console.log(array);

//1.14
{
    var x = 645;
    console.log(x);
}
console.log(x);
{
    let y = 10;
    console.log(y);
}
console.log(y);

//1.15
x = 5;
console.log(x);
var x;

//1.16
var n = 8;
if(n%2 === 0){
    console.log('Podzielna przez 2')
}else{
    console.log('Nie dzieli się przez 2');
}

//1.17
var x = -2;
if(x > 0){
    console.log('Jest większa od zera');
}if (x === 0){
    console.log('Liczba jest równa 0');
}if(x < 0){
    console.log("Liczba jest mniejsza od 0");
}

//1.18
var grade = 5;
switch(grade){
    case 1:
        console.log("Niedostadeczny");
        break;
    case 2:
        console.log("Dopuszczający");
        break;
    case 3:
        console.log("Dostateczny");
        break;
    case 4:
        console.log("Dobry");
        break;
    case 5:
        console.log("Bardzo dobry");
        break;
    case 5:
        console.log("Celujący");
        break;
    default:
        console.log('Nie ma takiej oceny');
        break;
}

//1.19
var year = 2001;
if(year%4===0){
    console.log("Rok jest przeystępny");
}else{
    console.log("Rok nie jest przestępny");
}

//1.20
var wiek = 18;
console.log(wiek < 17 ? 'pełoletni' : 'niepełnoeltni');

//1.21
var i;
for(i=1;i<=10;i++){
    console.log(i);
}

//1.22
var i;
var sum = 0;
for(i=1; i<=100; i++){
    sum += i;
    console.log(sum);
}

//1.23
var i = 5;
while(i>=0){
    console.log(i--);
}

//1.24
var i;
for(i=1;i<=30;i++){
    if(i%3===0){
    console.log(i);
}
}

//1.25
const fruits = ["apple", "banana","orange"]
for (let fruit of fruits){
    console.log(fruit);
}

//1.26
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for(let key in person){
    console.log(`${key}: ${person[key]}`)
}

//1.27
var Liczba = 1;
while(Liczba <=10){
    console.log(Liczba)
    if(Liczba===7){
        break;
    }
    Liczba++;
}

//1.28
const numbers = [12, 45, 67, 2, 89, 34]
let maxNumber = numbers[0];

for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > maxNumber){
        maxNumber = numbers[i];
    }
}
console.log(maxNumber);

//1.29
var liczba;
for(liczba = 1; liczba<=20;liczba++){
    if(liczba % 4===0){
        continue
    }
    console.log(liczba);
}

//1.30
let person = {
    name: "John",
    age: 30,
    isEmployed: true
};

for (let key in person) {
    console.log(`Właściwość: ${key}, Typ: ${typeof person[key]}`);
}
*/
//1.31
