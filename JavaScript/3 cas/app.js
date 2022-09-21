// var
// Redeklarisanje (ponovno deklarisanje neke promenjive) je dozvoljenoizvrsiti bilo gde u programu

var x = 14;
console.log(x);
console.log("neki string");
var x = 16;
console.log(x);

//let
// redeklaracija (ponovno deklarisanje neke promenjive) za let nije dozvoljena ako govorimo o istom prostoru na kom je izvrsena prva deklaracija
let y = 10;
console.log(y);
// let y = 19; nece biti dozvoljeno

// Block scoup nam obezbedjuju let i const kaywords:
{
    console.log(y); // nece izvrsiti prikazivanje y jer u block scope nije poznata  prethodna deklaracija  promenjive
    let y = 19;
    console.log(y);
}

console.log(y);

//let nam ne dozvoljava redeklaraciju (aako smo u istom prostoru)
// ali je moguce izvrsiti reinicijalizaciju (dodeljivanje druge vrednosti)
let z = 10;
z = 12;

// const
// promenjive koje su definisane pomocu const NE MOGU BITI NI REDEKLARISANE NI REINICIJALIZOVANE.

const w = 16;
// const w = 14; Ne moze se redeklarisati
console.log(w);
// w = 20;    nije moguce izvrsiti reinacijalizaciju
console.log(w);

//karakteristike koje vaze za let kod block scope_a vazi i za promenjive definisane putem const.

// let dozvoljava sledece:
let prom;
prom = 40;

//const je striktna i kod nje se mora odjednom izvrsiti deklaracija i inicijalizacija 

const prom2 = 50;

//const ne dozvoljava reinicijalizaciju (ponovno dodeljivanje vrednosti).
// medjutim mozemo izvrsiti neke izmene kada se radi o nizu ili objektu
//(izmene u smislu da se promeni vrednost nekog elementa, da se doda element...).



