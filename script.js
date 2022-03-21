const num = document.querySelector(".advice__num");
const quote = document.querySelector(".quote");
const dice = document.querySelector(".dice__container");
const url = "https://api.adviceslip.com/advice";

function getData() {
  fetch(url)
    .then((r) => r.json())
    .then((jsonResponse) => {
      let data = jsonResponse.slip;
      let adviceNum = data.id;
      let advice = data.advice;

      num.innerText = `Advice #${adviceNum}`;
      quote.innerText = `"${advice}"`;
    });
}

getData();

dice.addEventListener("click", () => {
  getData();
});
