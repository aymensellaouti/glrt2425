let account = 150;
let slaf = 100;
const salefniFlouss = new Promise((ithaKanOufitBwa3di, ithaKanMaWfitech) => {
  setTimeout(() => {
    if (account >= slaf) {
      console.log({ account });
      account -= slaf;
      ithaKanOufitBwa3di(slaf);
    } else {
      ithaKanMaWfitech({
        message: "Désolé ma khlatech enajem nssaba9lek la somme hathi",
        avance: account,
      });
    }
  }, 3000);
});

salefniFlouss
  .then((floussi) => {
    console.log("Rabi ibarekek");
    console.log({ account });
  })
  .catch((error) => {
    console.log(`Khalihom 3andek hak el ${error.avance} net9ablou fel ma7kma`);
  });
setTimeout(() => {
  account -= Math.ceil(Math.random() * account);
}, 1000);
