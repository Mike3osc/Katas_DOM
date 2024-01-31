//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
//que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ulList = document.createElement("ul");
document.body.appendChild(ulList);

for (const album of albums) {

  const listContent = document.createElement("li");
  listContent.textContent = (album);
  ulList.appendChild(listContent);
}