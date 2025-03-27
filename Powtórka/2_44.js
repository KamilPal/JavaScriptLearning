/*Utwórz tablicę obiektów employees, gdzie każdy obiekt będzie miał
        klucze name, department i salary. Zwróć obiekt pracownika o najwyższym
        wynagrodzeniu*/
const employees = [
    {
        name: 'UwU',
        department: 'Ok',
        salary: 2000,
    },
    {
        name: 'XDD',
        department: 'Ok',
        salary: 5000,
    },
    {
        name: 'Aha',
        department: 'Ok',
        salary: 1000,
    }
]

let bogaty = employees[0]

employees.forEach(employees => {
    if (employees.salary > bogaty.salary) {
        bogaty = employees;
    }
});

console.log(bogaty);