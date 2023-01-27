const focusContainer = document.querySelector(".focus-container");
const focusInput = focusContainer.querySelector("input");

const paintFocus = () => {
  const focus = localStorage.getItem("focus");
  if (focus) {
    // focusContainer.style.display = "none";
    focusInput.style.display = "none";
    const focusText = document.querySelector("h3");
    focusText.innerHTML = `TODAY`;
    focusText.style.fontSize = "1.3rem";

    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerHTML = focus;
    ul.appendChild(li);
    focusContainer.appendChild(ul);
  }
};

focusInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    localStorage.setItem("focus", focusInput.value);
    focusInput.value = "";
  }
  paintFocus();
});

window.addEventListener("load", paintFocus);
