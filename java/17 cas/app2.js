function teren () {
    const duzina = +prompt("Unesi duzinu terena:")
    const sirina = +prompt("Unesi sirinu terena:")

    if (isNaN(sirina) || isNaN(duzina)){
        return "niste uneli odgovarajuce vrednosrti"
    } else if (sirina < 1 || sirina > 100) {
        return "sirina mora biti izmedju 1-100"
    } else if (duzina <1 || duzina > 100) {
        return "duzina  mora biti izmedju 1-100"
    }else {
        let ukupno = (2* sirina) + (2*duzina)
        return  `Ukupno metara koje sportista predje: ${ukupno}`
    }
}

console.log(teren())
