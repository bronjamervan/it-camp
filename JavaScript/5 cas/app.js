// kondicionali
// U javascriptu se if naredba pise na sledeci nacin:

// if (uslov1) {
//     //ako je ispunje uslov1 izvrsiti odredjeni kod
// } else if (uslov2) {
//     // ako je ispunjen uslov2 izvrsiti odredjeni kod
// } else {
//     // U slucaju da nije zadovoljen ni prvi ni drugi uslov, izvrsiti odredjeni kod
// }

// Na osnovnu unetih godina ispisati u konzoli sledece:
//ako je broj godina manji od 12: Vi ste decijeg doba.
//ako je broj godina izmedju 12-18: Vi ste maloletni.
//ako je broj godina izmedju 18(ukljucuje ) i 40(ne ukljucuje): Vi ste punoletni.
//ako je broj godina veci ili jednak od 40: vi ste zrela osoba.
//ako korisnik nije uneo broj: Niste uneli broj godina 
const brojGodina= Number(prompt("unesite svoju starost: "));

if (brojGodina<12) {
    console.log("Vi ste decijeg doba.")
} else if (brojGodina>=12 && brojGodina<18) {
    console.log("Vi ste maloletni.")
} else if (brojGodina>=18 && brojGodina<40) {
    console.log("Vi ste punoletni.")
} else if (brojGodina>=40) {
    console.log ("Vi ste zrela osoba.")
} else {
    console.log("Niste uneli broj godina.")
}

               // uslov za parnost broja je:
               // broj % 2 === 0 broj je paran
               // broj % 2 !== 0 broj je neparan

//napisati program koji proverava da li je uneti broj od strane korisnika paran ili neparan i ispisuje odgovarajucu poruku.

const parniBroj= Number(prompt("Unesite svoj broj:"));

if (parniBroj % 2 === 0) {
    console.log ("paran je broj");
} else if (parniBroj % 2 === 1) {
    console.log ("uneli ste neparan broj");
} else {
    ("niste uneli broj.") 
}

//napisati program koji ako je uneti broj  veci od 0  stampa poruku broj je pozitivan,
// u suprotnom broj je negativan.

const nekiBroj = Number(prompt("Unesite broj:"));

if (nekiBroj < 0) {
    console.log ("broj je negativan")
} else if  (nekiBroj === 0) {
    console.log ("broj je nula")
} else if (nekiBroj > 0){
    console.log ("broj je pozitivan")
} else {
    console.log ("uneto nije broj")
}

// switch naredba:
switch (izraz) {
    case x:
        //block koda
        break;
    case y:
        //block koda
        break;
    case z:
        //block koda
        break;
    default:
        // block koda 
}
//ako je zadovoljen slucaj x, izvrsice se 66. linija koda,
//ako  nije prelazimo na sledeci slucaj...
//kad se dodje do break rezervisane reci switch naredba prestaje da se izvrsava.
//ako se izostavi break to znaci da ce se izvrsiti linija koda od sledeceg slucaja
// (koji zapravo nije zadovoljen) i to nije nesto sto zelimo da se desi.

//default rezervisana rec odredjuje kod koji ce se izvrsiti ako ni  jedan od pretkodni slucajeva nije zadovoljen .

//korisnik unosi broj koji mora biti izmedju 12 i 15 (ukljucuju se oba)
// koristeci switch naredbu izvrsiti ispis u konzoli broj koji je korisnik uneo pod zadovoljenim uslovom.


const broj2 = Number(prompt("Unesite broj izmedju 12-15:"));

if (broj2) {
    case 12;
        console.log(broj2);
        break
    case 12;
        console.log(broj2);
        break
    case 13;
        console.log(broj2);
        break
    case 14;
        console.log(broj2)
        break
    default
        console.log("Niste uneli broj iz trazenog opsega.");
}




// 1 zadatak

//napisati program koji na osnovu  dva uneta broja od strane korisnika ispisuje 
//povrsinu kvadrata ako su uneti brojevi jednaki,
//povrsinu pravogaunika ako su uneti brojevi razliciti.

//2

//korisnik unosi dva realna broja x i y.
//napisati program koji izracunava i stampa
//kolicnik x/y ako je broj y razlicit od nule, 
//a inace ispisuje poruku: deljenje nemoguce.