/*Utwórz obiekt person z kluczami name i age. Utwórz jego kopię na dwa sposoby – za pomocą metody i operatora. Zmień wartość klucza w kopii
i sprawdź, czy zmiana wpłynęła na oryginalny obiekt dla obu wersji*/

const person = {
    name: "Pawel",
    age: 30,
}

const person2 = Object.assign({}, person);
const person3 = { person };
person.age = 20;

console.log(person);
console.log(person2);
console.log(person3);