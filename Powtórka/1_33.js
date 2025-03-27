/* Napisz kod, który przy użyciu switch przypisze do zmiennej dayType wartość "weekend" lub "weekday" na podstawie numeru dnia tygodnia. */

let dayType = 6;
 switch(dayType){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
 }