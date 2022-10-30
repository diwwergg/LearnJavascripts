// Love calculator
// another : Mr. Thawatchai Buachan


function loveCalculator() {
    let name1 = prompt("Enter your name");
    let name2 = prompt("Enter your crush name");
    let loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;
    if (name1.length === 0 || name2.length === 0) {
        alert("Please enter a name");
    } else {
        alert(`${name1} & ${name2} love score is ${loveScore}%`);
    }
}