let account = 150;
let slaf = 100;

const salafniFlouss = new Promise((ithaKAnOufitEbWa3di, ithKanMaOufitch) => {
  setTimeout(() => {
    if (account >= slaf) {
      account -= slaf;
      ithaKAnOufitEbWa3di(slaf);
    } else {
      ithKanMaOufitch({
        message: `Sama7ni Rani ma khlatech nlem el montant el kol thabech na3tik tasb9a`,
        tasb9A: account,
      });
    }
  }, 3000);
});

setTimeout(() => {
  let masrouf = Math.ceil(Math.random() * account);
  //masrouf = 30;
  console.log({ masrouf });
  account -= masrouf;
}, 1500);

salafniFlouss
  .then((flouci) => {
    console.log(
      `Rabi ibareklek eli raja3tli el ${flouci} dinars ama mathabik ma 3adech tkalemni`
    );
  })
  .catch((response) => {
    console.log(`La merci a3lik ya traja3li floussi el kol walla nechki bik`);
  });
