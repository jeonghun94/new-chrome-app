const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const imgNumber = getRandomIntInclusive(1, 6);
const changeImage = () => {
  document.body.style.backgroundImage = `url(./src/img/${imgNumber}.jpg)`;
};

window.addEventListener("load", changeImage);
