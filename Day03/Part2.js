let fs = require('fs');
let textFileContents = fs.readFileSync('input.txt').toString();
let textFileContentArray = textFileContents.split("");

let santaX = 0;
let santaY = 0;

let roboSantaX = 0;
let roboSantaY = 0;

const set = new Set(["0,0"]);

let santaTurn = true;

for (let i = 0; i < textFileContentArray.length; i++) {
    let character = textFileContentArray[i];

    switch(character) {
        case "^":
            if (santaTurn) {
                santaY--;
            } else {
                roboSantaY--;
            }
            break;
        case "v":
            if (santaTurn) {
                santaY++;
            } else {
                roboSantaY++;
            }
            break;
        case "<":
            if (santaTurn) {
                santaX--;
            } else {
                roboSantaX--;
            }
            break;
        case ">":
            if (santaTurn) {
                santaX++;
            } else {
                roboSantaX++;
            }
            break;
    }

    if (santaTurn) {
        set.add(santaX + "," + santaY);
    } else {
        set.add(roboSantaX + "," + roboSantaY)
    }

    santaTurn = !santaTurn;
}

console.log(set.size);

