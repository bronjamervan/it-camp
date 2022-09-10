// ispitati da li jevrednost koju unosi korisnik TRUTY ili FLASY.

const korisnik = +prompt("unesi neku vrednost")


function truthyOrFalsy () {
    if (korisnik) {
        return "ova vrednost je truthy"
    } else {
        return "ova vrednost je falsy"      // <---- treba da se poveze sa html-om da bi radio zadatak       
    }
}

console.log(truthyOrFalsy())



