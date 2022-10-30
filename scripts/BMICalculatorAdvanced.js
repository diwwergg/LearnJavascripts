// bmiPromptInputAdvanced 
// another Mr. Thawatchai Buachan

function bmiCalculator(weight, height) {
    height = height / 100;
    const bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}

function checkStatus(bmi) {
    if (bmi < 18.5) { return "So you are Underweight"; }
    else if (bmi >= 18.5 && bmi <= 24.9) { return "So you have a Normal weight"; }
    else if (bmi >= 25 && bmi <= 29.9) { return "So you are Overweight"; }
    else if (bmi >= 30) { return "So you are Obesity"; }
    else { return "NaN"; }
}

function bmiPromptInputAdvanced() {
    let weight = prompt("Enter your weight in kg");
    let height = prompt("Enter your height in cm");
    let status = "";
    if (weight.length === 0 || height.length === 0) {
        alert("Please enter a number");
    } else {
        let bmi = bmiCalculator(weight, height);
        status = checkStatus(bmi);
        alert(`Your BMI is ${bmi}, so ${status}`);
    }

}