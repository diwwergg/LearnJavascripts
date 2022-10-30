// Create code by Mr.Thawatchai Buachan

function firstUppercase() {
    while (true) {
        let input = prompt("Enter a word");
        let resoult = input.toLowerCase();

        if (input.length === 0) {
            alert("Please enter a string")
        }else{
            let firstLetter = resoult.charAt(0).toUpperCase();
            alert("Hello, "+firstLetter + resoult.slice(1));
            break;
        }
    }
}