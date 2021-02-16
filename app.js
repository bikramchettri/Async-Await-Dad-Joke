// const url = "https://icanhazdadjoke.com";

// const heading = document.querySelector(".heading");
// const btnLoad = document.querySelector(".load");
// btnLoad.onclick = () => load();
// const jokeElement = document.createElement("p");

// const load = async () => {
//   const response = await fetch(url, {
//     headers: { Accept: "application/json" }
//   });
//   const { id, joke, status } = await response.json();
//   jokeElement.innerHTML = joke;
//   heading.insertAdjacentElement("afterend", jokeElement);
// };

const url = "https://icanhazdadjoke.com";

const heading = document.querySelector(".heading");
const loader = document.querySelector(".loader");

const btnLoad = document.querySelector(".load");
btnLoad.onclick = () => load();
const jokeElement = document.createElement("p");
jokeElement.className = "joke-text";
const load = async () => {
  loader.classList.add("active");
  jokeElement.style.display = "none";
  btnLoad.classList.add("hide");
  const response = await fetch(url, {
    headers: { Accept: "application/json" }
  });
  const { id, joke, status } = await response.json();
  jokeElement.innerHTML = joke;
  heading.insertAdjacentElement("afterend", jokeElement);
  loader.classList.remove("active");
  jokeElement.style.display = "block";
  btnLoad.classList.remove("hide");
};
