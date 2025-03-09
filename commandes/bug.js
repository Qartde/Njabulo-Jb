const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

zokou({ nomCom: "bugmenu", categorie: "menu" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
    let { cm } = require(__dirname + "/../framework/zokou");
    let coms = {};
    let mode = "public";

    if ((s.MODE).toLowerCase() !== "yes") {
        mode = "private";
    }

    cm.map((com) => {
        if (!coms[com.categorie]) {
            coms[com.categorie] = [];
        }
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    let infoMsg = `
  bug
  crash
  loccrash
  amountbug <amount>
  crashbug 255XXXX
   pmbug 255XXXX
  delaybug 255XXXX
   trollybug 255XXXX
  docubug 254XXXX
   unlimitedbug 255XXXX
 bombug 255XXXX
  lagbug 255XXXX
  gcbug <grouplink>
  delaygcbug <grouplink>
  trollygcbug <grouplink>
 laggcbug <grouplink>
  bomgcbug <grouplink>
 unlimitedgcbug <grouplink>
  docugcbug <grouplink>


 *TIME* : ${temps}
 *DATE* : ${date}`;
    }
    
    menuMsg += `
>    \n`;

    try {
        const senderName = nomAuteurMessage || message.from;  // Use correct variable for sender name
        await zk.sendMessage(dest, {
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [senderName],
                externalAdReply: {
                    title: " ",
                    body: " bug    ",
                    thumbnailUrl: "https://files.catbox.moe/xfn913.jpg",
                    sourceUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (error) {
        console.error("Menu error: ", error);
        repondre(" Menu error: " + error);
    }
});
      
