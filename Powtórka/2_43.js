/* Utwórz tablicę obiektów students, gdzie każdy obiekt będzie zawierał klucze name, age i grades (tablica ocen). Utwórz nową tablicę zawierającą
        tylko imiona pełnoletnich studentów */

const students = [
    {
        name: 'Jacek',
        age: 20,
        grades: [1, 2, 3, 6],
    },
    {
        name: 'Kamil',
        age: 23,
        grades: [2, 5, 5, 3],
    },
    {
        name: 'Charli',
        age: 16,
        grades: [1, 2, 3, 2],
    }
]

const adults = students.filter(students => students.age >= 18).map(students => students.name);
console.log(adults);