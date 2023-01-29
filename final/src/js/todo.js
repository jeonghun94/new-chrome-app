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
    main.style.margin = "58px 0px 10px 0px";
    main.style.gap = "30px";
    main.style.alignItems = "center";

    main.querySelector("h3").style.display = "block";
    main.querySelector("button").style.opacity = "1";
    main.querySelector("button").style.display = "block";

    main.style.transition = "all .5s ease-in-out";
    footer.style.visibility = "hidden";
  }

  saveToDos();
};

const checkTodo = (event) => {
  const div = event.target.parentElement;
  const span = div.querySelector("span");
  if (event.target.checked) {
    span.style.textDecoration = "line-through";
    span.style.color = "#c8c8c8";
  } else {
    span.style.textDecoration = "none";
    span.style.color = "white";
  }
};

const paintToDo = (newTodo) => {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");
  todoItem.id = newTodo.id;

  const div = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", checkTodo);

  const span = document.createElement("span");
  span.innerText = newTodo.text;
  span.style.color = "white";

  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-times", "icon");
  // icon.classList.add("fas", "fa-ellipsis-h", "icon");
  icon.style.color = "#c8c8c8";

  icon.addEventListener("click", deleteToDo);

  div.appendChild(checkbox);
  div.appendChild(span);

  todoItem.appendChild(div);
  todoItem.appendChild(icon);

  todoItem.classList.add("todo-item");

  const todos = main.querySelector(".todo-list");
  todos.style.display = "block";
  todos.append(todoItem);

  main.querySelector("h3").style.display = "none";
  main.querySelector("button").style.display = "none";
  main.style.height = "auto";
  main.style.margin = "1px -3px";
  main.style.transition = "height .5s ease-in-out, margin .5s ease-in-out";
};

todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const todo = todoInput.value;
    if (todo === "") return;

    const newTodo = {
      text: todo,
      id: Date.now(),
    };

    console.log(newTodo);

    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
    todoInput.value = "";
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
  footer.style.visibility = "hidden";
}
