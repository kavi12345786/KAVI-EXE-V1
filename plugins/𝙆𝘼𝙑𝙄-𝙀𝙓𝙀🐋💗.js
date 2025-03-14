const config = require('../settings')
const os = require('os')
const fs = require('fs')
const axios = require('axios')
const si = require('systeminformation')
const prefix = config.PREFIX
const simpleGit = require('simple-git')
const Levels = require("discord-xp")
const git = simpleGit()
const Heroku = require('heroku-client')
const appname = process.env.APP_NAME || ''
const herokuapi = process.env.HEROKU_API
const pingSt = new Date();
const { cmd, commands } = require('../lib/command')
const DB = require('../lib/scraper')
const owner = JSON.parse(fs.readFileSync('./lib/owner.json'))
const devlopernumber = "94711453361"
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson,clockString, jsonformat} = require('../lib/functions')
var { updateCMDStore,isbtnID,getCMDStore,getCmdForCmdId,connectdb,input,get, updb,updfb } = require("../lib/database")
const {
    default: makeWASocket,
    generateWAMessageFromContent,
    prepareWAMessageMedia,
    proto
} = require('@whiskeysockets/baileys')

cmd({
    pattern: "pair",
    alias: ["pp"],
    react: "🔢",
    desc: "Download TikTok videos",
    use: ".pire <phone_number>",
    category: "main",
    filename: __filename
},
async (conn, mek, m, {from, q, reply, l }) => {
    try {
        // Input validation
        if (!q) {
            return reply("*Please provide a phone number. Usage: `.pair phone_number`*");
        }

        // Check if input is a valid phone number (with or without +)
        const phoneRegex = /^(\+?\d{1,3})?\d{9,}$/; // Example: 94771234567 or +94771234567
        if (!phoneRegex.test(q)) {
            return reply("*Please provide a valid phone number with the country code. Example: 94760383959*");
        }
const baseUrl = config.PAIR
        // Fetch data
        const response = await fetchJson(`${baseUrl}${q}`);
        const code = response?.code;

        // Check if data is available
        if (code) {
	 //  await conn.sendMessage(from, {text:code }, { quoted: mek })
	   //await conn.sendMessage(from, {text:`*Please connect the phone number ${q} within 1 minute.*` }, { quoted: mek })
	
        } else {
            reply("*No results found for the provided phone number.*");
        }




    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: `*Please connect the phone number ${q} within 1 minute.*` },
              carouselMessage: {
                cards: [
                  {
                    
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://i.ibb.co/PC9QPYP/1c54f7b06d7723c21afc5035bf88a5ef.jpg' } }, { upload: conn.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: "KAVI-EXE",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      buttons: [
                        {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"𝘊𝘖𝘗𝘠 𝘊𝘖𝘋𝘌\",\"id\":\"123456789\",\"copy_code\":\"${code}\"}`
              },
                      ],
			    
                    },
                  },                                    
                ],
                            messageVersion: 1,
                        },
                         contextInfo: {
                         mentionedJid: [m.sender],
                         forwardingScore: 999,
                         isForwarded: true,
                         forwardedNewsletterMessageInfo: {
                         newsletterJid: '120363366147331561@newsletter',
                         newsletterName: `𝙆𝘼𝙑𝙄 𝙀𝙓𝙀🐋💗`,
                         serverMessageId: 143
                            }
                        }
                    }
                }
            },
        },
        { quoted: m })
        
            await conn.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });

	    
	m.react('✔')
    } catch (error) {
        reply("*An error occurred! Please try again.*");
        l(error);
    }
});



cmd({
    pattern: "menu",
    alias: ["settings", "alive", "bot"],
    desc: "menu the bot",
    category: "menu",
    react: "⚙️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━━〔 *👨‍💻𝙆𝘼𝙑𝙄-𝙀𝙓𝙀-𝙎𝙏𝘼𝙏𝙐𝙎 𝙍𝙀𝘼𝘿𝙀𝙍 𝘽𝙊𝙏 👨‍💻* 〕━━━┈⊷
┃★╭──────────────
┃★│ 𝙊𝙒𝙉𝙀𝙍 : *𝙆𝘼𝙑𝙄-𝙀𝙓𝙀 🐋💗*
┃★│ 𝘽𝘼𝙄𝙇𝙀𝙔𝙎 : *Multi Device*
┃★│ 𝙏𝙔𝙋𝙀  : *NodeJs*
┃★│ 𝙈𝙤𝙙𝙚 : *[${config.MODE}]*
┃★│ 𝙋𝙍𝙀𝙁𝙄𝙓 : *[${config.PREFIX}]*
┃★│ 𝙑𝙀𝙍𝙎𝙄𝙊𝙉 : *𝙎𝙏𝘼𝙏𝙐𝙎-𝙍𝙀𝘼𝘿𝙀𝙍*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭━━〔 *𝙎𝙀𝙏𝙏𝙄𝙉𝙂𝙎 ⚙️* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• .setprefix [ your prefix ]
┃◈┃• .autostatus on/off
┃◈┃• .statusreact on/off
┃◈┃• .autotyping on/off
┃◈┃• .autorecording on/off
┃◈┃• .antidelete on/off
┃◈┃• .autobio on/off
┃◈┃• .alwaysonline on/off
┃◈└───────────┈⊷
╰──────────────┈⊷
> $> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴠɪ-ᴇxᴇ 🐋💗}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/5vp4rr.jpeg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: '💫 𝙆𝘼𝙑𝙄-𝙀𝙓𝙀 💙',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
            } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


cmd({
    pattern: "ping",
    react: "📟",
    alias: ["speed","cyber_ping"],
    desc: "To Check bot's ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const nima = require("@whiskeysockets/baileys")
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '*_Pinging to Vajira Module..._* ❗'  } )
var final = new Date().getTime();
await conn.sendMessage(from, { text : '◍○○○○' , edit : ping.key })
await conn.sendMessage(from, { text : '◍◍○○○' , edit : ping.key })
await conn.sendMessage(from, { text : '◍◍◍○○' , edit : ping.key })
await conn.sendMessage(from, { text : '◍◍◍◍○' , edit : ping.key })
await conn.sendMessage(from, { text : '◍◍◍◍◍' , edit : ping.key })
return await conn.sendMessage(from, { text : '📍️ *Pong ' + (final - inital) + ' Ms* ' , edit : ping.key })
} catch (e) {
reply('*Error !!*')
l(e)
}
})


cmd({
    pattern: "restart",
    desc: "Restart the 𝗞𝗔𝗩𝗜-𝗘𝗫𝗘-𝗩1",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup, senderNumber, reply
}) => {
    try {
        // Get the bot owner's number dynamically from conn.user.id
        const botOwner = conn.user.id.split(":")[0]; // Extract the bot owner's number
        if (senderNumber !== botOwner) {
            return reply("Only the bot owner can use this command.");
        }

        const { exec } = require("child_process");
        reply("Restarting...");
        await sleep(1500);
        exec("pm2 restart all");
    } catch (e) {
        console.error(e);
        reply(`${e}`);
    }
});