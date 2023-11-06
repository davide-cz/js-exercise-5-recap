//Rovescia parola
/*
function revert(word) {
  let string = "";
  for (let i = word.length - 1; i >= 0; i--) {
    let string1 = word[i];
    string +=   string1;
  }
  return alert(`${string}`);
}

userWord = prompt("inserisci una parola da rovesciare");
revert(userWord);
*/

//function che somma array di stringhe
//prompt con n=numero di stringhe da concatenare
//alert result
/*
loremArray = [
  "lorem ",
  "ipsum ",
  "dolor ",
  "sir ",
  "amet ",
  "consectetur ",
  "adipisicing ",
  "elit ",
  "nobis ",
  "et? ",
];

function mergeLorem(numberOfWord) {
  let strings = "";
  for (i = 0; i < Number(numberOfWord); i++) {
    word = loremArray[i];
    strings += word;
  }
  return alert(`${strings}`);
}

request = Number(prompt("quante parole vuoi concatenare?"));
mergeLorem(request);

*/

//dieci numeri scelti dall'user
/* 
function doubleNumber(userNumber) {
  let response = Number(userNumber) * 2;
  return alert(`${response}`);
}

alert("inserisci 10 numeri e verrà calcolato il loro doppio");

number1 = Number(prompt("inserisci il primo numero"));
number2 = Number(prompt("inserisci il secondo numero"));
number3 = Number(prompt("inserisci il terzo numero"));
number4 = Number(prompt("inserisci il quartonumero"));
number5 = Number(prompt("inserisci il quinto numero"));
number6 = Number(prompt("inserisci il sesto numero"));
number7 = Number(prompt("inserisci il settimo numero"));
number8 = Number(prompt("inserisci l ottavo numero"));
number9 = Number(prompt("inserisci nono numero"));
number10 = Number(prompt("inserisci decimo numero"));

response1 = doubleNumber(number1);
response2 = doubleNumber(number2);
response3 = doubleNumber(number3);
response4 = doubleNumber(number4);
response5 = doubleNumber(number5);
response6 = doubleNumber(number6);
response7 = doubleNumber(number7);
response8 = doubleNumber(number8);
response9 = doubleNumber(number9);
response10 = doubleNumber(number10);

 */
//function che trasforma in maiuscolo o minuscolo
/*
function UpperLowerCase(userString) {
  //let userString = prompt(`inserisci una stringa`);
  let userString;
  let userStringNew;
  let request = prompt(
    `scegli se trasformare una parola in maiuscolo o minuscolo`
  );
  if ((request = `maiuscolo`)) {
    userStringNew = userString.toUpperCase();
  }
  if ((request = `minuscolo`)) {
    userStringNew = userString.toLowerCase();
  }
  return alert(`${userStringNew}`);
}
*/

/*
let arrayAlpha = [];

let alphabethString = "abcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < 26; i++) {
  let letter = alphabethString[i];
  let randomizerLetter = Math.round(Math.random());
  if (randomizerLetter === 0) {
    letter = letter.toUpperCase();
  } else {
    letter = letter.toLowerCase();
  }

  console.log(letter);
  arrayAlpha.push(letter);
}
console.log(arrayAlpha);
*/
//Lancio moneta
/*
function coinToss(numberOfTosses) {
  let player2Point = 0;
  let player1Point = 0;
  for (i = 0; i < numberOfTosses; i++) {
    choose = prompt(`scegli testa o croce`);
    let crossHead = Math.round(Math.random());
    console.log(crossHead);
    if (crossHead === 0) {
      result = `croce`;
    } else {
      result = `testa`;
    }
    console.log(result);

    if (choose == result) {
      player1Point++;

      alert(`hai vinto , hai ${player1Point} punti`);
    } else {
      player2Point++;
      alert(`hai perso, pc ha ${player2Point} punti `);
    }
  }
  return (punteggio = alert(`giocatore ha  ${player1Point} punti
  pc ha ${player2Point} punti `));
}
numberofmatch = Number(prompt(`quante partite vuoi fare?`));
coinToss(numberofmatch);
*/
//lancio del dado

/*
function diceToss() {
  let toss = Math.ceil(Math.random() * 6);
  return toss;
}
tossPlayer = alert(`lancia un dado`);
playerResult = Number(diceToss());
alert(`e' uscito ${playerResult}`);
tossPC = alert(`PC lancia un dado`);
PCResult = Number(diceToss());
alert(`e' uscito ${PCResult}`);

if (playerResult > PCResult) {
  alert(`giocatore 1 vince`);
} else {
  alert(`PC vince`);
}
*/
/*
function roulette() {
  let spin = Math.floor(Math.random() * 37);
  return spin;
}

alert(`la roulette ha iniziato a girare`);
alert(`scegli se scommettere su un numero oppure su pari o dispari`);
roulette();
let result = roulette();
let numberVar;
if (result % 2 === 0) {
  numberVar = `pari`;
}
if (result % 2 === 1) {
  numberVar = `dispari`;
}
console.log(numberVar);
console.log(result);
bet1 = prompt(`scegli pari o dispari?`);
//se pari o dispari
if (bet1 === `pari` || bet1 === `dispari`) {
  if (bet1 === `pari` && numberVar === `pari`) {
    alert(`hai vinto`);
  } else if (bet1 === `pari` && numberVar !== `pari`) {
    alert(`hai perso`);
  } else if (bet1 === `dispari` && numberVar === `dispari`) {
    alert(`hai vinto`);
  } else if (bet1 === `dispari` && numberVar !== `dispari`) {
    alert(`hai perso`);
  }
} else {
  bet2 = number(prompt(`scegli un numero da 0 a 36`));

  if (bet === numberVar) {
    alert(`hai vinto`);
  }
  if (bet !== numberVar) {
    alert(`hai perso`);
  }
}


*/
//Allo zoo
/* 
animalArray = [
  `nutria`,
  `pantegana`,
  `scarafaggione`,
  `salamandra`,
  `varano`,
  `carbonasso`,
  `siluro`,
];

function animal() {
  animalRequested = prompt(`che animale vuoi vedere?`);
  let animalName = animalRequested.toLowerCase();
  console.log(animalName);
  let animal;
  for (i = 0; i <= animalArray.length; i++) {
    console.log(i);
    animal = animalArray[i];
    if (animal === animalName) {
      alert(`è in fondo a destra`);
      break;
    }
  }
  if (i > animalArray.length) {
    alert(`non c'è mi dispiace`);
  }
  return alert(`adesso vai via'`);
}
animal(); */

/*
n = Number(prompt(`quanti numeri vuoi inserire?`));
nList = [];
for (i = 0; i < n; i++) {
  nx = Number(prompt(`inserisci un numero intero`));
  nList.push(nx);
}
nList.sort(function (a, b) {
  return b - a;
});
console.log(nList);
*/

let n = Number(prompt("quanti numeri vuoi inserire?"));
let numbers;
let correntNumber;
let numberArray = [];
let orderedNumber = [];

for (let i = 0; i < n; i++) {
  numbers = Number(prompt(`inserisci numero ${i}`));
  numberArray.push(numbers);
}

for (let i = 0; i < n; i++) {
  let minorNumber = Infinity;
  for (let j = 0; j < numberArray.length; j++) {
    correntNumber = numberArray[j];
    if (correntNumber < minorNumber) {
      minorNumber = correntNumber;
    }
    orderedNumber.push(minorNumber);
    indexToPop = numberArray.indexOf(minorNumber);
    numberArray.splice(indexToPop, 1);
  }
}
console.log(numberArray);
console.log(orderedNumber);
