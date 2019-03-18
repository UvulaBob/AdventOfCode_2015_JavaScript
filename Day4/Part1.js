let input = "iwrupvqb";
let crypto = require('crypto');

let i = 0;
while (true) {
    let hash = crypto.createHash('md5').update(input + i).digest("hex");
    if (hash.substring(0, 5) === "00000") {
        break;
    } else {
        i++;
    }
}

console.log(i);



