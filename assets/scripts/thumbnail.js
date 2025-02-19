let animal = document.querySelectorAll(".animal-card");
let display = document.getElementById("histoire-full");
let luna = ["Luna",
            "Trouvée dans la rue avec une patte cassée, Luna a été soignée et a retrouvé sa joie de vivre. Elle coule maintenant des jours heureux dans sa nouvelle famille.",
            "Janvier 2024"];
let oscar = ["Oscar",
            "Abandonné dans une forêt, Oscar était terrifié par les humains. Après des mois de patience et d'amour, il est devenu un chat confiant et affectueux.",
            "Mars 2024"];
let max = ["Max",
            "Max était initialement très agressif. Après une période d'adaptation, il s'est petit à petit ouvert aux autres et s'est métamorphosé.",
            "Mai 2024"];

function changeAnimal (index, array) {
    document.querySelector(`.animal-card:nth-child(${index})`).addEventListener("click", () => {
        for (let i = 0; i < display.children.length; i++) {
            display.children[i].textContent = array[i];
        }
    });
}

changeAnimal(1, luna);
changeAnimal(2, oscar);
changeAnimal(3, max);

animal.forEach((img) => {
    img.addEventListener("click", () => {
        animal.forEach((btn) => {
            btn.classList.remove("selected-animal");
        });
        img.classList.toggle("selected-animal");
        display.style.backgroundImage = getComputedStyle(img).backgroundImage;
    });
});