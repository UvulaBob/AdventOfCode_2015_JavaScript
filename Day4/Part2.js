let input = "iwrupvqb";
let crypto = require('crypto');

let i = 346387;
while (true) {
    let hash = crypto.createHash('md5').update(input + i).digest("hex");
    if (hash.substring(0, 6) === "000000") {
        break;
    } else {
        i++;
    }
}

console.log(i);



