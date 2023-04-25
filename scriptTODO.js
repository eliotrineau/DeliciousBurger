const defaultTodo =
[
    {done: true, name:"Coucou"},
    {done: true, name:"Coucou"},
]


const btn = document.querySelector("#add");
const container = document.querySelector("#container-list");
const input = document.querySelector("#new");
const value = input.value;

console.log(btn);

const displayTodos = (listTodo)=>{

}

defaultTodo.forEach((contenu)=>{
    console.log(contenu)
    container.innerHTML +=
    `
    <div class="flex justify-center gap-8 ">
    <div>${contenu.done}</div>
    <div>${contenu.name}<br>
        <p>
            ${value}
        </p>
    </div>
    <div>Supp</div>
    </div>
    `;
});
