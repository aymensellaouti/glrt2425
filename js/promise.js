let account = 150;
let slaf = 100;

const salefniFlouss = new Promise((ithaKanOufitBwa3di, ithaKanMaWfitech) => {
  setTimeout(() => {
    if (account >= slaf) {
      account -= slaf;
      console.log(account);
      ithaKanOufitBwa3di(slaf);
    } else {
      ithaKanMaWfitech({
        message:
          "sama7ni ma khlatech nlem leflouss enajem nsaba9lek el montant hadha",
        tasb9a: account,
      });
    }
  }, 3000);
});

setTimeout(() => {
  const masrouf = Math.ceil(Math.random() * slaf);
  console.log("masrouf", masrouf);
  account -= masrouf;
  console.log("che93ad fel compte", account);
}, 1000);

salefniFlouss
  .then((floussi) => {
    console.log("Ya3tik essaha khaltou el " + floussi);
  })
  .catch((error) => {
    console.log(
      `Ma nefhem chay Raja3li floussi khalihom 3andek hak el ${error.tasb9a}`
    );
  });
