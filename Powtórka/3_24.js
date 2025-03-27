/* QUIZ Napisz funkcję, która przyjmie tablicę liczb i zwróci największą różnicę
między dwoma elementami tablicy. */

function maxDifference(numbers) {
    if (numbers.length < 2) return 0;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return max - min;
}

console.log(maxDifference([3, 10, 1, 20]));