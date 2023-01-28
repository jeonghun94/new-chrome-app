const nameInput = document.querySelector("#nameInput");

const paintGreeting = () => {
  const username = localStorage.getItem("username");
  const greeting = document.querySelector(".greeting");
  const time = parseInt(
    document.querySelector(".clock").innerHTML.split(":")[0]
  );

  if (username) {
    nameInput.style.display = "none";
    if (time >= 6 && time < 12) {
      greeting.innerHTML = `Good morning, ${username}.`;
    } else if (time >= 12 && time < 18) {
      greeting.innerHTML = `Good afternoon, ${username}.`;
    } else {
      greeting.innerHTML = `Good evening, ${username}.`;
    }
  } else {
    greeting.innerHTML = `Type your name :)`;
  }

  const focus = localStorage.getItem("focus");

  if (!focus) {
    paintFocus();
  }
};

nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    localStorage.setItem("username", nameInput.value);
    nameInput.value = "";
  }
  paintGreeting();
});

window.addEventListener("load", paintGreeting);
