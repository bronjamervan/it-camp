// 1. recenica ispisanu velikim slovima, 
// 2. recenicu ispisanu malim slovima
// 3. pola recenica ispisano velikim slovima, pola recenice ispisano malim slovima
// 4. ako se u recenici nadje rec 'skola' neka bude zamenjena recju 'fakultet'.
// 5. neka bude ispisano prvih 10 karaktera unete recenice, 
// 6. neka bude ispisano poslednjih 10 karaktera unete recenice


let unetaRecenica = prompt("unesi recenicu: ")

console.log(unetaRecenica.toUpperCase())   // ispisivanje recenice u velika slova

console.log(unetaRecenica.toLowerCase())   // ispisivanje recenice u mala slova






let recenica = unetaRecenica.replace(/skola/i , "fakultet")
console.log(recenica)                      // ispravljanje 'skola' u 'fakultet'

console.log(unetaRecenica.slice(0, 10))    // prvih 10 karaktera unete recenice

console.log(unetaRecenica.slice(-11, -1))  // zadnjig 10 karaktera unete recenice


