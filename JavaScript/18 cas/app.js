// function firstTask () {
//     let recenica = prompt("unesite recenicu:")
//     let duzina = recenica.length
//     let brojac = 0
//     for (let i = 0; i<duzina; i++) {
//         if (recenica[i] === "m" || recenica[i] === "M") {
//             brojac++
//         }
//     }
//     return  `Uneta recenica sadrzi brojac ${brojac} puta slovo m(M).`
// }

// console.log(firstTask())



// function  firstHas () {
//     let broj = prompt("Unesi broj:")
//     let duzina = broj.length
//     let brojac = 0

//     for ( let i = 0; i<duzina; i++){
//         if (broj[i] === "0" || broj[i] === "1" || broj[i] ==="2" || broj[i] === "3" || broj[i] === "4" || broj[i] === "5" ||broj[i] === "6" || broj[i] === "7" || broj[i] === "8" ||broj[i] === "9" ) {
//             brojac++
//         }
//     }
//     return  `string ima ${brojac} brojeva u sebi`
// }
// console.log(firstHas())


// function firstTask () {
//     let recenica = prompt("unesi recenicu:")
//     let duzina = recenica.length
//     let brojac = 0

//     for (let i = 0; i < duzina; i++){
//         if (recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " ") {
//         brojac++
//         }
//     }
//     return `recenica ima ${brojac} malih slova`
// }
// console.log(firstTask())




const firstTask = function() {
    let recenica = prompt("unesi recenicu:")
    let duzina =  recenica.length
    let malaSlova = 0
    let velikaSlova = 0
    for (let i = 0; i < duzina; i++){
        if (recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " "){
            malaSlova++
        }else if (recenica[i] === recenica[i].toUpperCase() && recenica[i] !== " ") {
            velikaSlova++
        }

        if(malaSlova>velikaSlova) {
            return `U datoj recenici ima vise malih slova`
        }else if (malaSlova>velikaSlova) {
            return `u datoj recenici ima vise velikih slova`
        }else {
            return `u unetom stringu je jednak broj malih i velikih slova`
        }
    }
}

console.log(firstTask())



























