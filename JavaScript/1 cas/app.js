const glavniDiv = document.getElementById("pocetak");
const body = document.querySelector("body")

// Nacini pozivanja naseg diva sa id
// document.getElementById("pocetak");
// document.getElementsByClassName("naziv klase")
// document.querySelector("#pocetak")              uzima prvi selektor sa id="pocetak"
// document.querySelectorAll("#pocetak")           uzima sve selektore sa id="pocetak"
// document.getElementsByTagName()

console.log(glavniDiv);

const paragraf = document.createElement("p")
paragraf.textContent = "Ovo je paragraf dodat iz JavaScript_a."

// 12. i 13. linije su isto kao 16.
// <p>Ovo je paragraf dodat iz JavaScript_a.</p>

glavniDiv.append(paragraf)

// jedan od nacina da dodamo stilove
// glavniDiv.style.backgroundColor = "red";

glavniDiv.classList.add("kocka"); // Dodavanje klase iz CSS_a
paragraf.classList.add("text");

// paragraf.classList.toggle("veci-font")

// Dodavanje dugmeta i nekih funkcija on click

const dugme = document.createElement("button");
dugme.textContent = "Uvecaj paragraf";
glavniDiv.append(dugme)

dugme.addEventListener("click", () => {
    paragraf.classList.toggle("veci-font");    // toggle je kao prekidac
    skriveniDiv.classList.toggle("sakrijdiv")
})

const skriveniDiv = document.createElement("div")
skriveniDiv.classList.add("drugakocka")
body.append(skriveniDiv)