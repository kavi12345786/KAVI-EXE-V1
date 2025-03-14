const { cmd, commands } = require('../lib/command')
const config = require('../settings')
var { get_set , input_set } = require('../lib/set_db') 
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')
var BOTOW = ''
if(config.LANG === 'SI') BOTOW = "*ඔබ Bot\'s හිමිකරු හෝ  උපපරිපාලක නොවේ !*"
else BOTOW = "*You are not bot\'s owner or moderator !*"

var N_FOUND =''
if(config.LANG === 'SI') N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
else N_FOUND = "*I couldn't find anything :(*"

var alredy = ''
if(config.LANG === 'SI') alredy = "*මෙම සැකසුම දැනටමත් යාවත්කාලීන කර ඇත !*"
else alredy = "*This setting alredy updated !*"
//---------------------------------------------------------------------------


cmd({
    pattern: "statusreply",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.AUTO_STATUS_REPLY == 'true') return reply('already antidelete is on ')
  await input_set('AUTO_STATUS_REPLY' , 'true')
  return reply('status reply turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_STATUS_REPLY !== 'true') return reply('already antidelete is off')
  await input_set('AUTO_STATUS_REPLY' , 'false')
  return reply('status reply turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	

//========================================
cmd({
    pattern: "statusmsg",
    react: "🗣️",
    desc: "To Set status Message",
    category: "main",
    use: '.statusrmsg .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isMe) return await reply(BOTOW)
    if ( config.AUTO_STATUS_MSG == q) return reply(`Succesfully Set status reply`)
  await input_set('AUTO_STATUS_MSG' , q)
  return reply(`status msg was changed`)
} catch (e) {
reply('*Error !!*')
l(e)
}
})



cmd({
    pattern: "setprefix",
    react: "🗣️",
    desc: "To change bot prefix",
    category: "main",
    use: '.setprefix .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isMe) return await reply(BOTOW)
    if ( config.PREFIX == q) return reply(alredy)
  await input_set('PREFIX' , q)
  return reply(`prefix was changed to`)
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "setlogo",
    react: "🗣️",
    desc: "To change bot logo",
    category: "main",
    use: '.setlogo logo url .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isMe) return await reply(BOTOW)
    if ( config.LOGO == q) return reply(alredy)
  await input_set('LOGO' , q)
  return reply(`Logo was changed to`)
} catch (e) {
reply('*Error !!*')
l(e)
}
})	

//=====================================
cmd({
    pattern: "onlygroup",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ONLY_GROUP == 'true') return reply('already Only Group is on ')
  await input_set('ONLY_GROUP' , 'true')
  return reply('Only Group turned on')
  }
if ( q == 'off' ) {
   if ( config.ONLY_GROUP !== 'true') return reply('already Only Group is off')
  await input_set('ONLY_GROUP' , 'false')
  return reply('Only Group turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})		  

//=======================================
cmd({
    pattern: "onlyme",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ONLY_ME == 'true') return reply('already Only Me is on ')
  await input_set('ONLY_ME' , 'true')
  return reply('Only Me turned on')
  }
if ( q == 'off' ) {
   if ( config.ONLY_ME !== 'true') return reply('already Only Me is off')
  await input_set('ONLY_ME' , 'false')
  return reply('Only Me turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})		  

//===============================
	
cmd({
    pattern: "antidelete",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ANTI_DELETE == 'true') return reply('already antidelete is on ')
  await input_set('ANTI_DELETE' , 'true')
  return reply('Antidelete turned on')
  }
if ( q == 'off' ) {
   if ( config.ANTI_DELETE !== 'true') return reply('already antidelete is off')
  await input_set('ANTI_DELETE' , 'false')
  return reply('Antidelete turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	


cmd({
    pattern: "anticall",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ANTI_CALL == 'true') return reply('already anticall is on ')
  await input_set('ANTI_CALL' , 'true')
  return reply('Anticall turned on')
  }
if ( q == 'off' ) {
   if ( config.ANTI_CALL !== 'true') return reply('already anticall is off')
  await input_set('ANTI_CALL' , 'false')
  return reply('Anticall turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

//=========================================

cmd({
    pattern: "autobio",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.AUTO_BIO == 'true') return reply('already on ')
  await input_set('AUTO_BIO' , 'true')
  return reply('autobio turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_BIO !== 'true') return reply('already off')
  await input_set('AUTO_BIO' , 'false')
  return reply('autobio turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})
//==============================

cmd({
    pattern: "antibot",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ANTI_BOT == 'true') return reply('already on ')
  await input_set('ANTI_BOT' , 'true')
  return reply('antibot turned on')
  }
if ( q == 'off' ) {
   if ( config.ANTI_BOT !== 'true') return reply('already off')
  await input_set('ANTI_BOT' , 'false')
  return reply('antibot turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "antilink",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ANTI_LINK == 'true') return reply('already on ')
  await input_set('ANTI_LINK' , 'true')
  return reply('antilink turned on')
  }
if ( q == 'off' ) {
   if ( config.ANTI_LINK !== 'true') return reply('already off')
  await input_set('ANTI_LINK' , 'false')
  return reply('antilink turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

	  
cmd({
    pattern: "antibad",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ANTI_BAD == 'true') return reply('already on ')
  await input_set('ANTI_BAD' , 'true')
  return reply('antibad turned on')
  }
if ( q == 'off' ) {
   if ( config.ANTI_BAD !== 'true') return reply('already off')
  await input_set('ANTI_BAD' , 'false')
  return reply('antibad turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	


cmd({
    pattern: "autostatus",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.AUTO_READ_STATUS == 'true') return reply('already on ')
  await input_set('AUTO_READ_STATUS' , 'true')
  return reply('autostatus turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_READ_STATUS !== 'true') return reply('already off')
  await input_set('AUTO_READ_STATUS' , 'false')
  return reply('autostatus turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "autotyping",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.AUTO_TYPING == 'true') return reply('already on ')
  await input_set('AUTO_TYPING' , 'true')
  return reply('autotyping turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_TYPING !== 'true') return reply('already off')
  await input_set('AUTO_TYPING' , 'false')
  return reply('autotyping turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	

cmd({
    pattern: "autorecording",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.AUTO_RECORDING == 'true') return reply('already on ')
  await input_set('AUTO_RECORDING' , 'true')
  return reply('autorecording turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_RECORDING !== 'true') return reply('already off')
  await input_set('AUTO_RECORDING' , 'false')
  return reply('autorecording turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	

cmd({
    pattern: "autoread",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.AUTO_READ == 'true') return reply('already on ')
  await input_set('AUTO_READ' , 'true')
  return reply('autoread turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_READ !== 'true') return reply('already off')
  await input_set('AUTO_READ' , 'false')
  return reply('autoread turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	


cmd({
    pattern: "cmdread",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.READ_CMD_ONLY == 'true') return reply('already on ')
  await input_set('READ_CMD_ONLY' , 'true')
  return reply('cmdread turned on')
  }
if ( q == 'off' ) {
   if ( config.READ_CMD_ONLY !== 'true') return reply('already off')
  await input_set('READ_CMD_ONLY' , 'false')
  return reply('cmdread turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	

cmd({
    pattern: "autoreact",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.HEART_REACT == 'true') return reply('already on ')
  await input_set('HEART_REACT' , 'true')
  return reply('Heartreact turned on')
  }
if ( q == 'off' ) {
   if ( config.HEART_REACT !== 'true') return reply('already off')
  await input_set('HEART_REACT' , 'false')
  return reply('Heartreact turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	



cmd({
    pattern: "alwaysonline",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ALWAYS_ONLINE == 'true') return reply('already on ')
  await input_set('ALWAYS_ONLINE' , 'true')
  return reply('alwaysonline turned on')
  }
if ( q == 'off' ) {
   if ( config.ALWAYS_ONLINE !== 'true') return reply('already off')
  await input_set('ALWAYS_ONLINE' , 'false')
  return reply('alwaysonline turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	

cmd({
    pattern: "autoblock",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.AUTO_BLOCK == 'true') return reply('already on ')
  await input_set('AUTO_BLOCK' , 'true')
  return reply('Auto block turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_BLOCK !== 'true') return reply('already off')
  await input_set('AUTO_BLOCK' , 'false')
  return reply('Auto block turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})	

cmd({
    pattern: "statusreact",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if (!isMe) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.AUTO_REACT_STATUS == 'true') return reply('already on ')
  await input_set('AUTO_REACT_STATUS' , 'true')
  return reply('statusreact turned on')
  }
if ( q == 'off' ) {
   if ( config.AUTO_REACT_STATUS !== 'true') return reply('already off')
  await input_set('AUTO_REACT_STATUS' , 'false')
  return reply('statusreact turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})		

 
