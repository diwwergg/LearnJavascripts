// Who is paying today ? 
// Path: scripts\WhoIsPayingToday.js
// another: Mr. Thawatchai B.



function whoIsPayingToday(listName) {
    const randomIndex = Math.floor(Math.random() * listName.length);
    const guestName = listName[randomIndex];
    return guestName;

}

function runWhoIsPayingToday() {
    const guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason", "Stave Job","Diw", "A.ork", "Micle"];
    console.log(guestList);
    const guestName = whoIsPayingToday(guestList);
    console.log(`Random awser is ${guestName}`);
    alert(guestName + "is pay for our lunch today !");
}