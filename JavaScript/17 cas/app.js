// startsWith () metoda nam vreca boolean u zavisnosti od toga da li dati string pocinje recju
// koja je smestena argument metode :

let recenica = "Provera stringova.";
console.log(recenica.startsWith("provera"));


// emdsWith() metoda nam vraca boolean u zavisnosti od toga da li dati string zavrsava recju 
// koja je smestena kao argument metode:

console.log(recenica.endsWith("ingova."));


// JavaScript TEMPLATE LITERALS
// Back-Ticks  ``
// Prva prednost u odnosu na "" je sto pisanje navodnika unutar stringa nece vratiti gresku

let recenica2 = `Danas je bilo pravo "jesenje" vreme.`  

// Omoguceno je pisanje stringa u vise redova

let recenica3 = `Has there ever been a player who got more proximate to some formal ideal of tennis,
who pursued its possibility for transcendent beauty with greater effect and results, than Roger Federer?
On Thursday, he announced that he was retiring from the tour, after one last event, later this month.
It was not a shock; he is forty-one years old, has not played in fourteen months, and did not play much at
all in 2020 or 2021, as he struggled with knee injuries that required surgery. “Ive worked hard to return 
to full competitive form,” he said in a video he posted on Twitter. “But I also know my bodys capacities and 
limits, and its message to me lately has been clear.” He will play in London next week .`


// Interpolacija, odnosno mozemo zapisivati string u kombinaciji sa varijablama.

let a = 10;
let b = 14;
let c = `Prva vrednost je ${a}, druga vrednost je: ${b}.`;
console.log(c)


// napraviti funkciju koja pretvara inche u cm

function inchToCm(inche)  {
    return `Broj centimetara za unete inche iznosi ${inche * 2.54}`;

}
console.log(inchToCm(40))


const kmToM = function(km) {
    return `Broj metara koji odgovara unetim kilometrima je ${km*1000}`;
}

console.log(kmToM(3))








