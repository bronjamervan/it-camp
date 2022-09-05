// let recenica = "Nakon danasnjeg testa cemo znati ko ce dalje"

// let recenica2 = " ";

// for (i = 0; i < recenica.length; i++ ) {
//     if(recenica[i] === "a" || recenica[i] === "e" || recenica[i] === "i" || recenica[i] === "o" || recenica[i] === " u"){
//         recenica2 += recenica[i].toUpperCase();
//     } else if (i === recenica.length){
//         recenica2 += ".";
//     }else {
//         recenica2 += recenica[i];
//     }
// }

// console.log(recenica2);


//    FUNKCIJE


// Funkcije predstavljaju blok koda koji se izvrsava samo prilikom pozivanja.

// Nacini zapisivanja funkcija:

// Koriscenjem keyword (rezervisane reci)  function

let prom = 25

function nazivFunkcije () {
    return 5;

}

console.log(nazivFunkcije());
//drugi primer

function zbirTriIPet() {
    return 3 + 5;
}

console.log(zbirTriIPet());


//treci primer
// prilikom definisanja funkcije u zagradu stavljamo (prema potrebi) parametre
// koje funkcija koristi unetar sebe.
function zbirDvaBroja(prviBroj, drugiBroj){
    return prviBroj + drugiBroj;
}
// Prilikom pozivanja funkcije u zagradi stavljamo argumente na osnovu kojih se funkcija izvrsava.
console.log(zbirDvaBroja(5, 14));