const config = require('../settings')
const { cmd, commands } = require('../lib/command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

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
> ${config.DESCRIPTION}`;

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

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/sigma.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
