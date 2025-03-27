/*Utwórz tablicę numbers zawierającą liczby od 1 do 20. Utwórz nową tablicę zawierającą tylko liczby podzielne przez 3, a następnie zmień każdą wartość w nowej tablicy, podnosząc ją do kwadratu.*/
function Generowanie(){
    let array = [];
    for (let i = 1; i <=20; i++){
        array.push(i);
    }
    return array;
}

const numbers = Generowanie();
const Przez3 = numbers.filter(i => i % 3===0);
const Kwadrat = Przez3.map(i => i ** 2);

console.log(Kwadrat);