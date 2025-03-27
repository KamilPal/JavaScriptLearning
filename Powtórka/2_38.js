/* Utwórz tablicę names zawierającą imiona. Znajdź pierwsze imię, które zaczyna się na literę "A". Posortuj tablicę alfabetycznie w kolejności rosnącej. */

const names = ["Kamil", "Anna", "Marek", "Alicja", "Bartek", "Tadzik", "Adam"];

const firstAName = names.find(name => name.startsWith("A"));

console.log("Pierwsze imię na 'A':", firstAName);

const sortedNames = [...names].sort();

console.log("Posortowane imiona:", sortedNames);