/*Utwórz tablicę colors zawierającą trzy kolory. Dodaj nowy kolor na początku i na końcu tablicy. Usuń element z początku i końca tablicy, a następnie wyświetl zawartość tablicy w konsoli.*/
const colours = ['red','blue','green']
colours.push('violet');
colours.unshift('black');
console.log(colours);
colours.pop();
colours.shift();
console.log(colours);