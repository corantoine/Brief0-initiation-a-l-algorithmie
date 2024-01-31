// 1 - A l'aide des boites de dialogue du navigateur, créez un console.log qui réalise l'addition de deux nombres entiers entrés par l'utilisateur.
var nombre1 = +prompt("Entrez un nombre entier");
var nombre2 = +prompt("Entrez un autre nombre entier");
console.log(parseInt(nombre1) + parseInt(nombre2)); // erreur : il faut convertir les chaînes de caractères en nombres

//parseInt permet de transformer une chaîne de caractère en nombre entier

// 2 - Réalisez une fonction "nombrePair" qui affiche dans la console les nombres pairs de 0 à 100.
function nombrePair() {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
nombrePair()

//2 Il manquait l'appel à la fonction = nombrePair()

// 3 - Créez une fonction qui génère un nombre entre 0 et 1 dans la console.
function nombreAleatoire() {
  let nombre = Math.random();
   // code manquant : il faut appeler la fonction Math.random()
  console.log(nombre);
}
nombreAleatoire();

//3 Il manquait l'appel à la fonction = nombreAleatoire()


//4 - Trouvez comment arrondir ce nombre et affichez le.
function arrondirNombre() {
let nombre = Math.random();
  let arrondi = Math.round(nombre); // code non fonctionnel : il faut passer le nombre en paramètre de la fonction Math.round()
  console.log(arrondi);
}
arrondirNombre();

//4 Faire appel à la fonction arrondirNombre()?

// 5 - Générez un nombre entre 0 et 1000, demandez un chiffre à l'utilisateur et affichez dans la console si votre nombre est divisible par le chiffre de l'utilisateur.
var nombre = Math.floor(Math.random() * 1000); // code manquant : il faut utiliser la fonction Math.floor() pour obtenir un nombre entier
var chiffre = prompt("Entrez un chiffre");
if (nombre % chiffre == 0) {
  console.log("Le nombre " + nombre + " est divisible par " + chiffre);
} else {
  console.log("Le nombre " + nombre + " n'est pas divisible par " + chiffre);
}
Math.floor();

//5 Faire appel à la fonction Math.floor()?

// 6 - Affichez une boîte "alert" lorsque l'utilisateur fait un clic droit.
window.addEventListener("contextmenu", function (e) {
  e.preventDefault(); // code manquant : il faut empêcher le comportement par défaut du clic droit
  alert("Vous avez fait un clic droit");
});

//6 RAS

// 7 - Changez la couleur du titre h1 au chargement de la page.
window.addEventListener("load", function () {
  var titre = document.querySelector("h1"); // erreur : il faut utiliser le sélecteur "h1" et non l'id "h1"
  titre.style.color = "red";
});

//7 Changer "getElementById" par "querySelector" afin d'utiliser le sélecteur "h1" et non l'id "h1"

// 8 - Faites une boucle qui affiche le contenu du tableau js "petitTableau1" dans la console
var petitTableau1 = ["un", "deux", "trois"];
for (var i = 0; i < petitTableau1.length; i++) {
  console.log(petitTableau1[i]);
}

//8 RAS, ça fonctionne, mais on peut écrire le code ainsi :
var petitTableau1 = ["un", "deux", "trois"];
for (const valeur of petitTableau1) {
console.log(valeur);
}

// 9 - Faites une boucle qui insère une <div> pour chaque item du tableau js "petitTableau2" avec son contenu à l'intérieur.
let petitTableau2 = ["quatre", "cinq", "six"];
let body = document.body; // code manquant : il faut sélectionner l'élément body
for (let i = 0; i < petitTableau2.length; i++) {
  let div = document.createElement("div"); // code manquant : il faut créer un élément div
  div.textContent = petitTableau2[i]; // code manquant : il faut assigner le contenu du tableau à la propriété textContent du div
  body.appendChild(div); // code manquant : il faut ajouter le div au body
}


// 10 - Créez une variable "grandTableau" et insérez y le contenu des deux petits tableaux précédents
petitTableau1 = ["un", "deux", "trois"];
petitTableau2 = ["quatre", "cinq", "six"];
var grandTableau = petitTableau1.concat(petitTableau2); // code non fonctionnel : il faut utiliser la méthode concat() pour fusionner les deux tableaux
  console.log(grandTableau);

// Redéfinir les variables petitTableau1 et petitTableau2