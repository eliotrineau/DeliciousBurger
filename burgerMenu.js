import {burgerList} from './data.js'

const burgerMenuContainer = document.querySelector("#burgerMenu-container");
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
