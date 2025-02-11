const t = [1, 2, 3, 4, 11, 21, 23, 45, 35];
t.sort((a, b) => -a + b);
console.log(t);

/* t.forEach((value, index, tabKamel) => {
  console.log(` t[${index}] =  ${value} \n`);
}), ;
 */

function test(p1, p2) {
  /// code
}

function countdown(counter = 5, timer = 1500) {
  const indexSetInterval = setInterval(() => {
    if (counter) {
      console.log(counter--);
    } else {
      clearInterval(indexSetInterval);
    }
  }, timer);
}
// countdown();
// Je récupére l'élément à manipuler
const ampoule = document.querySelector(".ampoule");
// setInterval(() => {
//   ampoule.classList.toggle("off");
//   ampoule.classList.toggle("on");
// }, 1500);

const cities = [
  "djerba",
  "kasserine",
  "sfax",
  "tunis",
  "tataouin",
  "bizerte",
  "kef",
];
let index = 0;
const citiesOl = document.querySelector(".cities");
// setInterval(() => {
//   if (index == cities.length) {
//     index = 0;
//   }
//   if (index == 0) {
//     citiesOl.innerHTML = "";
//   }
//   const li = `<li>${cities[index++]}</li>`;
//   citiesOl.innerHTML += li;
// }, 1500);
