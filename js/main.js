import {
  content,
  element1,
  element2,
  element3,
  element4,
  element5,
  element6,
  element7,
  element8,
  element9,
  products,
} from "./auxiliary.js";

element1.addEventListener("click", () => {
  content.innerHTML = "";
  const actives = document.querySelectorAll(".active");
  actives.forEach((item) => {
    item.classList.remove("active");
  });
  element1.classList.toggle("active");
  products.porcoesPestiscos.map(({ name, description, alt, image, price }) => {
    content.innerHTML += `<div class="card m-2 card-custom item-card-custom"><img src="./images/${image}" class="card-img-top" alt="${alt}"><div class="card-body"> <p class="card-text"><p class="h5">${name} </p> ${description} <br> <p class="stylePrice">R$ ${price}</p></p></div></div>`;
  });
});

element2.addEventListener("click", () => {
  content.innerHTML = "";
  const actives = document.querySelectorAll(".active");
  actives.forEach((item) => {
    item.classList.remove("active");
  });
  element2.classList.toggle("active");
  products.lanchesBaguete.map(({ name, description, alt, image, price }) => {
    content.innerHTML += `<div class="card m-2 card-custom item-card-custom"><img src="./images/${image}" class="card-img-top" alt="${alt}"><div class="card-body"> <p class="card-text"><p class="h5">${name} </p> ${description} <br> <p class="stylePrice">R$ ${price}</p></p></div></div>`;
  });
});

element3.addEventListener("click", () => {
  content.innerHTML = "";
  const actives = document.querySelectorAll(".active");
  actives.forEach((item) => {
    item.classList.remove("active");
  });
  element3.classList.toggle("active");
  products.sobremesas.map(({ name, description, alt, image, price }) => {
    content.innerHTML += `<div class="card m-2 card-custom item-card-custom"><img src="./images/${image}" class="card-img-top" alt="${alt}"><div class="card-body"> <p class="card-text"><p class="h5">${name} </p> ${description} <br> <p class="stylePrice">R$ ${price}</p></p></div></div>`;
  });
});

element4.addEventListener("click", () => {
  content.innerHTML = "";
  const actives = document.querySelectorAll(".active");
  actives.forEach((item) => {
    item.classList.remove("active");
  });
  element4.classList.toggle("active");
  products.bebidas.map(({ name, description, alt, image, price }) => {
    content.innerHTML += `<div class="card m-2 card-custom item-card-custom"><img src="./images/${image}" class="card-img-top" alt="${alt}"><div class="card-body"> <p class="card-text"><p class="h5">${name} </p> ${description} <br> <p class="stylePrice">R$ ${price}</p></p></div></div>`;
  });
});

element5.addEventListener("click", () => {
  content.innerHTML = "";
  const actives = document.querySelectorAll(".active");
  actives.forEach((item) => {
    item.classList.remove("active");
  });
  element5.classList.toggle("active");
  products.cervejas.map(({ name, description, alt, image, price }) => {
    content.innerHTML += `<div class="card m-2 card-custom item-card-custom"><img src="./images/${image}" class="card-img-top" alt="${alt}"><div class="card-body"> <p class="card-text"><p class="h5">${name} </p> ${description} <br> <p class="stylePrice">R$ ${price}</p></p></div></div>`;
  });
});

element6.addEventListener("click", () => {
  content.innerHTML = "";
  const actives = document.querySelectorAll(".active");
  actives.forEach((item) => {
    item.classList.remove("active");
  });
  element6.classList.toggle("active");
  products.drinks.map(({ name, description, alt, image, price }) => {
    content.innerHTML += `<div class="card m-2 card-custom item-card-custom"><img src="./images/${image}" class="card-img-top" alt="${alt}"><div class="card-body"> <p class="card-text"><p class="h5">${name} </p> ${description} <br> <p class="stylePrice">R$ ${price}</p></p></div></div>`;
  });
});

element7.addEventListener("click", () => {
  content.innerHTML = "";
  const actives = document.querySelectorAll(".active");
  actives.forEach((item) => {
    item.classList.remove("active");
  });
  element7.classList.toggle("active");
  products.caipirinhas.map(({ name, description, alt, image, price }) => {
    content.innerHTML += `<div class="card m-2 card-custom item-card-custom"><img src="./images/${image}" class="card-img-top" alt="${alt}"><div class="card-body"> <p class="card-text"><p class="h5">${name} </p> ${description} <br> <p class="stylePrice">R$ ${price}</p></p></div></div>`;
  });
});

element8.addEventListener("click", () => {
  content.innerHTML = "";
  const actives = document.querySelectorAll(".active");
  actives.forEach((item) => {
    item.classList.remove("active");
  });
  element8.classList.toggle("active");
  products.doses.map(({ name, description, alt, image, price }) => {
    content.innerHTML += `<div class="card m-2 card-custom item-card-custom"><img src="./images/${image}" class="card-img-top" alt="${alt}"><div class="card-body"> <p class="card-text"><p class="h5">${name} </p> ${description} <br> <p class="stylePrice">R$ ${price}</p></p></div></div>`;
  });
});

element9.addEventListener("click", () => {
  content.innerHTML = "";
  const actives = document.querySelectorAll(".active");
  actives.forEach((item) => {
    item.classList.remove("active");
  });
  element9.classList.toggle("active");
  products.almoco.map(({ name, description, alt, image, price }) => {
    content.innerHTML += `<div class="card m-2 card-custom item-card-custom"><img src="./images/${image}" class="card-img-top" alt="${alt}"><div class="card-body"> <p class="card-text"><p class="h5">${name} </p> ${description} <br> <p class="stylePrice">R$ ${price}</p></p></div></div>`;
  });
});
