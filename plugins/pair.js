const {cmd , commands} = require('../command')
       const {runtime, fetchJson} = require('../lib/functions')
       const config = require('../config')
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
            return reply("*Please provide a phone number. Usage: `.pire phone_number`*");
        }

        // Check if input is a valid phone number (with or without +)
        const phoneRegex = /^(\+?\d{1,3})?\d{9,}$/; 
        if (!phoneRegex.test(q)) {
            return reply("*Please provide a valid phone number with the country code. Example: 94760383959*");
        }

        // Fetch data
        const response = await fetchJson(`https://mypairv2-659abf9b8a50.herokuapp.com/code?number=${q}`);
        const code = response?.code;

        // Check if data is available
        if (code) {
	   await conn.sendMessage(from, {text:code }, { quoted: mek })
	   await conn.sendMessage(from, {text:`*Please connect the phone number ${q} within 1 minute.*` }, { quoted: mek })
	
        } else {
            reply("*No results found for the provided phone number.*");
        }
	m.react('✔')
    } catch (error) {
        reply("*An error occurred! Please try again.*");
        l(error);
    }
});

