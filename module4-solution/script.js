(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    (function (window) {
         var helloSpeaker = {};
          var speakWord = "Hello";
          helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }
    window.helloSpeaker = helloSpeaker;

})(window);

(function (window) {
    var byeSpeaker = {};
    var speakWord = "Good Bye";
 byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }
     window.byeSpeaker = byeSpeaker;

})(window);

   
for (var name in names) {
    var firstLetter = names[name].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
            byeSpeaker.speak(names[name]);
        } else {
            helloSpeaker.speak(names[name]);
        }
    }
})();