function quickSort(arr) {  
    if (arr.length <= 1) return arr; // Jeśli tablica ma 1 lub 0 elementów, jest już posortowana  
    const pivot = arr[Math.floor(arr.length / 2)]; // Wybieramy środkowy element jako pivot  
    const left = arr.filter(x => x < pivot); // Wszystkie mniejsze elementy idą do lewej części  
    const right = arr.filter(x => x > pivot); // Większe elementy idą do prawej części  
    const middle = arr.filter(x => x === pivot); // Elementy równe pivot zostają w środku  
    return [...quickSort(left), ...middle, ...quickSort(right)]; // Rekurencyjnie sortujemy lewe i prawe  
}

console.log(quickSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]