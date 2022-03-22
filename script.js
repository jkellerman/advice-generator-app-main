const num = document.querySelector(".advice__num");
const quote = document.querySelector(".quote");
const dice = document.querySelector(".dice__container");
const url = "https://api.adviceslip.com/advice";

const getData = async () => {
  try {
    const response = await fetch(url, { cache: "no-cache" });
    const jsonResponse = await response.json();
    let data = jsonResponse.slip;
    let adviceNum = data.id;
    let advice = data.advice;
    num.innerText = `Advice #${adviceNum}`;
    quote.innerText = `"${advice}"`;
  } catch (error) {
    console.log(error);
  }
};

getData();

dice.addEventListener("click", () => {
  getData();
});

// function getData() {
//   fetch(url)
//     .then((r) => r.json())
//     .then((jsonResponse) => {
//       let data = jsonResponse.slip;
//       let adviceNum = data.id;
//       let advice = data.advice;

//       num.innerText = `Advice #${adviceNum}`;
//       quote.innerText = `"${advice}"`;
//     });
// }

// getData();

// dice.addEventListener("click", () => {
//   getData();
// });
