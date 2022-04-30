var userChoice = prompt("Heads or tails?");
  var randomNumber = Math.round(Math.random());
 if (randomNumber == 0) {
 var computerChoice = "heads";
 } else {
 var computerChoice = "tails";
 } 
 if (userChoice == computerChoice) {
 alert("You guessed right! The coin flip landed on " + computerChoice);
 } else {
 alert("Sorry, the coin flip landed on " + computerChoice);
 }
 
 var birthYear = prompt("What year were you born?");
 var currentDate = new Date();
 var currentYear = currentDate.getFullYear();
 var age = currentYear - birthYear;

 if (age > 21) {
 alert("You are old enough to drink in the US");
 } else if (age == 21) {
 alert("You are old enough to drink in the US...barely");
 } else {
 alert("Sorry, you are not old enough to drink in the US");
 }


