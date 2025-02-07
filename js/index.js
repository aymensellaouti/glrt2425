const t = [1, 2, 3, 4, 11, 21, 23, 45, 35];
t.sort((a, b) => -a + b);
console.log(t);

/* t.forEach((value, index, tabKamel) => {
  console.log(` t[${index}] =  ${value} \n`);
}), ;
 */
counter = 5;
const countDown = (counter = 5, timer = 1500) => {
  const intervalIndex = setInterval(() => {
    if (counter) {
      console.log(counter--);
    } else {
      clearInterval(intervalIndex);
    }
  }, timer);
};
//countDown();

const ampoule = document.querySelector(".ampoule");

// setInterval(() => {
//   ampoule.classList.toggle("on");
//   ampoule.classList.toggle("off");
// }, 1500);

const cities = [
  "Djerba",
  "Sousse",
  "Kasserine",
  "Bizerte",
  "KEf",
  "Kairouan",
  "Tatouin",
];

const citiesOl = document.querySelector(".cities");
let index = 0;
// setInterval(() => {
//   if (index == cities.length) {
//     index = 0;
//   }
//   if (!index) {
//     citiesOl.innerHTML = "";
//   }
//   const li = `<li>${cities[index++]}</li>`;
//   citiesOl.innerHTML += li;
// }, 1500);
