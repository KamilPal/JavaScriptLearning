/* Napisz program, który poprosi użytkownika o wprowadzenie liczby i sprawdzi, czy jest ona liczbą pierwszą */
 let input = prompt("Podaj liczbę: ");
 let number = parseInt(input);

 function Prime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

if(isNaN(number)){
    console.log("To nie jest poprawna liczba");
} else if(Prime(number)) {
    console.log(number + "jest liczbą pierwszą.");
} else {
    console.log(number + "nie jest liczbą pierwszą.");
}