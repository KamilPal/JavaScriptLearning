/* Napisz program, który obliczy sumę wszystkich liczb podzielnych przez 3 i 5 w zakresie od 1 do 100. */
let sum = 0;
for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        sum += i;
    }
}
console.log(sum);