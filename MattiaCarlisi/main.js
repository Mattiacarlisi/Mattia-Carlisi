/*parole dinamiche*/

document.addEventListener("DOMContentLoaded", function() {
    var words = ['Esercizio Terapia', 'Rieducazione Motoria', 'Personal Trainer', 'Ginnastica posturale'];
    var counter = 0;
    var word = document.getElementById("one");

    if (word) {
        setInterval(update_one, 1000);
    } else {
        console.error("Element with id 'one' not found.");
    }

    function update_one() {
        word.textContent = words[counter];
        counter++;
        if (counter >= words.length) {
            counter = 0;
        }
    }
});

/*parole dinamiche del CV*/

document.addEventListener("DOMContentLoaded", function() {
    var words = ['finance', 'Start-up', 'wellness', 'web Developer'];
    var counter = 0;
    var word = document.getElementById("cvprofile");

    if (word) {
        setInterval(update_cvprofile, 1000);
    } else {
        console.error("Element with id 'cvprofile' not found.");
    }

    function update_cvprofile() {
        word.textContent = words[counter];
        counter++;
        if (counter >= words.length) {
            counter = 0;
        }
    }
});
