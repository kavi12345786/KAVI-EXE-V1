const { exec } = require('child_process');
const config = require('../config');
const { updateEnv, readEnv } = require('../lib/database');
const EnvVar = require('../lib/mongodbenv');
const {cmd , commands} = require('../command')
const {sleep} = require('../lib/functions')

cmd({
    pattern: "update",
    alias: ["updateenv"],
    desc: "Check and update environment variables",
    category: "owner",
    filename: __filename,
},
async (conn, mek, m, { from, q, reply, isOwner }) => {
    if (!isOwner) return;

    if (!q) {
        return reply("🙇‍♂️ *Please provide the environment variable and its new value.* \n\nExample: `.update AUTO_READ_STATUS: true/false✅`");
    }

    // Find the position of the first colon or comma
    const colonIndex = q.indexOf(':');
    const commaIndex = q.indexOf(',');

    // Ensure we have a valid delimiter index
    const delimiterIndex = colonIndex !== -1 ? colonIndex : commaIndex;
    if (delimiterIndex === -1) {
        return reply("🫠 *Invalid format. Please use the format:* `.update KEY:VALUE`");
    }

    // Extract key and value
    const key = q.substring(0, delimiterIndex).trim();
    const value = q.substring(delimiterIndex + 1).trim();
    
    // Extract mode if provided
    const parts = value.split(/\s+/).filter(part => part.trim());
    const newValue = value; // Use the full value as provided by the user
    const mode = parts.length > 1 ? parts.slice(1).join(' ').trim() : '';
    
    const validModes = ['public', 'private', 'groups', 'inbox'];
    const finalMode = validModes.includes(mode) ? mode : '';

    if (!key || !newValue) {
        return reply("🫠 *Invalid format. Please use the format:* `.update KEY:VALUE`");
    }

    // Specific checks for MODE, ALIVE_IMG, and AUTO_READ_STATUS
    if (key === 'MODE' && !validModes.includes(newValue)) {
        return reply(`⚙️ *Invalid mode. Valid modes are: ${validModes.join(', ')}*`);
    }

    if (key === 'ALIVE_IMG' && !newValue.startsWith('https://')) {
        return reply("⚙️ *Invalid URL format. PLEASE GIVE ME IMAGE URL*");
    }
    
    if (key === 'AUTO_READ_STATUS' && !['true', 'false'].includes(newValue)) {
        return reply("⚙️ *Invalid value for AUTO_READ_STATUS. Please use `true` or `false`.*");
    }
    
    if (key === 'AUTO_STATUS_REPLY' && !['true', 'false'].includes(newValue)) {
        return reply("⚙️ *Invalid value for AUTO_STATUS_REPLY. Please use `true` or `false`.*");
    }
    
    if (key === 'AUTO_STATUS_MSG' && !['true', 'false'].includes(newValue)) {
        return reply("⚙️ *Invalid value for AUTO_STATUS_MSG. Please use `true` or `false`.*");
    }
    
    if (key === 'AUTO_STATUS_REACT' && !['true', 'false'].includes(newValue)) {
        return reply("⚙️ *Invalid value for AUTO_STATUS_REACT. Please use `true` or `false`.*");
    }
    
    if (key === 'AUTO_RECODING' && !['true', 'false'].includes(newValue)) {
        return reply("⚙️ *Invalid value for AUTO_RECODING. Please use `true` or `false`.*");
    }
    
    if (key === 'AUTO_TYPING' && !['true', 'false'].includes(newValue)) {
        return reply("⚙️ *Invalid value for AUTO_STATUS_TYPING. Please use `true` or `false`.*");
    }
    
    if (key === 'ANTI_CALL' && !['true', 'false'].includes(newValue)) {
        return reply("⚙️ *Invalid value for ANTI_CALL. Please use `true` or `false`.*");
    }

    if (key === 'AUTO_REACT' && !['true', 'false'].includes(newValue)) {
        return reply("⚙️ *Invalid value for AUTO_REACT. Please use `true` or `false`.*");
    }
    
    if (key === 'OWNER_REACT' && !['true', 'false'].includes(newValue)) {
        return reply("⚙️ *Invalid value for OWNER_REACT. Please use `true` or `false`.*");
    }
    
    if (key === 'HEART_REACT' && !['true', 'false'].includes(newValue)) {
        return reply("⚙️ *Invalid value for HEART_REACT. Please use `true` or `false`.*");
    }
    
    if (key === 'READ_CMD' && !['true', 'false'].includes(newValue)) {
        return reply("⚙️ *Invalid value for READ_CMD. Please use `true` or `false`.*");
    }
    
        if (key === 'AUTO_BIO' && !['true', 'false'].includes(newValue)) {
        return reply("⚙️ *Invalid value for AUTO_BIO. Please use `true` or `false`.*");
    }
    
    try {
        // Check if the environment variable exists
        const envVar = await EnvVar.findOne({ key: key });

        if (!envVar) {
            // If the variable does not exist, fetch and list all existing env vars
            const allEnvVars = await EnvVar.find({});
            const envList = allEnvVars.map(env => `${env.key}: ${env.value}`).join('\n');
            return reply(`❌ *The environment variable ${key} does not exist.*\n\n*Here are the existing environment variables:*\n\n${envList}`);
        }

        // Update the environment variable
        await updateEnv(key, newValue, finalMode);
        reply(`✅ *Environment variable updated.*\n\n🗃️ *${key}* ➠ ${newValue} ${finalMode ? `\n*Mode:* ${finalMode}` : ''}`);
        
    } catch (err) {
        console.error('Error updating environment variable:' + err.message);
        reply("🙇‍♂️ *Failed to update the environment variable. Please try again.*" + err);
    }
});


