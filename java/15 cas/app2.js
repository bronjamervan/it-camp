//  trim() metoda brise sve bespotrebne razmake na pocetku i kraju stringa

let recenica =  "   Neka dugacka recenica.   "

console.log(recenica)
let skracenaRecenica = recenica.trim()
console.log(skracenaRecenica)
console.log(skracenaRecenica.length)

// postoje 3 metode za ekstraktovanje stringova:

// 1. charAt(position)
// 2. charCodeAt(position)
// 3. pristupanje preko []

console.log(skracenaRecenica.charAt(13));
console.log(skracenaRecenica.charCodeAt(13));
console.log(skracenaRecenica[13]);

// pristupanje ne postojecem indeksu se odrzava razlicito u zavisnosti od toga da li koristimo 
// metodu charAt() ili pristupamo preko []
console.log(skracenaRecenica.charAt(126)); // vraca prazan string
console.log(skracenaRecenica[126]);        // vraca undefined










