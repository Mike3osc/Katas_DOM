//Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html 
//con el atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const parentDiv = document.querySelector("[data-function='printHere']");
const newUlList = document.createElement("ul");

for (const place of places) {
  const newLi = document.createElement("li");
  newLi.textContent = place;
  newUlList.appendChild(newLi);
}

parentDiv.appendChild(newUlList);

