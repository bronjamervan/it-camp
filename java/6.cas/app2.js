// ispisati brojeve od 1-10 jedan ispod drugog

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// za resavanje ovog i slicnih primera je najednostavnije koristiti petlju (brojac) --LOOP--
// u javasriptu imamo tri petlje prekomkojih mozemo izvrsiti nekoliko linija koda na brzi nacin 

// 1. For petlja:
// U for petlji je svakako dozvoljeno koristiti if naredbu prema potrebi.
// for (statement1; statement2; statement3) {
    //block koda koji se izvrsava u svakoj interaciji
// }

// statement1 predstavlja definisanje promenjive koja predstavlja iterator 
// statement2 predstavlja uslov, odnosno granicu do koje ce se izvrsavati interacije.
// statement3 predstavlja promenu vrednosti iteratora (to moze biti povecanje ili smanjenje).

// let i;

// for ( i = 1; i<=10; i++) {
//     console.log(i);
// }



//ispisati sve brojeve od 1-10, osim broja 2 i broja 5.
//1 nacin

// for (let i=1; i<=10; i++) {
//     if (i!== 2 && i !== 5) {
//         console.log(i);
//     }
// }

// ako se nadje break rezervisana rec (keyword) unutar petlje to zanci da od tog trenutka petlja prestaje sa iteracijama
//odnosno zavrsava se.

// ako se nadje continue break rezervisana rec (keyword) unutar petlje  to znaci da se ta interacija preskace
//tj. odmah se prelazi na sledecu interaciju.


// 2. nacin

// for (let i = 1; i<=10; i++) {
//     if (i===2 || i ===5) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

//ispisati parne brojeve od 1-20 na dva nacina 

// for ( var i = 1; i<=20; i++) {
//     if ( i % 2 === 0); {
//         console.log(i);  //nesto ne radi
//     }
// } 

// for ( var z = 2; z <=20; z+=2) {
//     console.log(z);
// }


// Domaci:
// 1.
//ispisati neparne brojeve od 1-20 na dva nacina 

//2.
//Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.

//3. ispisati dvostruku vrednost do 6-14.

//4.
// suma neparnih prirodnih brojeva od 10 do 20.\





//1 domaci

for ( var z = 1; z <=20; z+=2) {
    console.log(z);
}


//2 zadatak

// for (var a = 50; a <=100; a+=5) {
//     console.log(a);
// }

for (var a=50; a<=100; a++){
    if ( a%5 == 0)
    console.log (a);
}

//3 zadatak