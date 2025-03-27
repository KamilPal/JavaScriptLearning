/* Napisz program, który utworzy obiekt z danymi użytkownika (name, age, email), a następnie za pomocą for...in wyświetli wszystkie klucze i wartości. */
const user = {
    name: "Jan Kowalski",
    age: 30,
    email: "jan.kowalski@xd.com"
};

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}