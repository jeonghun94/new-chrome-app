const todoBox = document.querySelector(".todo-box");
const newBtn = todoBox.querySelector(".main button");
const footer = todoBox.querySelector(".footer");
const todoInput = footer.querySelector("input");

todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const todo = todoInput.value;
    if (todo === "") return;
    todoInput.value = "";

    // const ul = document.createElement("ul");
    // const li = document.createElement("li");

    // ul.style.width = "100%";
    // li.style.width = "100%";

    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const span = document.createElement("span");
    span.innerText = todo;
    span.style.color = "white";

    div.appendChild(checkbox);
    div.appendChild(span);

    // li.appendChild(div);
    // ul.appendChild(li);
    div.classList.add("todo-item");

    const main = todoBox.querySelector(".main");

    const listd = main.querySelector(".todo-list");
    listd.style.display = "block";
    listd.append(div);

    main.querySelector("h3").style.display = "none";
    main.querySelector("button").style.display = "none";
    main.style.height = "auto";
    main.style.marginTop = "10px";
    main.style.transition = "height .5s ease-in-out, margin .5s ease-in-out";
  }
});

newBtn.addEventListener("click", () => {
  footer.style.visibility = "visible";

  newBtn.disabled = true;
  newBtn.style.opacity = "0";
  newBtn.style.transition = "opacity .5s ease-in-out";

  todoInput.focus();
});
