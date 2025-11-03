const lang = document.querySelector("nav>ul:nth-of-type(1)>li:nth-of-type(1)>ul");
const button = document.querySelector("nav>:nth-of-type(1)>li:nth-of-type(1) button");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
 
button.addEventListener("click", langOpen);
 
// stap 3: voeg in de functie een class toe aan de nav
function langOpen() {
    lang.classList.toggle("langOpen");
    console.log("hoi")
}
 
const prive = document.querySelector("nav>ul:nth-of-type(1)>li:nth-of-type(2)>ul");
const priveButton = document.querySelector("nav>:nth-of-type(1)>li:nth-of-type(2) button");

 
priveButton.addEventListener("click", priveOpen);

function priveOpen() {
    prive.classList.toggle("priveOpen");
    console.log("hoi")
}

/* met dank aan Mats Groot*/
 
