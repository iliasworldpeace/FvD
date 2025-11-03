const lang = document.querySelector("nav>li:nth-of-type(1)>ul>li");
const button = document.querySelector("nav>li:nth-of-type(1)");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
 
button.addEventListener("click", openMenu);
 
// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {
    lang.classList.toggle("menuOpen");
    console.log("hoi")
}
 
