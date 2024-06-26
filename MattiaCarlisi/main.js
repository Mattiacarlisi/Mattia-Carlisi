/*parole dinamiche*/

var words = ['Esercizio Terapia', 'Rieducazione Motoria', 'Personal Trainer', 'Ginnastica posturale'];
var counter = 0;
var word = document.getElementById("characteristics");
setInterval(update_characteristics, 1000);

function update_characteristics() {
    word.textContent = words[counter];
    counter++;
    if (counter >= words.length) {
        counter = 0;
    }
}


/*parole dinamiche del CV*/

var words = ['finance', 'start-up', 'wellness', 'web Developer'];
var counter = 0;
var word = document.getElementById("cvprofile");
setInterval(update_cvprofile, 1000);

function update_characteristics() {
    word.textContent = words[counter];
    counter++;
    if (counter >= words.length) {
        counter = 0;
    }
}


