/*Utwórz tablicę obiektów orders, gdzie każdy obiekt będzie zawierał
        klucze product, price i quantity. Znajdź zamówienia o wartości powyżej 100
        i zwróć nową tablicę zawierającą tylko nazwy produktów*/

const orders = [
    {
        prodcut: 'Mleko',
        price: 5,
        quantity: 2,
    },
    {
        prodcut: 'Chałka',
        price: 10,
        quantity: 56,
    },
    {
        prodcut: 'Arbuz',
        price: 8,
        quantity: 102,
    },
]
const onehundred = orders.filter(orders => orders.price * orders.quantity > 100)
    .map(orders => orders.prodcut);
console.log(onehundred);