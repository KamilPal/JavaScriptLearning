/*QUIZ Napisz funkcję, która przyjmie dwa obiekty i porówna ich zawartość –
funkcja ma zwrócić true, jeśli obiekty mają te same klucze i wartości. */
function compareObjects(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(compareObjects({ a: 'kamil', b: 2 }, { a: 'kamil', b: 2 })); 
console.log(compareObjects({ a: 1, b: 2 }, { a: 2, b: 1 })); 
