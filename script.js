var names = ["Hima", "Sharmi", "Jyothi", "Manoj", "Pavan", "Frank", "Bhanu", "Krishna", "Priya", "Jim"];
for (var i = 0; i < names.length; i++) {
if (names[i].chartAt(0) === 'J' || names[i].chartAt(0) === 'j') {
    console.log("GoodBye"+names[i])
}
    else {
        console.log("Hello"+names[i])
   }
}



