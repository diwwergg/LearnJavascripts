// get input from alert box and check length By Mr.Thawatchai Buachan
function textLength(){
    while (true) {
        let input = prompt("Enter a word not more than 140 characters");
        let length = input.length;
    
        // check if input is more than 140 characters
        if (length === 0) {
            alert("Please enter a string")
        } else if (length > 140) {
            alert("Your input is more than 140 characters");
        } else {
            alert("You've used all " + length + " characters, and you still have " + (140 - length) + " characters left.");
            break;
        }
    }
}
