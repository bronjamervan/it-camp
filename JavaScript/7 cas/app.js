//while petlja nam omogucava interakciju nekoliko puta ( ne moramo znati broj ) i uz odredjenje
//izvrsavanje bloka koda koji smo definisali unutar petlje.

//sintaksa:
// while (uslov) { 
//     //block koda za izvrsavanje
// }

//ispisato brojeve od 1-5
// let broj = 1
// while (broj<=5) {
//     console.log(broj);
//     broj++;  // ne zaboraviti povecanje ili smanjenje brojaca.
// }

// // ispisati sve brojeve koji su parni
// let broj2=1;
// while (broj2<=10){
//     if (broj2 % 2 === 0 ) { 
//     console.group(broj2)
//     }
//     broj2++;
// }


// broj2 = 2;
// while (broj2 <=10) {
//     console.log(broj2);
//     broj2 += 2;
// }

// treaziti od korisnika da unese neki broj. Na osnovu te vrednosti izvrsiti ispis
//kvadrata brojeva od 1 do tog unetog broja:

// let x= Number (prompt("unesite broj"));
// let y= 1
// if (isNaN (x)){
//     console.log("Niste uneli korektan broj.");
// }
// while (y<=x) {
//     console.log(y**2 );
//     y++;
// }

//korisnik unosi 2 broja:
//na osnovu toga koji je broj manji, interacija se vrsi od njega do veceg broja.
//ispisuje se brojevi od manjeg ka vecem.
// let broj6 = Number(prompt("Unesite drugi broj: "))
// let broj5 = Number(prompt("Unesite prvi broj: "))

//  if (isNaN(broj5) || isNaN(broj6)) {
//     console.log ("niste uneli korektne vrednosti za brojeve. ")
// } else if (broj5 === broj6) {
//     console.log ("brojevi moraju biti razliciti.")
// } else if (broj5 < broj6) {
//     while (broj5<=broj6){
//         console.log(broj5);
//         broj5++;
//     }
// }
// else if (broj5 > broj6) {
//     while (broj5<=broj6){
//         console.log(broj5);
//         broj5++;
//     }
//  }


// do while petlja predstavlja obrnuti postupak while petlje.
// do {
//     //block koda koji se izvrsava
// } while (uslov)

// ispisati brojeve od 1 do 5
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

let x = 20;
do {
    console.log(x**2);
    x++;
} while (x<10)