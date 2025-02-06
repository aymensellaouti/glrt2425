const t = [1, 2, 3, 4, 11, 21, 23, 45, 35];
t.sort((a, b) => -a + b);
console.log(t);

/* t.forEach((value, index, tabKamel) => {
  console.log(` t[${index}] =  ${value} \n`);
}), ;
 */

// compte à rebours

// index = 5;
// const intervalId = setInterval(() => {
//   if (index) {
//     console.log(index--);
//   } else {
//     clearInterval(intervalId);
//   }
// }, 2000);
cities = [
  "Djerba",
  "Tunis",
  "Sfax",
  "Sousse",
  "Bizerte",
  "Nabeul",
  "Kasserine",
  "Monastir",
];
// const lampe = document.querySelector(".lampe");
// setInterval(() => {
//   // lampe.classList.toggle("cc");
//   lampe.classList.toggle("on");
//   lampe.classList.toggle("off");
// }, 2000);
function createLiCity(cityName) {
  const liCity = document.createElement("li");
  liCity.innerHTML = cityName;
  return liCity;
}
// const citiesOl = document.querySelector(".cities");
// let index = 0;
// setInterval(() => {
//   if (!(index % cities.length)) {
//     citiesOl.innerHTML = "";
//   }
//   citiesOl.appendChild(createLiCity(cities[index % cities.length]));
//   index++;
// }, 2000);
