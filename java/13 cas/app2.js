c// stringovi

// stringovi predstavljaju immutable promenjive (promennive koje ne mozemo da menjamo ).
// ali obicno pri potrebi da izmenimo string  cemo definisati novu promenjivu i dodeliti
// joj karaktere prema postojecoj (obicno koristimo for petlje)

// 1 za pronalazenje duzine stringa se koristi metoda length
let recenica = "danas je promenjivo vreme.";
const duzina = recenica.length;
console.log(duzina)

// prilikom pisanja stringa mozemo naici na problem ako zelimo da se unutar stringa nadju navodnici.
//  I nacin
let recenica2 = 
    "Medicinksa skola u novom pazaru se zove 'Dva heroja' naziv je dobila po herojima koji su izgubili zivote prilikom spasavanja bebe. "

// II nacin
let recenica3 = 
    'Medicinksa skola u novom pazaru se zove "Dva heroja" naziv je dobila po herojima koji su izgubili zivote prilikom spasavanja bebe. '

// III nacin
let recenica4 = 
    "Medicinksa skola u novom pazaru se zove \"Dva heroja\" naziv je dobila po herojima koji su izgubili zivote prilikom spasavanja bebe. "
console.log(recenica2)
console.log(recenica3)
console.log(recenica4)

let novaRecenica = "Neka nova recenica koja treba sadrzati \\ backslash kao deo stringa"
console.log(novaRecenica);

// JOS JEDNA primena \ (backslash) kada zelimo da podelimo string u nekoliko redova.
// ova metoda ne funkcionise kada se radi o obicnom kodu, vec samo kad su stringovi u pitanju.

let novaRecenica2 = "IAU8YAYGFYUGAF8AEUGFHFHHHHHHHHHHHHHHHHHHHHHHHH \
HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHFFFFFFFFFFFFFFFFFFFFFFFF \
FFFFFFFFFFFFFFHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHFFFFFFFFFFFFFFFFFFFFFFF"

// 3 metode za uzimanje dela stringa 
//   1. slice(start,  end) - end se ne ukljucuje  
//   2. substring (start, end) - end se ne ukljucuje (razlika u odnosu na slice je u tome da substring metoda ne prima negativne vrednosti )
//   3. substr (start, length)

let novaRecenica3 = "Ovo je jedna duza recenica koju treba skratiti. mozemo primeniti sve 3 navedene metode."
let duzina2 = novaRecenica3.length
console.log(duzina2)

console.log(novaRecenica3.slice(7, 26));
console.log(novaRecenica3.slice(-7, -1));
console.log(novaRecenica3.substring(7, 12));
console.log(novaRecenica3.substr(7, 12));

