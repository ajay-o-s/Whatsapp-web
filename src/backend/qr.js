'use strict'
const { fetchLatestBaileysVersion, 
    default: WASocket, makeWASocket, makeInMemoryStore, BufferJSON, initInMemoryKeyStore, useSingleFileAuthState 
    } = require("@adiwajshing/baileys")
const Pino = require('pino');
const fs = require('fs');
const { writeFile } = require('fs/promises');
const { state, saveState } = useSingleFileAuthState('./Keerthana.json');
const qrcode = require("qr-image");
const path = require('path');
const __Path = path.join(__dirname, '.');

async function Start() {
    const { version, isLatest } = await fetchLatestBaileysVersion();
    const Ammu = WASocket({printQRInTerminal: false, auth: state, logger: Pino({ level: "silent" }),version: version,browser: ["Keerthana", "Safari", "3.0"]});
    Ammu.ev.on("connection.update", async(up) => { 
        const { lastDisconnect, connection, qr} = up;
        if (qr !== undefined) {
            console.log(qr)
            qrcode.image(qr,{type: 'png',size: 20}).pipe(fs.createWriteStream(__Path+'/img.png'));}
 
    });
    Ammu.ev.on("creds.update", saveState);
};

Start()
//module.exports = {Start}

//<div className="landing-window">
                //    <div className="landing-main">
                //    <div className="_1N3oL"><div class="_2WuPw">
                //    <div className="landing-title _3-XoE">To use WhatsApp on your computer:
                //    <li className="QtrYx">Open WhatsApp on your phone</li></div>
				//	</div>
				//	</div>
				//	</div>
				//	</div>


                /**
                 * <div className="landing-wrappe" >
				<div className="landing-header">
			<Icon id="whatsapplight" className="whatsapplight__logo" />
			<div className="landing-headerTitle">KEERTHANA WEB</div></div>
                 */