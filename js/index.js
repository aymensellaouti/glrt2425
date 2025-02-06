// const t = [1, 2, 3, 4, 11, 21, 23, 45, 35];
// t.sort((a, b) => -a + b);
// console.log(t);

/* t.forEach((value, index, tabKamel) => {
  console.log(` t[${index}] =  ${value} \n`);
}), ;
 */
// let start = 5;
// const countdown = setInterval(() => {
//   if (start) {
//     console.log(start--);
//   } else {
//     clearInterval(countdown);
//   }
// }, 1000);

// const ampoule = document.querySelector(".ampoule");

// setInterval(() => {
//   ampoule.classList.toggle("on");
//   ampoule.classList.toggle("off");
// }, 2000);

const cities = [
  "Djerba",
  "Tounes",
  "Hammamet",
  "Soussa",
  "Kasserine",
  "Ariana",
  "Kairouan",
];

const cityOl = document.querySelector(".cities");

function createCity(cityName) {
  const newCity = document.createElement("li");
  newCity.innerHTML = cityName;
  return newCity;
}
let index = 0;
// setInterval(() => {
//   if (!(index % cities.length)) {
//     cityOl.innerHTML = "";
//   }
//   let newCityNode = createCity(cities[index % cities.length]);
//   cityOl.appendChild(newCityNode);
//   index++;
// }, 2000);
