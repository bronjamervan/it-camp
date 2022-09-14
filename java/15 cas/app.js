// HOISTING
a = 5;
console.log(a);

// let a;        <---- deklarisanje nakon inicijalizacije nije dozvoljeno putem let keyword
// const a;      <---- deklarisanje nakon inicijalizacije nije dozvoljeno putem const keyword
var a;   //      <---- deklarisanje nakon inicijalizacije jeste dozvoljeno putem var keyword

console.log(myFunc())


function myFunc() {
    let a = 10;         // <---- Hoisting hoce da se izvrsi
    return a;
}

// const myFunc = function() {
//     let a = 10;              // <---- Hoisting nece da se izvrsi
//     return a;
// }

const myArrow = () => {
    let a = 14;              // <---- Hoisting nece da se izvrsi
    return a;
};

// Dobra praksa je uvijek prvo deklarisati promenljivu ili neku funkciju pa je tek nakon toga koristiti
// sve kako bi smo izbegli eventualne greske u kodu .






