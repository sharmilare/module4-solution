function () {

var names = ["Hima", "Sharmi", "Jyothi", "Manoj", "Pavan", "Frank", "Bhanu", "Krishna", "Priya", "Jim"];
for (var i = 0; i < names.length; i++) {
if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
