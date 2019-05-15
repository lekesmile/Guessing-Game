// arvotaan arvattava numero väliltä 0-100, 0 ja sata myös mahdollisia
var arvattava = Math.floor(Math.random() * (100 + 1));

// debug-tulostus kehittäjälle, kommentoi pois tuotantoversiosta
console.log("Arvattava: " + arvattava);

// muuttuja pelaajan nykyistä arvausta varten
// alkuarvo on undefined, jotta erotetaan, onko tehty yhtään arvausta
// vai ei
var arvaus = undefined;
var alempi = document.getElementById('alempi');
var ylempi = document.getElementById('ylempi');
var vihje = document.getElementById('vihje');
var numerot = document.getElementById('numerot');
var arvauslaskin = document.getElementById('arvauslaskin');
var upperBar = document.getElementById('upper-bar');
var lowerBar = document.getElementById('lower-bar');
var middleBar = document.getElementById('middle-bar');
var parasAlin = 0;
var parasYlin = 100;
var count = 0;
var gameover = 8;
var arrayresults = [];


// Event-käsittelijä lomakkeelle
//
function arvausTehty() {
  // haetaan käyttäjän syöttämä arvo ja tulkitaan se numeroksi
  var syote = document.getElementById('luku').value;


  arvaus = Number(syote);
  console.log("Arvaus: " + arvaus);

  // tyhjennetään lomake uutta arvausta varten
  document.getElementById('lomake').reset();


  count += 1;
  arvauslaskin.innerHTML = "Your " + count + " try";

  while (isNaN(arvaus)) {
    alert("Please insert a number");
    break;
}

  if (arvaus < arvattava) {
    alempi.innerHTML = "The number you entered is lower than the guess number " + arvaus;
    if (arvaus > parasAlin) {
      parasAlin = arvaus;

      // to change the color
      document.getElementById("lower-bar").style.width = arvaus;
    }
  } else if (arvaus > arvattava) {
    ylempi.innerHTML = "The number you entered is higher than the guess number " + arvaus;
    if (arvaus < parasYlin) {
      parasYlin = arvaus;
    }
  } else if (arvaus === arvattava){

    numerot.innerHTML = "Oikean, you have won the Game." + arvaus + " was the right number "  + "<br>" + " The number you entered are " + arrayresults;
    //Play a sound after the game is won
    var audio = new Audio('Clap.mp3');
    audio.play();

    endGame();

    // This stops the user from clicking the arvaa botton
    document.getElementById("arvaa").disabled = true;
  }

  if (count > gameover) {
    alert("Game Over");
    endGame();
    return false;

}
//end the game function
 function endGame(){
 document.getElementById("luku").disabled = true;
 document.getElementById("arvaa").disabled = true;

  }

// This array store what user as entered
  arrayresults.push(arvaus);

// This doesnt change the value of the random number
  return false;
}

// asetetaan tapahtumankäsittelijä lomakkeelle, siis määritellään,
// mitä funktiota kutsutaan, kun lomake lähetetään
document.getElementById('lomake').onsubmit = arvausTehty;

document.getElementById('resetbutton').addEventListener('click', function () {
  location.reload();
});
