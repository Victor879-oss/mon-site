/*
SCRIPT.JS
Ce fichier contient les petites interactions
du portfolio.

Le site fonctionne aussi sans JavaScript.
*/

// On attend que toute la page HTML soit chargée.
document.addEventListener("DOMContentLoaded", function () {

// Affiche un message dans la console.
// Tu peux le voir avec clic droit > Inspecter > Console.
console.log("Portfolio chargé avec succès !");

/*
Navigation fluide vers les différentes sections.
Les liens qui commencent par "#" permettent
d'aller vers une section précise de la page.
*/

const liens = document.querySelectorAll('a[href^="#"]');

liens.forEach(function (lien) {

```
lien.addEventListener("click", function (event) {

  // Récupère l'identifiant de la section ciblée.
  const cible = document.querySelector(this.getAttribute("href"));

  // Vérifie que la section existe.
  if (cible) {

    // Empêche le comportement classique du lien.
    event.preventDefault();

    // Fait défiler la page jusqu'à la section.
    cible.scrollIntoView({
      behavior: "smooth"
    });
  }
});
```

});
});
