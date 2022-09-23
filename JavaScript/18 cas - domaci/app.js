// 1.

// function toLower () {
//     let recenica = prompt("Unesite recenicu:");
//     return recenica.toLowerCase()
// }
// console.log(toLower())



// 2.

const isPolindrom = function() {
    let recenica = prompt("Unesite recenicu:"); 
    let duzina = recenica.length
    let obrnutaRecenica = ""
    for (let i = duzina - 1; i >= 0; i--) {
        obrnutaRecenica += recenica[i]
    }
    if (obrnutaRecenica === recenica) {
        return true
    } else{
        return false
    }
}
console.log(isPolindrom())

























































