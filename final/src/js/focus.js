const focusContainer = document.querySelector(".focus-container");
const focusInput = focusContainer.querySelector(".write-box input");

const writeBox = focusContainer.querySelector(".write-box");
const focusBox = focusContainer.querySelector(".focus-box");

const paintFocus = () => {
  const focus = localStorage.getItem("focus");
  const username = localStorage.getItem("username");

  if (username) writeBox.style.display = "block";

  if (focus && username) {
    writeBox.style.display = "none";
    focusBox.style.display = "block";

    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerHTML = focus;
    ul.appendChild(li);
    focusContainer.appendChild(ul);
  } else {
    focusBox.style.display = "none";
  }
};

focusInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    localStorage.setItem("focus", focusInput.value);
    focusInput.value = "";
  }
  paintFocus();
});

window.addEventListener("load", paintFocus);
