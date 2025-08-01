const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

cmd({
    pattern: "support",
    alias : "version",
    desc: " allmenu",
    category: "allmenu",
    react: "🫅",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let dec = `
┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃      ⚙️  ғʟᴇx ᴀɪ sᴜᴘᴘᴏʀᴛ ɪɴғᴏ      
┗━━━━━━━━━━━━━━━━━━━━━━━┛

👑 *𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓:* 𝐀𝐥𝐥𝐚𝐧 𝐃𝐚𝐯𝐢𝐧𝐜𝐬 🇹🇿  
🧠 *𝑩𝒐𝒕 𝒏𝒂𝒎𝒆:* 𝐅𝐋𝐄𝐗_𝐀𝐈  
🔧 *𝑴𝒐𝒅𝒆:* ${config.MODE}  
🪄 *𝑷𝒓𝒆𝒇𝒊𝒙:* ${config.PREFIX}  
💾 *RAM:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB  
⚡ *𝑽𝒆𝒓𝒔𝒊𝒐𝒏:* V.5.0  
⏱ *𝚞𝚙𝚝𝚒𝚖𝚎:* ${runtime(process.uptime())}

┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃     🌐 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗟𝗜𝗡𝗞𝗦     
┗━━━━━━━━━━━━━━━━━━━━━━━┛

📣 𝖶𝗁𝖺𝗍𝗌𝖺𝗉𝗉 𝖼𝗁𝖺𝗇𝗇𝖾𝗅

https://whatsapp.com/channel/0029VakSTEQGZNCk6CqE9E2P

👥 *WhatsApp Group:*  
🔗 https://chat.whatsapp.com/FbxfPXPLRlGJe1egJ8mivf


📩 *Support Contact:*  
🔗 wa.me/+255?text=Support!

┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃   🔴  𝔽𝕃𝔼𝕏_𝔸𝕀 | Meets clever  
┗━━━━━━━━━━━━━━━━━━━━━━━┛
${readMore}
`;

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/4q6vth.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363318767880951@newsletter',
                        newsletterName: '『𝐹𝐿𝐸𝑋-𝐴𝐼-𝐶𝑂𝑅𝐸』',
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
