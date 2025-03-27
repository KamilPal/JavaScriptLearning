/* Napisz program, który wygeneruje tablicę z liczbami od 1 do 50, a następnie użyje pętli for...of do wyświetlenia tylko liczb parzystych. */
function Generowanie(){
    let array = [];
    for (let i = 1; i <=50; i++){
        array.push(i);
    }
    return array;
}

let liczby = Generowanie();

console.log("Liczby parzyste: ");
for(let liczba of liczby){
    if(liczba % 2 === 0){
        console.log(liczba);
    }
}