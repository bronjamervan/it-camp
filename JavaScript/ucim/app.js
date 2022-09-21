// let x =Number(prompt("UNESI BROJ"))
// let y = 1
// if (isNaN (x)) {
//     console.log("Niste uneli broj")
// } 
// while (y<=x) {
//     console.log(y**2)
//     y++
// }

// let m = Number(prompt("Unesi prvi broj:"))
// let n = Number(prompt("Unesi drugi broj:"))

// if (isNaN(m) || isNaN(n)) {
//     console.log("Niste uneli prave vrednosti.")
// } else if (m === n) {
//     console.log("Uneli ste iste brojeve, molim vas unesite razlicite brojeve.")
// } else if (m<n){
//     while (m<=n){
//         console.log(m)
//         m++
//     }
// }
// else if (m>n){
//     while (m>=n){
//         console.log(n)
//         n++
//     }
// }


// i = 1
// do {
//     console.log(i)
//     i++
// } while ( i <= 5)

// let m =25
// do {
//     console.log(m**2)
//     m++
// } while ( m < 10)

//napisati program koji proverava da li je uneti broj od strane korisnika paran ili neparan i ispisuje odgovarajucu poruku.


const brojParni = Number(prompt("unesi paran broj:"))

if (brojParni % 2 === 0){
    console.log("broj je paran")
} else if (brojParni % 2 === 1){
    console.log("broje je neparan")
}else {
    console.log("niste uneli paran broj")
}

// Na osnovnu unetih godina ispisati u konzoli sledece:
//ako je broj godina manji od 12: Vi ste decijeg doba.
//ako je broj godina izmedju 12-18: Vi ste maloletni.
//ako je broj godina izmedju 18(ukljucuje ) i 40(ne ukljucuje): Vi ste punoletni.
//ako je broj godina veci ili jednak od 40: vi ste zrela osoba.
//ako korisnik nije uneo broj: Niste uneli broj godina

const godine = Number(prompt("Unesite broj godina:"))

if (godine > 0 && godine <12) {
    console.log("vi ste decijeg doba")
} else if (godine > 12 && godine < 18) {
    console.log("vi ste maloletni")
} else if (godine > 18 && godine < 40) {
    console.log("vi ste odrasla osoba")
} else if (godine > 40 ){
    console.log("vi ste stara osoba")
}else {
    console.log ("unesi broj godina")
}










//napisati program koji ako je uneti broj  veci od 0  stampa poruku broj je pozitivan,
// u suprotnom broj je negativan.

const asd = Number (prompt("unesi pozitivan broj"))

if (asd > 0) {
    console.log("broj je paran")
} else if (asd === 0) {
    console.log("broj je jednak nuli")
} else if (asd < 0){
    console.log("broj je negativan")
} else {
    console.log ("unesite broj")
}




//korisnik unosi dva realna broja x i y.
//napisati program koji izracunava i stampa
//kolicnik x/y ako je broj y razlicit od nule, 
//a inace ispisuje poruku: deljenje nemoguce.


const x = Number(prompt("Unesite prvi broj: "));
const y= Number(prompt("Unesite drugi broj: "));

if (isNaN(x) || isNaN(y)){
    console.log("Niste uneli prave vrednosti")
} else if(y === 0) {
    console.log("deljenje nulom nije moguce")
} else {
    console.log ("Deljenje " + "broja " + x + "i " + "broja " + y + "je: " + x/y)
}



//napisati program koji na osnovu  dva uneta broja od strane korisnika ispisuje 
//povrsinu kvadrata ako su uneti brojevi jednaki,
//povrsinu pravogaunika ako su uneti brojevi razliciti.



const m = Number (prompt("Unesi prvi brojj: "))
const n = Number (prompt("Unesi drugi brojj: "))

if (isNaN(m) || isNaN(n)) {
    console.log("Niste uneli odgovarajuce vrednosti")
} else if (m===n){
    console.log("povvrsina kvadrata je: " + m*n)
} else {
    console.log("povrsina pravogaunika je: " + m*n)
}


//Gde god ima a,e STAVITI RAZMAK

// recenica = "Danas je bio lep dan, sutra ce biti jos lepsi"
// recenicaD = ""

// for (let i; i<=recenica.length -1; i++){
//     if (recenica[i] === a && recenica[i] === e)
//     recenicaD += " "
// } 


// console.log(recenicaD)




// let recenica2 = "Danas je bilo promenjivo vreme."

// for (let i = 0; i<recenica2.length; i++) {
//     console.log(recenica2[i])
// }


let recenica = "Danas je bilo promenjivo vreme."
rec = ""

for (let i = 0; i<recenica.length; i++) {
    if (recenica[i] == "a" || recenica[i] == "e") {
    rec += " "
    }
}

console.log(rec)
