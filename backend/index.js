'use strict'
const { fetchLatestBaileysVersion, default: WASocket, makeWASocket, makeInMemoryStore, BufferJSON, initInMemoryKeyStore, DisconnectReason, AnyMessageContent, delay, useSingleFileAuthState, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, proto, downloadContentFromMessage, MessageType, MessageOptions, Mimetype } = require("@adiwajshing/baileys")
const { Boom } = require('@hapi/boom');
const Pino = require('pino');
const fs = require('fs');
const { writeFile } = require('fs/promises');
const { state, saveState } = useSingleFileAuthState('./Keerthana.json');
const qrcode = require("qr-image");
const path = require('path');
const __Path = path.join(__dirname, '.');
const express = require('express')
const app = express()
const port = 8000


app.get('/', (req, res) => {
async function KeerthanaAmmu() {
    const { version, isLatest } = await fetchLatestBaileysVersion();
    const Ammu = WASocket({
		printQRInTerminal: false,
		auth: state,
		logger: Pino({ level: "silent" }),
		version: version,
        browser: ["Keerthana", "Safari", "3.0"]
	});

    Ammu.ev.on("connection.update", async(up) => { 
        const { lastDisconnect, connection, qr} = up;
        console.log(qr);
        if (connection) return console.log("Connection Status: ",connection);
        if (qr !== undefined) {qrcode.image(qr,{type: 'png',size: 20}).pipe(fs.createWriteStream(__Path+'/img.png'));}

        res.sendFile(__Path+'/img.png')  
    });
    Ammu.ev.on("creds.update", saveState);
};

 KeerthanaAmmu()
})

app.get('/api/qr', (req, res) => {
    res.setHeader('content-type', 'application/json');
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))