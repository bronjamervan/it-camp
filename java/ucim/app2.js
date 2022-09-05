// let br = 1;
// while (br <= 5) {
//     console.log(br)
//     br++
// }

// ispisati sve brojeve koji su parni

// let bro = 1;
// while (bro <=100) {
//     if (bro % 2 === 0 ) {
//         console.log(bro);
//     }
//     bro++;
// }


// treaziti od korisnika da unese neki broj. Na osnovu te vrednosti izvrsiti ispis
//kvadrata brojeva od 1 do tog unetog broja:

// let x = Number(prompt("Unesi broj: "));
// let y = 1
// if (isNaN(x)) {
//     console.log("Niste uneli broj.")
// } 
// while (y<=x) {
//     console.log(y**2)
//     y++;
// }

//korisnik unosi 2 broja:
//na osnovu toga koji je broj manji, interacija se vrsi od njega do veceg broja.
//ispisuje se brojevi od manjeg ka vecem.


// let broj1 = Number(prompt("unesi prvi broj "))
// let broj2 = Number(prompt("unesi drugi broj "))

// if (isNaN(broj1) || isNaN(broj2)){
//     console.log("Unesite broj!!!")
// } else if (broj1 === broj2) {
//     console.log("unesi razlicite brojeve!!!")
// } else if (broj1 < broj2) {
//     while (broj1 <= broj2){
//     console.log(broj1);
//     broj1++;
//     }
// }
// else if (broj1 > broj2){
//     while (broj1 <= broj2) {
//     console.log(broj1)
//     broj1++;
//     }
// }



// ispisati sve brojeve koji su deljivi sa 3.



// for (let x = 1; x <= 100; x++) {
//     if (x % 3 === 0){
//         console.log(x)
//     }
// }

// ISPISATI BROJEVE OD 10 DO 6 UNAZAD



// for (let a =10; a >=6; a--) {
//     console.log(a)
// }

// Ispisati dvostruku vrijednost prirodnih brojeva od 1 do 5.



for (let x = 1; x <= 5; x++) {
    console.log(x+x)
}

//Traziti od korisnika unos nekog realnog broja. Nakon toga ispisati u konzoli kvadrat tog broja (pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajucu vrednost).



const a = Number(prompt("unesi neki broj"))
console.log(a**2)