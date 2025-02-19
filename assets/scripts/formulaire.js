let form = document.getElementById("container-contact");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let emailPattern = /^[^@]+@[^@.]+\.[^@]+$/;
    let isValid = true;

    // NOM
    if (document.getElementById("nom").value.length == 0) {
        document.getElementById("erreur-nom").textContent = "Veuillez entrer un nom."
        isValid = setTo(isValid, false);
    } else {
        resetText("erreur-nom",isValid);
    }

    // EMAIL
    if (document.getElementById("email").value.length == 0) {
        document.getElementById("erreur-email").textContent = "Veuillez entrer une adresse email."
        isValid = setTo(isValid, false);
    } else if (!emailPattern.test(document.getElementById("email").value)) {
        document.getElementById("erreur-email").textContent = "L'adresse email n'est pas valide."
        isValid = setTo(isValid, false);
    } else {
        resetText("erreur-email",isValid);
    }

    // SUJET
    if (document.getElementById("sujet").value == "") {
        document.getElementById("erreur-sujet").textContent = "Veuillez sélectionner un sujet."
        isValid = setTo(isValid, false);
    } else {
        resetText("erreur-sujet",isValid);
    }

    // MESSAGE
    if (document.getElementById("message").value.length == 0) {
        document.getElementById("erreur-message").textContent = "Veuillez entrer un message."
        isValid = setTo(isValid, false);
    } else {
        resetText("erreur-message",isValid);
    }

    if (isValid) {
        alert("Formulaire soumis!");
        form.submit();
    }
});

// setTo change un booléen en une valeur donnée
function setTo(bool, val){
    bool = val;
    return bool;
}

// resetText vide le message d'erreur et appelle setTo à true
function resetText(id, bool) {
    document.getElementById(id).textContent = "";
    bool = setTo(bool, true);
}