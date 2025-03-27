/* QUIZ Napisz funkcję, która przyjmie tablicę liczb i zwróci nową tablicę
zawierającą tylko liczby pierwsze. Wykorzystaj metodę filter().*/

const numbers = [1,2,3,4,5,6,7,8,9,10,11]

function prime(numbers){
    if (numbers < 2) return false;
    for (let i = 2; i <=Math.sqrt(numbers); i++){
        if (numbers % i === 0) return false;
    }
    return true;
}

function filterPrimes(numbers){
    return numbers.filter(prime);
}

console.log(filterPrimes(numbers));