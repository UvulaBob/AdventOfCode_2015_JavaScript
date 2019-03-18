let fs = require('fs');
let textFileContents = fs.readFileSync('input.txt').toString();
let textFileContentArray = textFileContents.split("\r\n");

let totalPaper = 0;

for (let i = 0; i < textFileContentArray.length; i++) {
    let line = textFileContentArray[i];
    let splitLine = line.split("x");

    let length = parseInt(splitLine[0]);
    let width = parseInt(splitLine[1]);
    let height = parseInt(splitLine[2]);

    let sideOne = (length * width);
    let sideTwo= (length * height);
    let sideThree = (height* width);

    totalPaper += (2 * sideOne) + (2 * sideTwo) + (2 * sideThree);

    let sides = [sideOne, sideTwo, sideThree];

    sides.sort(function(a, b){return a - b});

    totalPaper += sides[0];
}

console.log(totalPaper);

