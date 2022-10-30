// check guest list
// another: Mr. Thawatchai B.

const guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
function inputGuestName() {
    let guestName = prompt("Please enter your name");
    if (guestName === null) {
        return;
    }
    guestName = guestName.trim(); // remove whitespace
    if (guestName === "") {
        alert("Please enter a valid name");
        return;
    }
    if (guestList.includes(guestName)) {
        alert("Welcome!");
    } else {
        alert("You are not invited!");
    }
}