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


// DRY don't repeat yoursafle

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


function povrsinaUzimaDveVrednosti(prvaVrednost, drugaVrednost) {
    if (prvaVrednost === drugaVrednost) {
        return "Povrsina kvadrata iznosi " + prvaVrednost *drugaVrednost;
    } else {
        return "Povrsina pravogaunika iznosi " + prvaVrednost * drugaVrednost
    }
} 

console.log(povrsinaUzimaDveVrednosti(15,2));
console.log(povrsinaUzimaDveVrednosti(4 ,4));

// 2. nacin :

const myfunction = function () {
    // radnja koja se obavlja
}

// napraviti funkciju koja vraca zbir kvadrata dva broja.
// druga vrednost je po difoltu 1.
// I nacin
const mySecondFunction = function (prva, druga) {
    if (druga === undefined) {
        return prva**2 + 1;
    } else {
        return  prva**2 + druga**2;
    }

}
console.log(mySecondFunction(5));
console.log(mySecondFunction(5 , 4));

// II nacin
const mySecondFunction2 = function (prva, druga=1) {
    return prva**2 + druga**2
}

console.log(mySecondFunction2(3))
console.log(mySecondFunction2(3 , 3))

// Ako neka funkcija ima defaultnu vrednost, ta vrednost se stavlja na poslednjem mestu,
// ako ih je vise, na poslednjim pozicijama.
// ne sme se desiti slucaj da prva vrednost bude defaultna a nakon nje ona koja nema
// defaultna vrednost.

// arrow function:

const arrowFunc = () => {
    //kod za izvrsavanje
}


// Napraviti arrow funkciju koja na osnovu unetog argumenta vraca jedno od tri stanja
// ako je unet pozitivan broj, ispisuje poruku "ARGUMENT JE POZITIVAN BROJ"
// ako je unet negativan broj, ispisuje poruku "ARGUMENT JE NEGATIVAN BROJ"
// ako je uneta nula, ispiuje sporuku "ARGUMENT JE NULA"
// Ako nije unet broj, ispisuje poruku "ARGUMENT NIJE UNET"

const arrowFunc2 = (nekiBroj) => {
    if (nekiBroj<0) {
        return "broj je negativan"
    } else if  (nekiBroj>0) {
        return "broj je pozitivan"
    } else if (nekiBroj===0) {
        return "broj je jednak nuli"
    } else {
        return "argument nije broj"
    }
}

console.log(arrowFunc2(-5))
console.log(arrowFunc2(5))
console.log(arrowFunc2(0))


const treciZadatak= function (recenica2)  {
    let recenica3 = " "
    for (i = 0; i<= recenica2.length; i++) {
        if(recenica2[i] === "a" || 
        recenica2[i] === "e" || 
        recenica2[i] === "i" || 
        recenica2[i] === "o" || 
        recenica2[i] === " u"){
            recenica3 += recenica2[i].toUpperCase();
        } else if (i === recenica2.length){
            return recenica3 += ".";
        }else {
            recenica3 += recenica2[i];
    }
}
    return recenica3;
}

console.log(treciZadatak("Pocela je nova skolska godina"));
// console.log(recenica2)













// const hasan =  (mervan, merdan) => {
//     if (merdan < mervan ) {
//         return "Merdan je mladji od mervana"
//     } else if ( merdan > mervan) {
//         return "Mervan je starirji od merdana"
//     } else {
//         return "unesite pravu vrednost"
//     }
// }

// console.log(hasan(18, 15))
// console.log(hasan(15, 18))
