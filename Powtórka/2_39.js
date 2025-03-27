/* Utwórz obiekt person zawierający klucze name, age, city. Dodaj nową właściwość country i przypisz do niej dowolną wartość. Następnie usuń jedną z właściwości i wyświetl wszystkie klucze i wartości obiektu w konsoli*/
const person = {
    name: 'Karol',
    age: 30,
    city: 'Poznan',
};

person.country = 'Polska';
delete person.age;
for(let key in person){
    console.log(`${key}: ${person[key]}`)
}