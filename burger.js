import {burgerList} from './data.js'


// Voici la liste des burgers (le fichier se trouve dans le dossier data.js)
console.log('burgerList', burgerList)


// Etape 1
// Pour chacun des burgers affiche le nom dans la console
burgerList.forEach((burger, index) => {
    console.log(index, burger.nom)
})
// Etape 2
// Dans #burger-container afficher le nom des burgers

/* Le code ci-dessous est fonctionnel mais nous ne pouvons pas gérer efficacement la disposition de style avec ce dernier*/ 
/*
const burgerContainer = document.querySelector("#burger-container");


burgerList.forEach((burger) => {
    burgerContainer.innerHTML += `<p>${burger.nom}</p>`;
});
*/
/* J'ai donc préféré utiliser des classes comme j'ai plusieurs balises <p>*/ 
const burgerNames = document.querySelectorAll(".burger-name");


burgerList.forEach((burger, index) => {
    burgerNames[index].innerHTML = burger.nom;
});



// Etape 3 
// Ajouter la description et le prix 
const burgerDescription = document.querySelectorAll(".burger-description");


burgerList.forEach((burger, index) => {
    burgerDescription[index].innerHTML = burger.description;
});

const burgerPrix = document.querySelectorAll(".burger-prix");

if (location.pathname.endsWith("index.html")) {
burgerList.forEach((burger, index) => {
    burgerPrix[index].innerHTML = `${burger.prix} €`;
});
}
// Etape 4 
// Afficher l'image du burger
const burgerImg = document.querySelectorAll(".burger-img");


burgerList.forEach((burger, index) => {
    burgerImg[index].src = burger.img;
});
// Etape 5
// Ajouter des nouveaux burgers dans le fichier data.js

/*J'ai ajouter trois nouveaux burgers*/

// Etape 6 
// Ajouter votre site sur github page et ajouter le lien dans le cours 

/*Test de la création Git*/

// Etape 7 (Bonus)
// Rendre vos site le plus attractif possible en changeant le style

/*Fait*/
const burgerBoisson = document.querySelectorAll(".burger-boisson");

if (location.pathname.endsWith("menu.html")) {
burgerList.forEach((burger, index) => {
    burgerBoisson[index].src = burger.boisson;
});
}

const burgerFrites = document.querySelectorAll(".burger-frites");

if (location.pathname.endsWith("menu.html")) {
burgerList.forEach((burger, index) => {
    burgerFrites[index].src = burger.frites;
});
}

const burgerPrixMenu = document.querySelectorAll(".burger-prixMenu");

if (location.pathname.endsWith("menu.html")) {
burgerList.forEach((burger, index) => {
    burgerPrixMenu[index].innerHTML = `${burger.prixMenu} €`;
});
}



// Vous pouvez remplacer les burgers par d'autre élements (ex: des films, des livres, des jeux vidéos, des personnages, des animaux, etc...)

/*J'ai ajouté la conception d'un menu que je trouvais plus cohérent avec le prolongement de l'exercice*/
/*Voir dans Menu*/

// Etape 8 (Bonus)
// Afficher la liste des ingrédients

const burgerIngredients = document.querySelectorAll(".burger-ingredients");
burgerIngredients.forEach((ingredient, index) => {
  ingredient.innerHTML = `Les ingrédients :<br><br>${burgerList[index].ingredients.join(", ")}`;
});