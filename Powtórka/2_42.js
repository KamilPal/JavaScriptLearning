/*Utwórz tablicę obiektów products, gdzie każdy obiekt będzie miał kluczename, price i quantity. Oblicz całkowitą wartość wszystkich produktów (cena × ilość) i wyświetl wynik w konsoli.*/

const products = [
    {
        name: 'Mleko',
        price: 2.50,
        quantity: 4,
    },
    {
        name: 'Bułki',
        price: 6,
        quantity: 2,
    },
    {
        name: 'Kebab',
        price: 10,
        quantity: 1,
    }
];
let sum = 0;

products.forEach(product => {
    sum += product.price * product.quantity;
});
console.log(sum);