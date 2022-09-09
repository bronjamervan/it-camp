// TRUTHY AND FALSY VALUES

let isSanny = false;

// isSanny = true;

// if(isSanny === true) {
//     console.log("Napolju je suncano vreme.Ponesite naocare.")
// } else if (isSanny=== false) {
//     console.log("Napolju je oblacno vreme.")
// }


if (isSanny){
    console.log("Napolju je suncano vreme.Ponesite naocare.")
}  else if (isSanny=== false) {
    console.log("Napolju je oblacno vreme.")
}

// Sve FALSY vrednosti su:
// 1. false
// 2. 0
// 3. -0
// 4. 0n
// 5. ""
// 6. null
// 7. undifine d
// 8. NaN

// ispitati da li jevrednost koju unosi korisnik TRUTY ili FLASY.

const vrednost = +prompt("Unesi neku vrednost:")

function truthyOrFalsy () {
    if (vrednost) {
        return "uneli ste TRUTHY vrednost."
    }else {
        return "uneli ste falsy vrednost."
    }
}
console.log(truthyOrFalsy())