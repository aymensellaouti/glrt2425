let account = 150;
let slaf = 100;

const salefniFlouss = new Promise((ithaKanOufitBwa3di, ithakanMaWfitch) => {
  setTimeout(() => {
    if (account >= slaf) {
      account -= slaf;
      ithaKanOufitBwa3di(slaf);
      console.log("Oufit :", account);
    } else {
      console.log("Ma Oufitch :");
      ithakanMaWfitch({
        message: `Samahni ma khlatech nlem leflous enajeam ensaba9lek :`,
        tasb9a: account,
      });
    }
  }, 3000);
});

setTimeout(() => {
  let masrouf = Math.ceil(account * Math.random());
  masrouf = 30;
  console.log("Srafna:", masrouf);
  account -= masrouf;
}, 1500);

salefniFlouss
  .then((_) => {
    console.log(
      `Ya3tik essa7a raja3tli el ${_} flouss ama ma 3adect t3awed san3tek`
    );
  })
  .catch((response) => {
    console.log(`Khalihom 3andek el ${response.tasb9a} ma binetna el ma7kma `);
  });
