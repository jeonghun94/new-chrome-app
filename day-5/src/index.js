const changeBackgroundColor = () => {
  const width = window.innerWidth;
  if (width <= 640) {
    document.body.style.backgroundColor = "lightblue";
  } else if (width > 640 && width <= 1024) {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "yellow";
  }
};

const resized = () => {
  changeBackgroundColor();
};

window.addEventListener("load", changeBackgroundColor);
window.addEventListener("resize", resized);
