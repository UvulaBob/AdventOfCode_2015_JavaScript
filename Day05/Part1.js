let fs = require('fs');
let textFileContents = fs.readFileSync('input.txt').toString();
let lines = textFileContents.split("\r\n");

let niceLineCount = 0;

for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    let line = lines[lineIndex];
    let containsBadPair = false;
    const badPairs = ["ab", "cd", "pq", "xy"];
    for (let badPairIndex = 0; badPairIndex  < badPairs.length; badPairIndex++) {
        let badPair = badPairs[badPairIndex];
        if (line.includes(badPair)) {
            containsBadPair = true;
            break;
        }
    }
    
    if (containsBadPair) {
        continue;
    }

    let vowelCount = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
        let vowel = vowels[vowelIndex];
        let splitLine = line.split(vowel);
        vowelCount += splitLine.length - 1;
        if (vowelCount > 2) {
            break;
        }
    }
    
    if (vowelCount < 3) {
        continue;
    }
    
    let containsGoodPair = false;
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    for (let letterIndex = 0; letterIndex < alphabet.length; letterIndex++) {
        let letter = alphabet[letterIndex];
        if (line.includes(letter + letter)) {
            containsGoodPair = true;
            break;
        }
    }
    
    if (containsGoodPair) {
        niceLineCount++;
    }
}

console.log(niceLineCount);
