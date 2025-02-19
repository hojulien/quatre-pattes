let prix = document.querySelectorAll(".don-prix");
let freq = document.querySelectorAll(".freq");
let button = document.getElementById("don-button");

// RECUPERE LES DATA-VALUE ET UPDATE LE TEXTE
function updateButton(){
    let selectedPrix = document.querySelector(".selected-don").getAttribute("data-value");
    let selectedFreq = document.querySelector(".selected-freq").getAttribute("data-value");
    button.innerHTML = `<span id="heart">♡</span> Faire un don de ${selectedPrix}${selectedFreq}`;
}

// LES DEUX EVENTS FONCTIONNENT DE MANIERE SIMILAIRE
function addEvent(x, query, c){
    x.addEventListener("click", () => {
        query.forEach((btn) => {
            btn.classList.remove(c);
        });
        x.classList.toggle(c);
        updateButton();
    });
}

prix.forEach((x) => {
    addEvent(x, prix, "selected-don");
});

freq.forEach((x) => {
    addEvent(x, freq, "selected-freq");
});

button.addEventListener("click", () => {
    let selectedPrix = document.querySelector(".selected-don").getAttribute("data-value");
    let selectedFreq = document.querySelector(".selected-freq").textContent.toLowerCase();
    alert(`Vous avez choisi l'option: ${selectedPrix}, ${selectedFreq}`);
});