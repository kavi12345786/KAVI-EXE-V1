const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../lib/functions')
const mono = "```"

    function detectPlatform() {
      if (process.env.REPL_ID) return 'Replit';
      if (process.env.HEROKU_APP_NAME) return 'Heroku';
      if (process.env.KOYEB_PROJECT_ID) return 'Koyeb';
      if (process.env.AWS_LAMBDA_FUNCTION_NAME) return 'AWS Lambda';
      if (process.env.VERCEL) return 'Vercel';
      if (process.env.RENDER) return 'Render';
      if (process.env.NETLIFY) return 'Netlify';
      if (process.env.WORKFLOW) return 'Workflow';
      if (process.env.FLYIO_APP_NAME) return 'Fly.io';
      return 'Unknown Platform';
    }
    const platformName = detectPlatform();

cmd({
      pattern: "alive",
      alias: ["online"],
      desc: "Chek Bot Alive",
      category: "main",
      react: "👋🏻",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;
 // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }
          ///////status been sent//////
        
let desc =`*👋🏻 හායි ${pushname}, මම ඔබට උදව් වන්නේ කෙසේද 🦕🤍*

＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

*⏳ Ram Usage -* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
*⏰ Run Time -* ${runtime(process.uptime())}
＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

*𝗜 𝗔𝗠 𝗞𝗔𝗩𝗜 𝗘𝗫𝗘 𝗩𝗘𝗥𝗦𝗜𝗢𝗡 2.0.0*🛡️

*This is a whatsapp bot that helps to do whatsapp day-to-day activities by using easy  methods.Thank You For Using 𝗞𝗔𝗩𝗜 𝗘𝗫𝗘 𝗩1 Whatsapp Bot 🔗🤍*

📍 NICE TO MEET YOU 📍


🔢 Reply The Number That You Wanr

*| 1 |  ABOUT THE BOT*
*| 2 |  BOT REPO LINK*

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴠɪ ᴇxᴇ*`
 // Sending the image with caption
          const vv = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 0,
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
          newsletterName: '  |    ',
          newsletterJid: "120363366147331561@newsletter",
          },
          externalAdReply: {
              title: `𝗛𝘆 𝗜 𝗔𝗠 𝗔𝗟𝗜𝗩𝗘 𝗡𝗢𝗪 🤖`,
              body: `🤖 ᴘᴏᴡᴇʀᴅ ʙʏ ᴋᴀᴠɪ ᴇxᴇ🤖`,
              thumbnailUrl: `https://files.catbox.moe/ur13ps.jpeg`,
              sourceUrl: `https://whatsapp.com/channel/0029Vb22FT9HFxOzBtWOwT0X`,
              
mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '':               
    await conn.sendMessage(from,{image:{url: `https://i.ibb.co/7Qz57xb/IMG-20241219-WA0122.jpg `},caption: `*ALL MENU 🦕🤍*
＿＿＿＿＿＿＿＿＿＿＿＿



> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴍᴅ*`,

    });
                        break;
                    case '1':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/x75jdt.jpeg`},caption: `*👋🏻 HELLO ${pushname} This Is The Details About Me 🛡️*

＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

*│  ◦* *ʜᴇʟʟᴏ ɪ ᴀᴍ ᴋᴀᴠɪ ᴇxᴇ ᴠ1*🦕🤍
*│  ◦* *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋᴀᴠɪ ᴇxᴇ*📍
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴏᴘᴇʀꜱ* 🔗
＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿



> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴠɪ ᴇxᴇ*`,

    });

                        break;
                    case '2':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/bzr9d2.jpeg`},caption: `*👋🏻 HELLO ${pushname} My Repo Link*

*𝗞𝗔𝗩𝗜 𝗘𝗫𝗘 𝗩1 WA BOT 🦕🤍*

_https://github.com/kavi12345786/KAVI-EXE-V1?tab=readme-ov-file_

*FOR MORE INFORMATION ⚡*

JOIN : _https://chat.whatsapp.com/CQdbw2HVKrpEo0IdaOaUxi_
FOLLOW : _https://whatsapp.com/channel/0029Vb22FT9HFxOzBtWOwT0X_

*Thank You For Using This Bot 🙇🏻🤍*`,

    });

                        break;
                    default:
                        reply("Invalid option. Please select a valid option 🤤🤖");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
