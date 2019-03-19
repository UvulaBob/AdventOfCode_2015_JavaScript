let fs = require('fs');
let textFileContents = fs.readFileSync('input.txt').toString();
let lines = textFileContents.split("\r\n");

let grid = [];

for (let y = 0; y < 1000; y++) {
    grid[y] = [];
    for (let x = 0; x < 1000; x++) {
        grid[y][x] = 0;
    }
}

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    let reg = "(toggle|(?:turn (?:on|off))) (\\d+,\\d+) through (\\d+,\\d+)";
    let matches = line.match(reg);

    let operation = matches[1];
    let startPosition = matches[2];
    let startX= parseInt(startPosition.split(",")[0]);
    let startY = parseInt(startPosition.split(",")[1]);

    let endPosition = matches[3];
    let endX= parseInt(endPosition.split(",")[0]);
    let endY = parseInt(endPosition.split(",")[1]);

    switch (operation) {
        case "turn on":
            for (let y = startY; y <= endY; y++) {
                for (let x = startX; x <= endX; x++) {
                    grid[y][x]++;
                }
            }
            break;
        case "turn off":
            for (let y = startY; y <= endY; y++) {
                for (let x = startX; x <= endX; x++) {
                    grid[y][x]--;
                    if (grid[y][x] < 0 ) {
                        grid[y][x] = 0;
                    }
                }
            }
            break;
        case "toggle":
            for (let y = startY; y <= endY; y++) {
                for (let x = startX; x <= endX; x++) {
                    grid[y][x] += 2;
                }
            }
            break;
    }
}

let brightness= 0;
for (let y = 0; y < 1000; y++) {
    for (let x = 0; x < 1000; x++) {
        brightness += grid[y][x];
    }
}

console.log(brightness);
