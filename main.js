/*parole dinamiche*/

var words = ['Personal Trainer', 'Wellness', 'Start-Up', 'Chinesiologia', 'Finance','Software development'];
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

