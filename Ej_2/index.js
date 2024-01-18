//1.1 Inserta dinamicamente en un html un div vacio con javascript.

const emptyDiv = document.createElement("div");
document.body.append(emptyDiv);

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divWithP = document.createElement("div");
document.body.append(divWithP);
const pInDiv = document.createElement("p");
divWithP.appendChild(pInDiv);

//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
//	loop con javascript.

const multipleDiv = document.createElement("div");

for (let i = 0; i <= 6; i++) {
  const newP = document.createElement("p");
  multipleDiv.appendChild(newP);
}

document.body.append(multipleDiv);


//1.4 Inserta dinamicamente con javascript en un html una p con el
//	texto 'Soy dinámico!'.

/*const dynamic = "Soy dinamico";
let dynamicP = document.createElement("p");
dynamicP = dynamic;
document.body.append(dynamicP);*/

const dynamic1 = document.createElement("p");
dynamic1.textContent = "Soy dinamico";
document.body.appendChild(dynamic1);


//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const newH2 = document.querySelector(".fn-insert-here");
newH2.textContent = "Wubba Lubba dub dub";

//1.6 Basandote en el siguiente array crea una lista ul > li con
//los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ulList = document.createElement("ul");
document.body.appendChild(ulList);

for (let i = 0; i < apps.length; i++) {
  const element = apps[i];
}

for (const app of apps) {
  const liInUl = document.createElement("li");
  liInUl.append(app);
  ulList.appendChild(liInUl);
}

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removedElements = document.querySelectorAll(".fn-remove-me");

for (const removedElement of removedElements) {
  removedElement.remove();
}

//1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//	Recuerda que no solo puedes insertar elementos con .appendChild.

const allDiv = document.querySelectorAll("div");

const newP = document.createElement("p");
newP.textContent = "Voy en medio!"

document.body.insertBefore(newP, allDiv[1]);

//1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
//	.fn-insert-here

const allInsertedDivs = document.querySelectorAll(".fn-insert-here");

for (const elementInserted of allInsertedDivs) {
  const pInserted = document.createElement("p");
  pInserted.textContent = "Voy dentro!";
  elementInserted.appendChild(pInserted)
}


