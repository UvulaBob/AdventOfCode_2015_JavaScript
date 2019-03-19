let fs = require('fs');
let textFileContents = fs.readFileSync('input.txt').toString();

let textFileContentArray = textFileContents.split("");

let position = 0;

for (let i = 0; i < textFileContentArray.length; i++) {
    let character = textFileContentArray[i];
    if (character === ")") {
        floor-- ;
    } else {
        floor++;
    }

    if (floor === -1) {
        break;
    } else {
        position++;
    }
}

console.log(position);