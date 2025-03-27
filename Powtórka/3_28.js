/* QUIZ Napisz funkcję rekurencyjną, która odwróci podane drzewo binarne. */
function invertTree(node) {  
    if (!node) return null;  // Jeśli węzeł jest pusty, nic nie robimy
    [node.left, node.right] = [invertTree(node.right), invertTree(node.left)]; // Zamieniamy lewe i prawe dziecko
    return node; // Zwracamy odwrócone drzewo
}

let tree = {  
    value: 1,  
    left: { value: 2, left: null, right: null },  
    right: { value: 3, left: null, right: null }  
};  
console.log(invertTree(tree));