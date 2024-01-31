//1.1 Basandote en el array siguiente, crea una lista ul > li 
//dinámicamente en el html que imprima cada uno de los paises.
const countriesSetOne = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const countryList = document.createElement("ul");
document.body.appendChild(countryList);

for (const countrySetOne of countriesSetOne) {
  const countryLi = document.createElement("li");

  countryLi.append(countrySetOne);
  countryList.appendChild(countryLi)
}

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const deletedElments = document.querySelectorAll(".fn-remove-me");

for (const deletedElement of deletedElments) {
  deletedElement.remove()
}


//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div = document.querySelector("[data-function=printHere]");

const carList = document.createElement("ul");
div.appendChild(carList);

for (const car of cars) {
  const carLi = document.createElement("li");
  carLi.append(car);
  carList.appendChild(carLi);
}

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
//h4 para el titulo y otro elemento img para la imagen.
const countriesSetTwo = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

for (const countrySetTwo of countriesSetTwo) {
  const setOfDivs = document.createElement("div");
  const titleH4 = document.createElement("h4");
  const randomImg = document.createElement("img");

  titleH4.textContent = countrySetTwo.title;
  randomImg.src = countrySetTwo.imgUrl;

  setOfDivs.appendChild(titleH4);
  setOfDivs.appendChild(randomImg);

  document.body.appendChild(setOfDivs);
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
//elemento de la serie de divs.

const button = document.createElement("button");
button.textContent = "Elimina div";
document.body.appendChild(button);

function deleteLastDiv() {
  const deletion = document.querySelector("div:last-of-type");

  if (deletion) {
    deletion.remove()
  }
}

button.addEventListener("click", deleteLastDiv);


//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
//divs que elimine ese mismo elemento del html.