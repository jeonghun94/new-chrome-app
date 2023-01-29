const linkInput = document.querySelector(".link input");

const redirect = (e) => {
  if (e.key === "Enter") {
    location.href = `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${linkInput.value}`;
  }
};

linkInput.addEventListener("keypress", redirect);
