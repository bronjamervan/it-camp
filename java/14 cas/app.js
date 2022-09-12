//  NASTAVAK METODA KOD STRINGOVA (2)

//  Menjanje sadrzaja se moze izvrsiti replace () metode.

let recenica = "Nekad zelimo izmeniti sadrzaj nekim drugim."

// Metoda prima dva argumenta. Prvi predstavlja rec koju zelimo da izmenimo, drugi novu rec
// koja ce se naci umesto stare.

let novaRecenica = recenica.replace("sadrzaj" , "text" );

console.log(novaRecenica);

// novaRecenica2 ce zameniti samo prvu rec sadrzaja, recju tekst

let recenica2 = "Nekad zelimo da se na odrednjenom mestu nadje sadrzaj koji nije sadrzaj isti kao pre."

let novaRecenica2 = recenica2.replace("sadrzaj" , "text" );

console.log(novaRecenica2);

// koriscenjem Regular Ezpression mozemo dodatno definisati sta zelimo
// novaRecenica3 ce zameniti svaku rec 'sadrzaj',recju 'tekst':
// koristi se regular expression (g - global match)


let novaRecenica3 = recenica2.replace(/sadrzaj/g , "text" );

console.log(novaRecenica3)


let recenica3 = "Nekad zelimo da se na odrednjenom mestu nadje sadrzaj koji nije SADRZAJ isti kao pre."

// JavaScript je case-sansitive osetljiv na velika i mala slova.



let novaRecenica4 = recenica3.replace(/sadrzaj/g , "text" );

console.log(novaRecenica4)

// novaRecenica5 ce zameniti svaku rec 'sadrzaj'(bilo da je napisana velikim ili malim slovima),recju 'tekst':
// koristi se regular expression (i -insensitive)
// menja se samo prva rec koja se poklapa.

let recenica4 = "Nekad zelimo da se na odrednjenom mestu nadje sAdrZaJ koji nije SADRZAJ isti kao pre."
let novaRecenica5 = recenica4.replace(/sadrzaj/i , "text" );

console.log(novaRecenica5)
// ako hocemo u istom momentu da zamenimo sve reci bez obzira na velika i mala slova
// mozemo iskoristiti vise regular expressions odjednom.

let novaRecenica6 = recenica4.replace(/sadrzaj/gi , "text" );
console.log(novaRecenica6)

// konvertovanje stringa u velika slova:

// toUpperCase ()
let recenica5 = "Sta ako zelimo da cela recenica bude ispisana velikim slovima?"
console.log(recenica5.toUpperCase())

// konvertovanje stringa u mala slova:

let recenica6 = "Sta ako zelimo Da cAla ReceniCa BuDe ispIsaNa Malim slovima?"

console.log(recenica6.toLowerCase())

// jedan od nacina da spojimo dva stringa je putem + operatora. danas radimo drugi nacin:
// koriscenje metode const()

var sentence1 = "Ako predjem prvi ciklus,"
var sentence2 = "nastavljamo sa ozbiljnijim bavljenjem java script programskim jezikom."

var sentence1And2 = sentence1.concat(sentence2);
console.log(sentence1And2);
// putem concat() spojiti vise stringova ( ne samo dva )
sentence1And2 = sentence1.concat(" ", sentence2)
console.log(sentence1And2)

// sve metode vezano za stringove nam vracaju novi string 
// one zapravo ne modifikuju postojeci.


// Domaci zadatak.
// napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkciju vraca, 
// datu recenicu u vise oblika (spojen u jedan string). ------->povezati sa html i prompt

// 1. recenica ispisanu velikim slovima, 
// 2. recenicu ispisanu malim slovima
// 3. pola recenica ispisano velikim slovima, pola recenice ispisano malim slovima
// 4. ako se u recenici nadje rec 'skola' neka bude zamenjena recju 'fakultet'.
// 5. neka bude ispisano prvih 10 karaktera unete recenice, 
// 6. neka bude ispisano poslednjih 10 karaktera unete recenice

console.log("danas/nradim/nnseto/nnovo.")









