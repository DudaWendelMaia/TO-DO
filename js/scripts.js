//Selecao de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

//Funcoes
const saveTodo = (text) => {
    
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText= text;
    todo.appendChild("todoTitle");

    const doneBtn = document.createElement("button")
    doneBtn.innerHTML= '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.innerHTML= '<i class="fa-solid fa-check"></i>'
    todo.appendChild(editBtn)

    const removeBtn = document.createElement("button")
    removeBtn.innerHTML= '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

}


//Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue)
    }
});