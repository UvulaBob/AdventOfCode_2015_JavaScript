let fs = require('fs');
let textFileContents = fs.readFileSync('input.txt').toString();
let instructions = textFileContents.split("\r\n");
let wires = {};

for (let i = 0; i < instructions.length; i++) {
    let instruction = instructions[i];
    let splitInstruction = instruction.split(" -> ");
    wires[splitInstruction[1]] = splitInstruction[0];
}

console.log(findValueOfWire("a"));
console.log("Done!");

function findValueOfWire(wire) {
    let wireValue = parseInt(wire);
    if (isNaN(wireValue)) {
        wireValue = wires[wire];
    } else {
        return wireValue;
    }
    
    if (isNaN(wireValue)) {
        let result = doInstruction(wireValue);
        wires[wire] = result;
        return result;
    }
    
    return wireValue;
}

function doInstruction(instruction) {
    let splitInstruction = instruction.split(" ");
    if (splitInstruction.length === 1) {
        return findValueOfWire(splitInstruction[0]);
    }
    
    if (splitInstruction.length === 2) {
        let operand = parseInt(splitInstruction[1]);
        if (isNaN(operand)) {
            operand = findValueOfWire(splitInstruction[1]);
        }
        return ~operand & 65535
    }
    
    let operation = splitInstruction[1];
    let firstValue = findValueOfWire(splitInstruction[0]);
    let secondValue = findValueOfWire(splitInstruction[2]);
    
    switch (operation) {
        case "AND":
            return firstValue & secondValue;
        case "OR":
            return firstValue | secondValue;
        case "LSHIFT":
            return firstValue << secondValue;
        default:
            return firstValue >> secondValue;
    }
}


