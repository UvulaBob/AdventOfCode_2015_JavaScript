let fs = require('fs');
let textFileContents = fs.readFileSync('input.txt').toString();
let textFileContentArray = textFileContents.split("\r\n");

let totalRibbon = 0;

for (let i = 0; i < textFileContentArray.length; i++) {
    let line = textFileContentArray[i];
    let splitLine = line.split("x");

    let length = parseInt(splitLine[0]);
    let width = parseInt(splitLine[1]);
    let height = parseInt(splitLine[2]);

    let sides = [length, width, height];

    sides.sort(function(a, b){return a - b});

    totalRibbon += sides[0];
    totalRibbon += sides[0];
    totalRibbon += sides[1];
    totalRibbon += sides[1];

    totalRibbon += length * width * height;
}

console.log(totalRibbon);

