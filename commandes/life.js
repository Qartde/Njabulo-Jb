"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ezra } = require("../fredi/ezra");
ezra({ nomCom: "altest", reaction: "💐", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'NJABULO  *HAPPY* JB\n\n ' + "i'm a whatsapp bot multi-device created ";
    let d = ' by *ғʀᴇᴅɪᴇᴢʀᴀ255*';
    let varmess = z + d;
    var img = 'https://files.catbox.moe/70u16l.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="😁"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Hi my name is *NJABULO JB* \n\n '+' I'm a Multi-device Whatsapp bot '
      let d =' developed by *frediezra255*'
      let varmess=z+d
      var img='https://files.catbox.moe/70u16l.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
