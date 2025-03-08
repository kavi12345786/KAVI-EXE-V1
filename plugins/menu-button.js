const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../lib/functions')

cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📄",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋🏻 හායි ${pushname}, 𝗜 𝗔𝗠 𝗞𝗔𝗩𝗜-𝗘𝗫𝗘 𝗩1🐋💗 WA BOT ♻️*

*Command Panel 💱*

*⏳ RAM USAGE -*${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
*⏰ UPTIME -* ${runtime(process.uptime())}

LIST OF MENU ❇️
*────────────────────────────────*
*| ➤ 1  || OWNER MENU*
*| ➤ 2  || CONVERT MENU*
*| ➤ 3  || MOVIE MENU*
*| ➤ 4  || DOWNLOAD MENU*
*| ➤ 5  || GROUP MENU*
*| ➤ 6  || ANIME MENU*
*| ➤ 7  || FUN MENU*
*| ➤ 8  || NEWS MENU*
*| ➤ 9  || BUG MENU*
*| ➤10 || OTHER MENU*
*────────────────────────────────*

_🔢 Reply The Number That You Want_

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴠɪ-ᴇxᴇ🐼💗`;

                  // Sending the image with caption
          const vv = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 0,
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
          newsletterName: '𝗞𝗔𝗩𝗜-𝗘𝗫𝗘🐋💗 ',
          newsletterJid: "120363366147331561@newsletter",
          },
          externalAdReply: {
              title: `𝗞𝗔𝗩𝗜-𝗘𝗫𝗘🐋💗 `,
              body: `🤖 ᴍᴀᴅᴇ ʙʏ ᴋᴀᴠɪ-ᴇxᴇ  🤖`,
              thumbnailUrl: `https://files.catbox.moe/yl8w0e.jpeg`,
              sourceUrl: ``,
              
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
                    case '1':               
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/yl8w0e.jpeg `},caption: `*＿＿＿＿[ ＯＷＮＥＲ  ＭＥＮＵ 🧑🏻‍💻 ]＿＿＿＿*


🍒 Command ➤ .restart
🗒️ Usage : To Restart All The Fuctions Of The Bot

🍒 Command ➤ .shutdown
🗒️ Usage : To Power Off The Bot

🍒 Command ➤ .broadcast
🗒️ Usage : To Sent a Broadcast Massage

🍒 Command ➤ .setpp
🗒️ Usage : To Change Bot Profile Pic

🍒 Command ➤ .forward
🗒️ Usage : To jid Share 

🍒 Command ➤ .block
🗒️ Usage : To Block a person

🍒 Command ➤ .unblock
🗒️ Usage : To Unblock a Person

🍒 Command ➤ .clearchats
🗒️ Usage : To Clear The All Chats

🍒 Command ➤ .jid
🗒️ Usage : To Get a Url of User Number

🍒 Command ➤ .gjid
🗒️ Usage : To Get a Url of Group Info

🍒 Command ➤ .settings
🗒️ Usage : To Change Bot Working Details

🍒 Command ➤ .about 
🗒️ Usage : To Bot About Chek

🍒 Command ➤ .update
🗒️ Usage : To update The bot

🍒 Command ➤ .pair
🗒️ Usage : To Bot Session Id

🍒 Command ➤ .ping
🗒️ Usage : To Bot Speed Test 

🍒 Command ➤ .ping2
🗒️ Usage : To Bot Speed Test 

🍒 Command ➤ .alive
🗒️ Usage : To Bot Online Chek

🍒 Command ➤ .system
🗒️ Usage : To Bot Uptime Chek



> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴠɪ-ᴇxᴇ🐼💗*`,

    });
                        break;
                    case '2':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/yl8w0e.jpeg `},caption: `*＿＿＿＿[ ＣＯＮＶＥＲＴ  ＭＥＮＵ 🔁 ]＿＿＿＿*



🍒 Command ➤ .convert
🗒️ Usage : 

🍒 Command ➤ .sticker2
🗒️ Usage : To Convert Image To sticker

🍒 Command ➤ .tts
🗒️ Usage : To Convert Text to Voice Massage

🍒 Command ➤ .qmake
🗒️ Usage : 

🍒 Command ➤ .readmore
🗒️ Usage : To Convert Small Text to Readmore

🍒 Command ➤ .sticker
🗒️ Usage : To Convert Image To Sticker

🍒 Command ➤ .vv
🗒️ Usage : To See One view Massage

🍒 Command ➤ .circle
🗒️ Usage : 

🍒 Command ➤ .crop
🗒️ Usage : To Crop a Image

🍒 Command ➤ .round
🗒️ Usage : 

🍒 Command ➤ .toaudio
🗒️ Usage : To Convert To a Audio

🍒 Command ➤ .toanime
🗒️ Usage : To Convert To a Anime

🍒 Command ➤ .currency
🗒️ Usage : 

🍒 Command ➤ .url
🗒️ Usage : To Get Image Url

🍒 Command ➤ .img2url
🗒️ Usage : To Get Image Url

🍒 Command ➤ .trt
🗒️ Usage : 



*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴠɪ ᴇxᴇ 🐼💗*`,
        
    });
                        break;
                    case '3':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/yl8w0e.jpeg `},caption: `*＿＿＿＿[ ＭＯＶＩＥ  ＭＥＮＵ 📽️ ]＿＿＿＿*



