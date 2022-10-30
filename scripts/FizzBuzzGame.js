// Fizz Buzz Game
// Another: Mr. Thawatchai B.

let listOutput = [];
let number = 1;
function fizzBuzz(){
    let limit = number + 10;
    while (number <= limit) {
        let output = "";
        // check if the number is divisible by 3
        if (number % 3 === 0) {
            output += "Fizz";
        }
        // check if the number is divisible by 5
        if (number % 5 === 0) {
            output += "Buzz";
        }
        // if the number is not divisible by 3 or 5, push the number
        if (output === "") { output = number;  }
        listOutput.push(output);
        number += 1;
    }
    console.log(listOutput);
}

function clearFizzBuzz(){
    listOutput = [];
    number = 1;
    console.log(listOutput);
}