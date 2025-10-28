// JavaScript Document
console.log("hi");

// Dropdowns in nav
var language = document.querySelector("nav ul:nth-of-type(1) li:nth-of-type(1)");
var langdrop = document.querySelector("nav ul:nth-of-type(1) li:nth-of-type(1) ul");

language.onclick = toggleLanguage;

function toggleLanguage(){
    const expanded = language.getAttribute("aria-expanded") === "true";

  if (expanded) {
    language.setAttribute("aria-expanded", "false");
    langdrop.style.display = "none";
  } else {
    language.setAttribute("aria-expanded", "true");
    langdrop.style.display = "contents"; // or "absolute" positioning if needed via CSS
  }
}

    //dropdowns prive
    var prive = document.querySelector("nav ul:nth-of-type(1) li:nth-of-type(2)");
var privedrop = document.querySelector("nav ul:nth-of-type(1) li:nth-of-type(2) ul");

language.onclick = toggleLanguage;

function toggleLanguage(){
    const expanded = prive.getAttribute("aria-expanded") === "true";

  if (expanded) {
    prive.setAttribute("aria-expanded", "false");
    privedrop.style.display = "none";
  } else {
    prive.setAttribute("aria-expanded", "true");
    privedrop.style.display = "contents"; // or "absolute" positioning if needed via CSS
  }
}

console.log(language.querySelector("ul"));

