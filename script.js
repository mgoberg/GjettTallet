'use strict';
// ######### SCRIPT #########
// Konstanter
let number = Math.trunc(Math.random() * 20) + 1;
let trekk = 10;
let beste = 0;
// Funksjon for å registrere klikkevent
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // If statements
  if (!guess) {
    document.querySelector('.message').textContent = 'Skriv inn et tall!';
    //Hvis tallet er for høyt
  } else if (guess > number) {
    if (trekk > 1) {
      document.querySelector('.message').textContent =
        'For høyt! Prøv et lavere tall...';
      trekk--;
      document.querySelector('.score').textContent = trekk;
    } else {
      document.querySelector('.message').textContent = 'Du tapte!';
      document.querySelector('.score').textContent = 0;
    }
    // Hvis tallet er for lavt
  } else if (guess < number) {
    if (trekk > 1) {
      document.querySelector('.message').textContent =
        'For lavt! Prøv et høyere tall...';
      trekk--;
      document.querySelector('.score').textContent = trekk;
    } else {
      document.querySelector('.message').textContent = 'Du tapte!';
      document.querySelector('.score').textContent = 0;
      document.body.style.backgroundColor = 'Brown';
    }
    // Hvis riktig tall
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Riktig tall!';
    document.querySelector('.number').textContent = number;
    document.body.style.backgroundColor = 'MediumSeaGreen';
    document.querySelector('.number').textContent;
    document.querySelector('.number').style.width = '30rem';
    if (trekk > beste) {
      beste = trekk;
      document.querySelector('.highscore').textContent = beste;
    }
  }
});

//Prøv igjen knappen
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Gjett et tall!';
  document.querySelector('.number').textContent = '?';
  document.body.style.backgroundColor = '#222';
  trekk = 10;
  document.querySelector('.score').textContent = trekk;
  number = Math.trunc(Math.random() * 20) + 1;
});
