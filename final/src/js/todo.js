const todoBox = document.querySelector(".todo-box");
const todoBtn = document.querySelector(".todo-btn");
const newBtn = todoBox.querySelector(".main button");
const footer = todoBox.querySelector(".footer");
const todoInput = footer.querySelector("input");
const main = todoBox.querySelector(".main");

const TODOS_KEY = "todos";
let toDos = [];

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteToDo = (event) => {
  const div = event.target.parentElement;
  div.remove();

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(div.id));

  if (toDos.length === 0) {
    main.style.height = "100px";
    main.style.margin = "25px 0px";
    main.style.gap = "30px";
    main.style.transition = "height .5s ease-in-out, margin .5s ease-in-out";
    main.querySelector("h3").style.display = "block";
    main.querySelector("button").style.display = "block";
    footer.style.visibility = "hidden";
  }

  saveToDos();
};

const paintToDo = (newTodo) => {
  const div = document.createElement("div");
  div.id = newTodo.id;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  span.style.color = "white";

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  div.appendChild(checkbox);
  div.appendChild(span);
  div.appendChild(button);
  div.classList.add("todo-item");

  const listd = main.querySelector(".todo-list");
  listd.style.display = "block";
  listd.append(div);

  main.querySelector("h3").style.display = "none";
  main.querySelector("button").style.display = "none";
  main.style.height = "auto";
  main.style.margin = "1px -3px";
  main.style.transition = "height .5s ease-in-out, margin .5s ease-in-out";
};

todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const todo = todoInput.value;
    todoInput.value = "";
    if (todo === "") return;

    const newTodo = {
      text: todo,
      id: Date.now(),
    };
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
  }
});

const showTodos = () => {
  const showTodo = localStorage.getItem("showTodo");
  if (showTodo === "true") {
    todoBox.style.display = "block";
  } else {
    todoBox.style.display = "none";
  }
};

todoBtn.addEventListener("click", () => {
  const showTodo = localStorage.getItem("showTodo");
  showTodo === "true"
    ? localStorage.setItem("showTodo", "false")
    : localStorage.setItem("showTodo", "true");

  showTodos();
});

window.addEventListener("load", () => {
  showTodos();
  const savedToDos = localStorage.getItem(TODOS_KEY);
  const parsedToDos = JSON.parse(savedToDos).length;
  if (parsedToDos === 0) {
    footer.style.visibility = "hidden";
  }
});

newBtn.addEventListener("click", () => {
  footer.style.visibility = "visible";
  newBtn.disabled = true;
  newBtn.style.opacity = "0";
  newBtn.style.transition = "opacity .5s ease-in-out";
  todoInput.focus();
});

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  footer.style.visibility = "visible";
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
} else {
  console.log("no todos");
  footer.style.visibility = "hidden";
}
