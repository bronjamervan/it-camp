// zadatak 1.

// const changeIndexes = () => {
//     const recenica = prompt("unesi neki string:");
//     let duzina = recenica.length
//     let novaRecenica = ""
//     for (let i = 0; i<duzina; i++) {
//         if (duzina % 2 === 1 && i === duzina - 1) {
//             novaRecenica += recenica[i];
//         } else if (i % 2 === 0) {
//             novaRecenica += recenica[i+1];
//         }else if (i % 2 === 1) {
//             novaRecenica += recenica[i-1];
//         }
//     }
//     return novaRecenica;
// }
// console.log(changeIndexes());



const firstByFirst = () => {
    const A = prompt("unesi prvu rec:");
    const B = prompt("unesi drugu rec:");
    const duzina1 = A.length
    const duzina2 = B.length
    let C = "";
    // let duzina = 0
    // if ( A.length > B.length) {
    //     duzina = A.length;
    // } else {
    //     duzina = B.length
    // }
    // Sintaksa za ternary operator:
    // USLOV ? vrednost u slucaju ispunjenja uslova : vrednost u slucaju neispunjenja uslova
    let duzina = A.length >duzina2 ? duzina1 :duzina2; 
    for (let i = 0; i < duzina; i++) {
        if (i >= duzina1) {
            C += B[i]
        } else if (i >= duzina2) {
            C += A[i]
        }
        else {
            C += A[i] + B[i];
        }
    }
    return C;
}

console.log(firstByFirst());























