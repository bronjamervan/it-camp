//                                          operatori u js 
// operatori u javaScriptu se dele na sledece:
// 1. Aritmeticki operatori ;
// 2. Operatori dodele vrednosti;
// 3. JavaScript string operatori;
// 4. Operatori prodjenja;
// 5. Logicki operatori;
// 6. Tipovi operatori.


// 1. Aritmeticki operatori ;
// + Sabiranje:
console.log(5+2);

// - Oduzimanje;
console.log(5-2);

// * monozenje:
console.log(5*2);

// ** stepenovanje
console.log(5**2);
console.log(2**3);

//  / deljenje:
console.log(5/2);

// % Moduo:
console.log(5%2);
console.log(3%2);

// ++ povecanje za 1:
let x = 5;
x++;
console.log(x);

// -- smanjenje za 1:
let y = 5;
y--;
console.log(y);

//2. Operatori dodele vrednosti;

// = Jednakost
let a, b;
a = 10;
b = a;
console.log(a);
console.log(b);

// +=
let c = 15;
c += 5; //c = c + 5

console.log (c);

// -=
var d = 15;
d -= 15;
console.log (d);

// %=
var m = 15;
m %= 15;
console.log (m);

var s = 15;
s **= 15; // d = 15 ** 5
console.log (s);

// 3. JavaScript string operatori;

//za spajanje mozemo iskoristiti + operator
//ako izvrsimo dodavanje stringa nekom broju (broja nekom stringu ) preko + operatoradobicemo string.
let k,n;
k = "Danas je bilo";
n = "lepo vreme";
console.log (k + " " + n);
console.log (55 +  " " + k);

// neke karakteristike vezane za +,-,*,/:
console.log(5+"5");
console.log(5-"4asd4"); // uvek u slucaju nemogucnosti kovertovanja nekog stringa u broj, JavaScript nam vrac NaN.
console.log(5*"4");
console.log(5/"4");


// 4.  operatori poredjenja 

// == - Proverava Jednakost  vrednosti
let r,t;
r = 56;
t = -56;
console.log(r == t);

// === - Proverava jednakost vrednosti i tipa 
let prom1, prom2;
prom1 = 14;
prom2 = "14"
// console.log(prom1 == prom2);   Bolje je koristiti operator ===
console.log (prom1 === prom2);

// != - Proverava nejednakost  vrednosti 

let prom3, prom4;
prom3 = 25;
prom4 = "25"
console.log(prom3 != prom4);

// !== - proverava nejednakost vrednosti ili nejdnakost tipa
let prom5, prom6;
prom5 = 25;
prom6 = 25;
console.log(prom5 !== prom6);

let prom7, prom8;
prom7 = 25;
prom8 = "25"
console.log(prom7 !== prom8);

// > - Promenjiva da li je prva vrednost veca od druge

let prom9,prom10;
prom9 = 52;
prom10 = 25;
console.log(prom9 > prom10);

// < - Promenjiva da li je prva vrednost manja od druge

let prom11,prom12;
prom11 = 52;
prom12 = 25;
console.log(prom11 > prom12);


// >= - Promenjiva da li je prva vrednost veca ili jednaka od druge vrednosti

let prom13,prom14;
prom9 = 50;
prom10 = 50;
console.log(prom13 >= prom14);

// <= - Promenjiva da li je prva vrednost manja ili jednaka od druge

let prom15,prom16;
prom9 = 46;
prom10 = -46;
console.log(prom9 <= prom10);

// ? - Ternarni operator
// sintaksa za njega 
// condition ? exprIFTrue :   exprIFTrue


//5. logicki operatori;

// && - Logicko i

let var1 , var2;
var1 = 40;
var2 = 17;
console.log(var1 > 20  && var2<20);
console.log(var1>20 && var2>20);

// || - Logicko ili
let var3, var4;
var3 = 40;
var4 = 17;
console.log(var3 > 20  || var4 < 20);

// ! - Logicnko ne (not)

let isSunny = false;
console.log(!isSanny);

// 6. tipovni operatori

// typeof - vraca tip promenjive

let var5 = 16.9;
let var6 = "trenutno je 26 stepeni"
var isSunny1 = false;
console.log(typeof var5);
console.log(typeof var6);
console.log(typeof isSunny1);

//instanceof - ispituje da li je tip odredjuje promenjice instanca od objekta npr.
let obj= {
    ime: "Moje ime ",
    prezime: "Moje prezime",
};

console.log(obj instanceof object)


