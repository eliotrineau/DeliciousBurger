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


const burgerContainer = document.querySelector("#burger-container");

burgerList.forEach((burger) => {
    burgerContainer.innerHTML += 
    `
      <a href="#">
        <div class="bg-[#1F532F] text-center rounded-xl py-2 px-1 text-white">
          <h2 class="text-center mb-4 text-2xl font-bold">${burger.nom}</h2>
          <img class="border mb-4 rounded-xl h-full w-64 flex mx-auto" src="${burger.img}">
          <p class="text-center mb-4 px-8">${burger.description}</p>
          <p class="mb-4 mt-6 border-y px-6">Les ingrédients :<br><br>${burger.ingredients.join(", ")}</p>
          <div class="flex justify-center">
            <p class="bg-green-500 text-white rounded-xl py-1 px-2 text-center" style="font-family: 'Telma', cursive;">${burger.prix}€</p>
          </div>
        </div>
      </a>
    `;
  });




const burgerMenuContainer = document.querySelector("#burgerMenu-container");
if (location.pathname.endsWith('menu.html')) {
  burgerList.forEach((burger) => {
    burgerMenuContainer.innerHTML += `
      <a href="#">
        <div class="bg-[#1F532F] rounded-xl py-2 px-1 text-center text-white">
          <h2 class="text-center mb-4 text-2xl font-bold ">${burger.nom}</h2>
          <div class="flex mx-auto">
            <img class="border mb-4 rounded-xl h-full self-center w-64 flex mx-auto" src="${burger.img}">
            <div class="flex-col self-center h-full pr-6 lg:mr-16 lg:-ml-16 ">
              <img class="border mb-4 h-full rounded-xl lg:w-32 w-64 flex mx-auto" src="${burger.boisson}">
              <img class="border mb-4 h-full rounded-xl lg:w-32 w-64 flex mx-auto" src="${burger.frites}">
            </div>
          </div>
          <p class="text-center mb-4 px-8">${burger.description}</p>
          <p class="mb-4 mt-6 border-y px-6">Les ingrédients :<br><br>${burger.ingredients.join(', ')}</p>
          <div class="flex justify-center">
            <p class="bg-green-500 text-white rounded-xl py-1 px-2 text-center" style="font-family: 'Telma', cursive;">${burger.prix}€</p>
          </div>
        </div>
      </a>
    `;
  });
}


// Etape 3 
// Ajouter la description et le prix 


//Voir lignes 27, 30, 54 et 57


// Etape 4 
// Afficher l'image du burger


//Voir lignes 26 et 48


// Etape 5


/*J'ai ajouter trois nouveaux burgers à voir dans data.js (j'ai aussi modifié leur ordre)*/

// Etape 6 
 

//Fait

// Etape 7 (Bonus)
// Rendre vos site le plus attractif possible en changeant le style


//Ajout d'un header et d'un footer en html, tailwindcss et ajout du style directement dans le javascript


// Vous pouvez remplacer les burgers par d'autre élements (ex: des films, des livres, des jeux vidéos, des personnages, des animaux, etc...)

//'ai ajouté la conception d'un menu que je trouvais plus cohérent avec le prolongement de l'exercice (Voir Nos menus)

// Etape 8 (Bonus)
// Afficher la liste des ingrédients


//Voir lignes 28 et 55

