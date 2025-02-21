# Intégration Web "Quatre Pattes"

Un projet de deux pages réalisé dans le cadre de la formation Simplon "Développeur Web et Web Mobile". Le site représente une conception fictive de refuge animalier. Réalisé en HTML, CSS et JavaScript.

## Fonctionnalités

- Mise en page **responsive** et **format mobile**
- Header et footer **réutilisables**
- Interactions en JS
- Stylisation basique en CSS

## Structure du projet

```md
📂 quatre-pattes
├── 📄 index.html (Accueil)
├── 📄 contact.html (Contact)
├── 📄 README.md
└── 📂 assets/ (Ressources)
    ├── 📂 images/ (images)
    │   ├── 📂 icons/ (icônes)
    │   └── 📄 Toutes les autres images
    ├── 📂 scripts/ (JS)
    └── 📂 styles/ (CSS)
```

## Utilisation

- Navigation entre `index.html` et `contact.html` à travers le **haut de page**
- **Formulaire**: l'utilisateur peut envoyer un message à travers la page de contact. Le formulaire vérifie que tous les champs sont entrés (non vides) et valides (adresse email) avant d'effectuer une soumission.
- **Système de dons**: L'utilisateur peut choisir un montant et une fréquence (une seule option sélectionnée possible pour chaque). Le bouton "Faire un don" se réactualise alors avec les informations sélectionnées.
- **Galerie qui change d'image et de texte** selon l'image cliquée.
- **Quiz de 3 questions**. Lorsque l'utilisateur clique sur une réponse, la vraie réponse s'affiche dynamiquement. **Le score final s'affiche sous le quiz** une fois toutes les questions répondues

## Installation

### Cloner le projet:

```sh
git clone https://github.com/hojulien/quatre-pattes.git
```