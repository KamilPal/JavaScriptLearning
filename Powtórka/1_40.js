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