const getTime = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const clock = document.querySelector(".clock");
  clock.innerHTML = `${hours}:${minutes}`;
  clock.classList.add("clock");
};

getTime();
setInterval(getTime, 60000);
