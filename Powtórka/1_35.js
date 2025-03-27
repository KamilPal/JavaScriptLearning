/* Napisz kod, który sprawdzi, czy podane słowo jest palindromem (czyta się tak samo od przodu i od tyłu).*/
let string = "Kamil Ślimak";

let text = string.toLowerCase().replace(/\s+/g, '');
let reversedText = text.split('').reverse().join('');

if(text === reversedText){
    console.log(string + " jest polindromem");
}else{
    console.log(string + " to nie jest polindrom");
}