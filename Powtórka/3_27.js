/* QUIZ Napisz funkcję, która przyjmie ciąg znaków i zwróci najczęściej występujący znak w tym ciągu. */
function mostFrequentChar(str) {
    const charCount = {};
    let maxChar = "", maxCount = 0;

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(mostFrequentChar("AAAAAKurcze"));
