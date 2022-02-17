// DECISION MAKING EXERCISE

let randomNum = Math.random();
randomNum *= 5;
randomNum ++;
randomNum = Math.floor(randomNum);
console.log(randomNum);

// OR
// let randomNum = Math.floor(Math.random() * 5 + 1);

if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
} else if (randomNum === 2 || randomNum === 3) {
    console.log("Equal to 2 or 3");
} else {
    console.log("Equal to 1");
}

if (randomNum != 3) {
    console.log("Not equal to 3");
}

if (randomNum != 3 && randomNum != 5) {
    console.log("Not equal to 3 AND not equal to 5");
}

if (randomNum == 2 || randomNum == 4) {
    console.log("Equal to 2 OR equal to 4");
}

randomNum >= 4 ? console.log("Greater than or equal to 4") : console.log("Less than 4");
// console.log(randomNum >= 4 ? "Greater than or equal to 4" : "Less than 4");

// Switch Statements takes a parameter/argument and returns something based in the CASE (or the mach) that the parameter/argument goes with.
switch (randomNum) {
    case 1:
        console.log("One");
        // Break keywords are needed between each case so that the code for the case that follows does NOT also run
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
}