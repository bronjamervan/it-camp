// split () metoda ce izvrsiti konverziju stringa u niz (Array)

var recenica = "Zelimo izvrsiti konverzaciju ove recenice u nizu."
var recenica2 = "Ako bi se desilo da na pocetku casa dodju svi na vreme,\
to bi bilo cudo, koje do toga trenutka nismo videli,\
mada hashdaihdaoudouabdubaoubaoub,juajbsduh."

// izostavljajuci argument metode split ce se izvrsitit konverzija datog stringa u niz koji ima jedan elemnt
var niz1 = recenica.split();
console.log(niz1)

// ako je argument string "," onda cemo dati string pretvoriti u niz koji je podeljen u elemnte koje razdvajaju zarezi.
var niz2 = recenica2.split(",");
console.log(niz2);

// sledeci primer ce od svakog karaktera stringa praviti jedan element novonastalog niza:
var niz3 = recenica.split("")
console.log(niz3)

// postoje 4 JavaScript search metode:
// 1. indexOf()
// indexOf() metoda nam vraca index pocetne reci koju trazimo
var recenica = "In those four years, Hungarys authorities have abused judicial appointment rules in order to nominate supporters,\
used the Covid-19 pandemic and now the war in Ukraine to justify executive power-grabs, and criminalized the countrys civil society,\
subjecting organizations to intrusive scrutiny and public smears. Pressure on independent media, risks of state surveillance,\
and increasing concentration also threaten media pluralism and independence. And this week, the government severely restricted access to abortion,\
issuing a decree forcing people to hear the heartbeat of the fetus before obtaining an abortion."

let index1 = recenica.indexOf("people")
console.log(index1)

// ako trazimo index nepostojeceg stringa rezultat ce biti -1
let index2 = recenica.indexOf("hasd")
console.log(index2)

// 2. lasIndexOf()
// indexOf ()metoda nam vraca index poslednje ponavljajuce reci u stringu
let index3 = recenica.indexOf("the", 509)
let index4 = recenica.lastIndexOf("the")
console.log(index3 + "\n" + index4)

let index5 = recenica.lastIndexOf("pizza");
console.log(index5);


// 3. search() metoda vraca index trazenog stringa:

var recenica = "In those four years, Hungarys authorities the have abused judicial appointment rules in order to nominate supporters,\
used the Covid-19 pandemic and now the war in Ukraine to justify executive power-grabs, and criminalized the countrys civil society,\
subjecting organizations to intrusive scrutiny and public smears. Pressure on independent media, risks of state surveillance,\
and increasing concentration also threaten media pluralism and independence. And this week, the government severely restricted access to abortion,\
issuing a decree forcing people to hear the heartbeat of the fetus before obtaining an abortion."

var index6 = recenica .search("the");
console.log(index6)























