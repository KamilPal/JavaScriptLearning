/*Utwórz obiekt person, który będzie zawierał zagnieżdżony obiekt address z kluczami city i country. Zmień wartość klucza country na nową wartość
i sprawdź, czy zmiana wpłynęła na oryginalny obiekt.*/

const person = {
    address: {
        city: 'Buk',
        country: 'Poznan',
    }
}
person.address.country = 'Europa';
console.log(person);