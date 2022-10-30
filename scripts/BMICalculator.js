// bmi calculator
// another : Mr. Thawatchai Buachan


function bmiCalculator (weight, height) {
    height = height / 100;
    const bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}

function bmiPromptInput() {
    let weight = prompt("Enter your weight in kg");
    let height = prompt("Enter your height in cm");
    if (weight.length === 0 || height.length === 0) {
        alert("Please enter a number");
    } else {
    let bmi = bmiCalculator(weight, height);
    alert(`คุณมี BMI = ${bmi}`);
    }
}

