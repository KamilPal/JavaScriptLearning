/* Napisz program, który znajdzie najmniejszą i największą liczbę w tablicy [15, 42, 7, 23, 67, 1, 90]. */
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