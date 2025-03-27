/* Napisz kod, który przy użyciu operatora warunkowego (?) zwróci informację, czy podana liczba jest podzielna przez 2 i 3. */
const number = 12; 
const result = (number % 2 === 0 && number % 3 === 0) 
    ? "Liczba jest podzielna przez 2 i 3" 
    : "Liczba nie jest podzielna przez 2 i 3";

console.log(result);