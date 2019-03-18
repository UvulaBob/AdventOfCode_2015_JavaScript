let fs = require('fs');
let textFileContents = fs.readFileSync('input.txt').toString();
let lines = textFileContents.split("\r\n");

let niceLineCount = 0;

for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    let line = lines[lineIndex];
    
    let pairAppearsTwice = false;
    for (let letterIndex = 0; letterIndex < line.length - 1; letterIndex++) {
        let pair = line.substring(letterIndex, letterIndex + 2);
        let pattern = new RegExp(pair, "g");
        let result = line.match(pattern);
        if (result.length > 1) {
            pairAppearsTwice = true;
            break;
        }
    }
    
    if (!pairAppearsTwice) {
        continue;
    }

    for (let letterIndex = 0; letterIndex < line.length - 2; letterIndex++) {
        let letter = line.substring(letterIndex);
        let trio = letter + "." + letter;
        let pattern = new RegExp(trio, "g");
        let result = line.match(pattern);
        if (result != null) {
            niceLineCount++;
            break;
        }
    }
}

console.log(niceLineCount);
