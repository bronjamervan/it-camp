// STO SE TICE  extra velikih ili malih slova oni mogu biti zapisani koriscenjem exponent oznake
let x = 123000000
console.log(x)
let x2 = 123e6; // 123 * 1 000 000
console.log(x2)

let y = 123e-6; // 123 /1 000 000
console.log(y)


// Dodavanje brojeva stringovima i obratno:

console.log(18+"45")
console.log("63" + 44)
console.log("sd" + 32)
console.log("401s" - 46)
console.log(85 / "78a")
console.log(47 - "27")
console.log("lk" * 45)
console.log(22 - "33")
console.log(76 - "67")


// NaN Not a Number

// NaN je JavaScript rezervisana rec koja ukazuje da broj zapravo nije legalan broj

// Ako ispitamo tip NaN rezultat dobijamo number



console.log("lk" * 45);
console.log(typeof("lk" * 45));

// postoji metoda za proveru da li je neka vrednost NaN (BROJ KOJI NIJE KOREKTAN)
// U PITANJU je isNaN()

console.log(isNaN(67+"88"));

console.log(isNaN(100/"Apple"))

// Infinity
// Infinity (-Infinity) je vrednost kada za rezultat dobijemo broj koji je van granica 
// maksimalnog broja prema racunanju u JavaScriptu

console.log(20/0)

console.log(-1/0)

// Heksadecimalni brojevi

// JavaScript intrepretira constante kao heksadecimalne ako im je prefiks 0x

let prom = 0xFF
console.log(prom)

// brojevi kao objekti

let broj = new Number(14)
console.log(broj)

console.log (broj + 7)
console.log(typeof broj);

let broj2 = 10

const zadatak = function() {
    const satnica = +prompt("unesi satnicu:");
    const minutnica = +prompt("unesi minutnicu");
    if (isNaN(satnica) || isNaN(minutnica)) {
        return `satnica i minutnica moraju biti brojevi.`
    } else if (satnica < 0  || satnica > 23) {
        return `nije uneta korektna vrednost za satnicu`
    }else if (minutnica < 0  || minutnica > 59) {
        return `nije uneta korektna vrednost za minutnicu`
    } else if (satnica < 9 || satnica > 16) {
        return `Ne`
    } else {
        return `Da`
    }
}


console.log(zadatak())

















































