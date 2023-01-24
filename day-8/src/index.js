const clockTitle = document.querySelector(".js-clock");

const calculateDate = () => {
  const now = new Date();
  const eve = new Date(`2023-12-24:00:00:00`);

  const gap = eve - now;
  const seconds = Math.floor((gap / 1000) % 60);
  const minutes = Math.floor((gap / 1000 / 60) % 60);
  const hours = Math.floor((gap / 1000 / 60 / 60) % 24);
  const days = Math.floor(gap / 1000 / 60 / 60 / 24);

  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
setInterval(calculateDate, 1000);