/////Ownergesttingekapkothokariy///////
cmd({
    pattern: "settings",
    alias: ["setting"],
    desc: "Check bot online or not.",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isOwner) return;

        const config = await readEnv();

        let work;
        switch (config.MODE) {
            case 'public':
                work = 'ᴘᴜʙʟɪᴄ ♻';
                break;
            case 'private':
                work = 'ᴘʀɪᴠᴀᴛᴇ 👤';
                break;
            case 'groups':
                work = 'ᴏɴʟʏ ɢʀᴏᴜᴘ 👥';
                break;
            case 'inbox':
                work = 'ᴏɴʟʏ ɪɴʙᴏx 🛡️';
                break;
            default:
                work = 'ᴜɴᴋɴᴏᴡɴ 🛑';
        }


        const vv = await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/x75jdt.jpeg' },
            caption: `𝗞𝗔𝗩𝗜 𝗘𝗫𝗘 𝗩1 🐋💗 𝗩𝗔𝗥𝗜𝗔𝗕𝗟𝗘 𝗖𝗛𝗔𝗡𝗚𝗘⚙️

⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌
| 01 | 𝗕𝗢𝗧 𝗪𝗢𝗥𝗞 𝗠𝗢𝗗𝗘 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
1.1 ➜ Public Mode
1.2 ➜ Private Mode
1.3 ➜ Only Group Mode
1.4 ➜ Only Inbox Mode
⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌
| 02 | 𝗔𝗨𝗧𝗢 𝗦𝗧𝗔𝗧𝗨𝗦 𝗦𝗘𝗘𝗡
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
2.1 Auto Status Seen True🔑
2.2 Auto Status Seen False🔒
⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌
| 03 | 𝗔𝗨𝗧𝗢 𝗕𝗜𝗢
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
3.1 Auto Bio True🔑
3.2 Auto Bio False🔒
⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌
| 04 | 𝗔𝗨𝗧𝗢 𝗧𝗬𝗣𝗜𝗡𝗚 𝗠𝗢𝗗𝗘
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
4.1 Auto Typing Mode On🔑
4.2 Auto Typing Mode Off🔒
⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌
| 05 | 𝗔𝗨𝗧𝗢 𝗥𝗘𝗖𝗢𝗥𝗗𝗜𝗡𝗚 𝗠𝗢𝗗𝗘
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
5.1 Auto Recording Mode On🔑
5.2 Auto Recording Mode Off🔒
⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌
| 06 | 𝗔𝗡𝗧𝗜 𝗖𝗔𝗟𝗟 𝗠𝗢𝗗𝗘
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
6.1 Anti Call Mode On🔑
6.2 Anti Call Mode Off🔒
⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌
| 07 | 𝗔𝗨𝗧𝗢 𝗦𝗧𝗔𝗧𝗨𝗦 𝗥𝗘𝗔𝗖𝗧
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
7.1 Auto Status React True🔑
7.2 Auto Status React False🔒
⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌⚌

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀᴠɪ-ᴇxᴇ🐼💗*
`,
                
        }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        reply(".update MODE:public" );
                        reply(".restart");
                        break;
                    case '1.2':               
                        reply(".update MODE:private");
                        reply(".restart");
                        break;
                    case '1.3':               
                          reply(".update MODE:group");
                        reply(".restart");
                      break;
                    case '1.4':     
                        reply(".update MODE:inbox");
                        reply(".restart");
                    break;
                    case '2.1':    
                        reply(".update AUTO_READ_STATUS:true");
                        reply(".restart");
                    break;
                    case '2.2':    
                        reply(".update AUTO_READ_STATUS:false");
                        reply(".restart");
                    break;
                    case '3.1': 
                    reply(".update AUTO_BIO:true");
                    reply(".restart");
                    break;
                    case '3.2': 
                    reply(".update AUTO_BIO:false");
                    reply(".restart");
                    break;
                    case '4.1': 
                    reply(".update AUTO_TYPING:true");
                    reply(".restart");
                    break;
                    case '4.2': 
                    reply(".update AUTO_TYPING:false");
                    reply(".restart");
                    break;
                    case '5.1':      
                        reply(".update AUTO_RECORDING:true");
                        reply(".restart");
                    break;
                    case '5.2':   
                        reply(".update AUTO_RECORDING:false");
                        reply(".restart");                    
                    break;
                    case '7.1':   
                        reply(".update AUTO_REACT_STATUS:true");
                        reply(".restart");
                    break;
                    case '7.2':   
                        reply(".update AUTO_REACT_STATUS:false");
                        reply(".restart");
                    break;
                    case '8.1':   
                        reply(".update AUTO_REACT:true");
                        reply(".restart");
                    break;
                    case '8.2':   
                        reply(".update AUTO_REACT:false");
                        reply(".restart");
                    break;
                    case '6.1':   
                        reply(".update ANTI_CALL:true");
                        reply(".restart");
                    break;
                    case '6.2':   
                        reply(".update ANTI_CALL:false");
                        reply(".restart");
                    break;
                    case '10.1':   
                        reply(".update OWNER_REACT:true");
                        reply(".restart");
                    break;
                    case '10.2':   
                        reply(".update OWNER_REACT:false");
                        reply(".restart");
                    break;
                    case '11.1':   
                        reply(".update HEART_REACT:true");
                        reply(".restart");
                    break;
                    case '11.2':   
                        reply(".update HEART_REACT:false");
                        reply(".restart");
                    break;
                    case '':   
                        reply(".update READ_CMD:true");
                        reply(".restart");
                                        break;
                    case '':   
                        reply(".update READ_CMD:false");
                        reply(".restart");
                    
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
