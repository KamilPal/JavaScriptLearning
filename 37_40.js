/* Napisz kod, który użyje pętli for, aby odwrócić kolejność elementów
w tablicy bez użycia wbudowanej metody .reverse().*/
const array = [1, 2, 3, 4, 5];
const reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
}

console.log(reversedArray);

/* Napisz kod, który przy użyciu operatora warunkowego (?) zwróci
informację, czy podana liczba jest podzielna przez 2 i 3. */
const number = 12; 
const result = (number % 2 === 0 && number % 3 === 0) 
    ? "Liczba jest podzielna przez 2 i 3" 
    : "Liczba nie jest podzielna przez 2 i 3";

console.log(result);

/* Napisz program, który znajdzie najmniejszą i największą liczbę w tablicy
[15, 42, 7, 23, 67, 1, 90]. */
const numbers = [15, 42, 7, 23, 67, 1, 90];
let min = numbers[0];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(`Najmniejsza liczba: ${min}`);
console.log(`Największa liczba: ${max}`);

/* Napisz kod, który użyje instrukcji switch do wyświetlenia nazwy miesiąca
na podstawie podanego numeru (np. 1 = styczeń). */
const monthNumber = 3; 
let monthName;

switch (monthNumber) {
    case 1: monthName = "Styczeń"; break;
    case 2: monthName = "Luty"; break;
    case 3: monthName = "Marzec"; break;
    case 4: monthName = "Kwiecień"; break;
    case 5: monthName = "Maj"; break;
    case 6: monthName = "Czerwiec"; break;
    case 7: monthName = "Lipiec"; break;
    case 8: monthName = "Sierpień"; break;
    case 9: monthName = "Wrzesień"; break;
    case 10: monthName = "Październik"; break;
    case 11: monthName = "Listopad"; break;
    case 12: monthName = "Grudzień"; break;
    default: monthName = "Niepoprawny numer miesiąca";
}

console.log(`Numer ${monthNumber} to ${monthName}`);

// Tworzenie tablicy liczb od 1 do 20
const numbersArray = Array.from({ length: 20 }, (_, i) => i + 1);

// Filtrowanie liczb podzielnych przez 3
const divisibleByThree = numbersArray.filter(num => num % 3 === 0);

// Podnoszenie liczb do kwadratu
const squaredNumbers = divisibleByThree.map(num => num ** 2);

console.log(squaredNumbers);
