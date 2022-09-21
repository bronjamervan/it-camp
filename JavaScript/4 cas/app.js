// za interakciju sa korisnikom se koristi poseban metod imena prompt()

const ime = prompt ("Unesite vase ime:")
console.log(ime);

let broj_Godine = prompt ("Unesite broj godina:");
console.log(broj_Godine);
console.log(typeof broj_Godine)
//Neki string mozemo prevesti u nubmer na sledeci nacin
// 1. nacin
broj_Godine =  +broj_Godine  //preko oznake + ce  se izvrsiti konverzija u nubmer tip podatka
console.log(typeof broj_Godine)
// 2. nacin
broj_Godine = Number (broj_Godine)

let brojGodine = Number(prompt("Unesite broj godina:"));
console.log(brojGodine)