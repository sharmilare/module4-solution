// Function to greet a name
function greet(name) {
    // Check if the name starts with 'J' or 'j'
    if (name.charAt(0).toLowerCase() === 'j') {
        return "Good Bye " + name;
    } else {
        return "Hello " + name;
    }
}

// Function to iterate through an array of names and print greetings
function greetAll(namesArray) {
    // Loop through each name in the array
    for (var i = 0; i < namesArray.length; i++) {
        // Print the greeting using the greet function
        console.log(greet(namesArray[i]));
    }
}

// Existing array of names
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Call the greetAll function with the names array
greetAll(names);
