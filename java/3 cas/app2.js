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



