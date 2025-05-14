const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection[0]);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linksInternos = document.querySelector('[href^="#"]'); // ^ Significa começa com.
console.log(linksInternos);

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg[1]);
