let fs = require('fs');
let textFileContents = fs.readFileSync('input.txt').toString();
let textFileContentArray = textFileContents.split("");

let x = 0;
let y = 0;

const set = new Set(["0,0"]);

for (let i = 0; i < textFileContentArray.length; i++) {
    let character = textFileContentArray[i];

    switch(character) {
        case "^":
            y--;
            break;
        case "v":
            y++;
            break;
        case "<":
            x--;
            break;
        case ">":
            x++;
            break;

    }

    set.add(x + "," + y);
}

console.log(set.size);

