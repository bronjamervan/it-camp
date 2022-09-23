// function lastSpace() {
//     let recenica = prompt("Unesi recenicu:")
//     const lastSpace = recenica.lastIndexOf(" ");
//     return lastSpace;                               
// }
// console.log(lastSpace())


// function lastSpace() {
//     let recenica = "Pera ima devojku."
//     const lastSpace = recenica.lastIndexOf(" ");
//     return lastSpace;
// }
// console.log(lastSpace())



// function firstLength() {
//     const recenica = prompt("Unesite recenicu:");
//     let recenica1 = "";
//     let prviSpace = recenica.indexOf(" ");

//     for (let i = 0; i < prviSpace; i++) {
//         recenica1 += recenica[i];
//     }
//     if (prviSpace == -1) {
//         return recenica.length;
//     }
//     let duzinaPrveReci = recenica1.length;

//     return `duzina reci je ${duzinaPrveReci}`;
// }
// console.log(firstLength())


// function dveReci() {
//     const A = prompt("unesi prvu recenicu:");
//     const B = prompt("unesi drugu recenicu:");
//     let prvaRec = ""
//     let drugaRec = ""
//     let prviSpace = A.indexOf(" ");
//     let drugiSpace = B.lastIndexOf(" ");
//     for (let i = 0; i < prviSpace; i++){
//         prvaRec += A[i];
//     }
//     for (let i = drugiSpace + 1; i < B.length; i++) {
//         drugaRec += B[i];
//     }
//     return prvaRec.concat(" ",drugaRec);

// }
// console.log(dveReci())




// function tenth(n) {
//     let recenica = prompt("unesi neku recenicu:")
//     let prvihN = ""
//     for (let i = 0; i<n; i++) {
//         prvihN += recenica[i]
//     }
//     if (n>recenica.length) {
//         return recenica;
//     } else {
//         return prvihN;
//     }
// }
// console.log(tenth(4))









