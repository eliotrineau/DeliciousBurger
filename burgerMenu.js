//import de firebase 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, setDoc, getDoc, where, writeBatch, query, orderBy, doc, limit, getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCEdxdFU_PYt7DE5bYAuuYKhi_mAi76HZU",
  authDomain: "deliciousburgerdb-d1f82.firebaseapp.com",
  projectId: "deliciousburgerdb-d1f82",
  storageBucket: "deliciousburgerdb-d1f82.appspot.com",
  messagingSenderId: "1083150962797",
  appId: "1:1083150962797:web:6150789016c4669c642f64"
};

//initialiser firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getDocument = async (collectionName) => {
  const DocumentColRef = collection(db, collectionName);
  const DocumentSnapshot = await getDocs(DocumentColRef);
  const DocumentList = DocumentSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
  return DocumentList
}

const afficherBurgers = async () => {
  const burgerList = await getDocument("BurgerList");
  console.log(burgerList);
  const burgerMenuContainer = document.querySelector("#burgerMenu-container");
  console.log(typeof(burgerMenuContainer))
  burgerList.forEach((burger)=>{
    burgerMenuContainer.innerHTML += //affiche le html
    `
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
            <p class="bg-green-500 text-white rounded-xl py-1 px-2 text-center" style="font-family: 'Telma', cursive;">${burger.prixMenu}€</p>
          </div>
        </div>
      </a>
    `;
  })
}

afficherBurgers();


/*
burgerList.forEach((burger, index) => {
    console.log(index, burger.nom)
})

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
            <p class="bg-green-500 text-white rounded-xl py-1 px-2 text-center" style="font-family: 'Telma', cursive;">${burger.prixMenu}€</p>
          </div>
        </div>
      </a>
    `;
  });
*/