🍒 Command ➤ .movie
🗒️ Usage : To Get Urls Of the Movie

🍒 Command ➤ .cinesubz
🗒️ Usage : To Get Name Of the Movie

🍒 Command ➤ .sinhalasub
🗒️ Usage : To Get Name Of the Movie


> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴠɪ ᴇxᴇ 🐼💗*`,

    });
                        break;
                    case '4':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/yl8w0e.jpeg `},caption: `*＿＿＿＿[ ＤＯＷＮＬＯＡＤ  ＭＥＮＵ 📥 ]＿＿＿＿*



🍒 Command ➤ .song
🗒️ Usage : To Download a Song

🍒 Command ➤ .play
🗒️ Usage : To Download a Song

🍒 Command ➤ .video
🗒️ Usage : To Download a Video

🍒 Command ➤ .fb
🗒️ Usage : To Download a Fb Video

🍒 Command ➤ .tiktok
🗒️ Usage : To Download a Tiktok Video

🍒 Command ➤ .tiktok2
🗒️ Usage : To Download a Tiktok Video

🍒 Command ➤ .gdrive
🗒️ Usage : To Download Gdrive Document

🍒 Command ➤ .apkdl / .apk
🗒️ Usage : To Download Playstore Apk

🍒 Command ➤ .img 
🗒️ Usage : To Download Images From Google

🍒 Command ➤ .ig
🗒️ Usage : To Download a Instagram Video

🍒 Command ➤ .mediafire
🗒️ Usage : To Download Mediafire Document

🍒 Command ➤ .twitter
🗒️ Usage : To Download Twitter Videos

🍒 Command ➤ .xnxx
🗒️ Usage : To Download 18+ Videos

🍒 Command ➤ .xvideo
🗒️ Usage : To Download 18+ Videos

🍒 Command ➤ .mega
🗒️ Usage : To Download Mega Document

 🍒 Command ➤ gitclone
🗒️ Usage : To Get Git Cloned Document



> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴠɪ ᴇxᴇ 🐼💗*`,
        
    });
                        break;
                    case '5':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/yl8w0e.jpeg `},caption: `*＿＿[ ＧＲＯＵＰ  ＭＥＮＵ ☃️ ]＿＿*

🍒 Command ➤ .mute
🗒️ Usage : To Close The Group Chat

🍒 Command ➤ .unmute
🗒️ Usage : To Open The Group Chat

🍒 Command ➤ .promote
🗒️ Usage : To Give The Admin Of The Group

🍒 Command ➤ .demote
🗒️ Usage : To Dismiss As a Admin In The Group

🍒 Command ➤ .updategname
🗒️ Usage : To Change the group name

🍒 Command ➤ .add
🗒️ Usage : To Add a New Member To The Group

🍒 Command ➤ .join
🗒️ Usage : To Join a Group from Invite link

🍒 Command ➤ .kick
🗒️ Usage : To  Remove a Member From The Group

🍒 Command ➤ .leave
🗒️ Usage : To  leave  From The Group 

🍒 Command ➤ .setwelcome
🗒️ Usage :  To Set a Auto Welcome Massage For New Members

🍒 Command ➤ .setgoodbye
🗒️ Usage : To Set a Auto Goodbye Massage For Left Members

🍒 Command ➤ .admins
🗒️ Usage : To Tag The Admins

🍒 Command ➤ .groupdesc
🗒️ Usage : To Change Group Description

🍒 Command ➤ .ginfo
🗒️ Usage : To Identify Group Details

🍒 Command ➤ .grouplink
🗒️ Usage : To Get Group Link

🍒 Command ➤ .tagall
🗒️ Usage : To Tag The All The Members In Thr Group

🍒 Command ➤ .requests
🗒️ Usage : To Check Group Request Massages

🍒 Command ➤ .accept
🗒️ Usage : To Accept The Requested Members

🍒 Command ➤ .reject
🗒️ Usage : To Reject The Requested Members

🍒 Command ➤ .hidetag
🗒️ Usage : To Mention The Group Members

🍒 Command ➤ .lockgs
🗒️ Usage : To Lock The Group Chat

🍒 Command ➤ .unlockgs
🗒️ Usage : To Unlock The Group Chat

🍒 Command ➤ .poll
🗒️ Usage : To Create A Voting Pole

🍒 Command ➤ .getpic
🗒️ Usage : To Get The Group Icon / Pic


> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴠɪ ᴇxᴇ 🐼💗*`,
        
    });
                        break;
                    case '6':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/yl8w0e.jpeg `},caption: `*＿＿＿＿[ ＡＮＩＭＥ  ＭＥＮＵ 🧚🏻‍♀️ ]＿＿＿＿*



🍒 Command ➤ .animegirl1
🗒️ Usage : To Get a Anime Pic Of a Girl

🍒 Command ➤ .animegirl2
🗒️ Usage : To Get a Anime Pic Of a Girl

🍒 Command ➤ .animegirl3
🗒️ Usage : To Get a Anime Pic Of a Girl

🍒 Command ➤ .animegirl4
🗒️ Usage : To Get a Anime Pic Of a Girl

🍒 Command ➤ .animegirl5
🗒️ Usage : To Get a Anime Pic Of a Girl

🍒 Command ➤ .loli
🗒️ Usage : To Get a Anime Pic Of a Girl

🍒 Command ➤ .waifu
🗒️ Usage : To Get a Anime Pic Of a Girl

🍒 Command ➤ .neko
🗒️ Usage : To Get a Anime Pic Of a Girl

🍒 Command ➤ .megumin
🗒️ Usage : To Get a Anime Pic Of a Girl

🍒 Command ➤ .maid
🗒️ Usage : To Get a Anime Pic Of a Girl

🍒 Command ➤ .awoo
🗒️ Usage : To Get a Anime Pic Of a Girl



*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴠɪ ᴇxᴇ 🐼💗*`,

    });
                        break;
                    case '7':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/yl8w0e.jpeg `},caption: `*＿＿＿＿[ ＦＵＮ  ＭＥＮＵ 🎉 ]＿＿＿＿*



🍒 Command ➤ .anime1
🗒️ Usage : Use This Command To Get a Fun

🍒 Command ➤ .anime2
🗒️ Usage : Use This Command To Get a Fun

🍒 Command ➤ .anime3
🗒️ Usage : Use This Command To Get a Fun

🍒 Command ➤ .anime4
🗒️ Usage : Use This Command To Get a Fun

🍒 Command ➤ .anime5
🗒️ Usage : Use This Command To Get a Fun

🍒 Command ➤ .fact
🗒️ Usage : Use This Command To Get a Fun

🍒 Command ➤ .dog
🗒️ Usage : Use This Command To Get a Fun

🍒 Command ➤ .hack
🗒️ Usage : Use This Command To Get a Fun

🍒 Command ➤ .rvideo
🗒️ Usage : Use This Command To Get a Fun

🍒 Command ➤ .insult
🗒️ Usage : Use This Command To Get a Fun

🍒 Command ➤ .joke
🗒️ Usage : Use This Command To Get a Fun

🍒 Command ➤ .quote
🗒️ Usage : Use This Command To Get a Fun

🍒 Command ➤ .ronaldo
🗒️ Usage : Use This Command To Get a Fun



> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴠɪ ᴇxᴇ 🐼💗*`,
        
    });
                        break;
                    case '8':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/yl8w0e.jpeg `},caption: `*＿＿＿＿[ ＮＥＷＳ  ＭＥＮＵ 📃 ]＿＿＿＿*



🍒 Command ➤ .hirunews
🗒️ Usage : To Get Hiru News

🍒 Command ➤ .derananews
🗒️ Usage : To Get Derana News

🍒 Command ➤ .lankadeepa
🗒️ Usage : To Get Lankadeepa News

🍒 Command ➤ .siyathanews
🗒️ Usage : To Get Siyatha News

🍒 Command ➤ .itnnews
🗒️ Usage : To Get Itn News

🍒 Command ➤ .sirasanews
🗒️ Usage : To Get Sirasa News

🍒 Command ➤ .nethnews
🗒️ Usage : To Get Neth News



> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴠɪ ᴇxᴇ 🐼💗*`,
        
    });
                        break;
                    case '9':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/yl8w0e.jpeg `},caption: `*＿＿＿＿[ ＢＵＧ  ＭＥＮＵ 👾 ]＿＿＿＿*



🍒 Command ➤ .bug < Receiver Nu >
🗒️ Usage : To Attack A Person

🍒 Command ➤ .offline < Receiver Nu >
🗒️ Usage : To Attack A Person

🍒 Command ➤ .crash < Receiver Nu >
🗒️ Usage : To Attack A Person

🍒 Command ➤ .xkill < Receiver Nu >
🗒️ Usage : To Attack A Person



> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴠɪ ᴇxᴇ 🐼💗*`,

    });
                        break;
                    case '10':
    await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/yl8w0e.jpeg `},caption: `*＿＿＿＿[ ＯＴＨＥＲ  ＭＥＮＵ 🐋]＿＿＿＿*



🍒 Command ➤ .define
🗒️ Usage : 

🍒 Command ➤ .githubstalk
🗒️ Usage : 

🍒 Command ➤ .gpass
🗒️ Usage : 

🍒 Command ➤ .srepo
🗒️ Usage : 

🍒 Command ➤ .weather
🗒️ Usage :

🍒 Command ➤ .trt1
🗒️ Usage :  

🍒 Command ➤ .wiki
🗒️ Usage : 

🍒 Command ➤ .ss
🗒️ Usage : To Get a Screen Shot Of a Site



> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴠɪ ᴇxᴇ 🐼💗*`,
        
    });
 
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
