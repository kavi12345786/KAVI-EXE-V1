const config = require('../settings');
const { cmd, commands } = require('../lib/command');

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

