const { command } = require("../lib");
const fs = require("fs");
const config = require("../config");

command(
  {
    pattern: "flex",
    fromMe: false,
    desc: "Displays bot control menu",
    type: "main",
  },
  async (message) => {
    try {
      // Bot configuration
      const prefix = config.PREFIX || ".";
      const botName = config.BOT_NAME || "FLEX AI";
      const ownerName = config.OWNER_NAME || "Davincs";
      const botVersion = config.VERSION || "1.0.0";

      // Menu image
      const menuImage =
        config.MENU_IMAGE_URL ||
        "https://files.catbox.moe/4q6vth.jpg";

      // Menu audio
      const audioFilePath = "./assets/menu.m4a";

      // Menu Text
      const menuText = `
╭━━━〔 *${botName}* 〕━━━╮
┃ PREFIX : ${prefix}
┃ OWNER  : ${ownerName}
┃ CORE : 2.56MGHf
╰━━━━━━━━━━━━━━━━━━╯

*Hellow there FLEX-AI user 👋
I'm FLEX-AI, the official WhatsApp assistant bot developed by Allan Davincs*

I’m here to help you with smart tasks, group management, image generation, fun games, and more — all through simple commands.

All my commands start with a prefix — by default, it’s a . (dot).
Example: .flex


---

📜 Common Commands

1️⃣ Information & Status

.flex        → Learn everything about FLEX-AI  
.ping        → Check if I’m online & my speed

2️⃣ Auto Features

.autotyping on/off       → Toggle automatic typing status  
.autorecording on/off    → Toggle automatic recording status  
.alwaysonline on/off     → Keep me online 24/7  
.auto_status_seen on/off → Auto-view statuses  
.auto_status_react on/off→ Auto-react to viewed statuses

3️⃣ Group & Privacy

.mode private/public  → Set my response mode  
.welcome on/off       → Greet new members automatically  
.antidelete on/off    → Recover deleted messages  
.antilink on/off      → Block unwanted links in group

4️⃣ Fun & Games

.binary       → Convert text to binary  
.rcolor       → Random color name  
.konami       → Special surprise  
.squidgame    → Squid Game challenge  
.guess        → Guess the number  
.count        → Count numbers  
.calculate    → Quick math calculations  
.coinflip     → Flip a coin  
.roll         → Roll a dice

5️⃣ Image & Logo Creation

AI Image Generation

.imagine <prompt>  
Generate AI images from your text prompt.  
Example: .imagine a futuristic city at sunset

Logo Menu

.naruto <text>  → Naruto-style anime text logo  
.hacker <text>  → Hacker-style green matrix effect  
.tatto <text>   → Tattoo-style artistic text  
.boom <text>    → Explosive boom-style text  
.bulb <text>    → Bulb-style glowing light text

6️⃣ Extra Tools

.flex      → Show FLEX-AI menu & info


---

✨ Example Usage

.flex → Learn what FLEX-AI can do

.imagine a dragon flying over mountains → Generate AI art

.hacker FLEX-AI → Create a hacker-style logo

.boom PARTY → Explosive boom-style text

.autoreact on → Start auto-reacting to messages

.calculate 12*45 → Instant math answer

`;

      // Send menu image with caption
      await message.sendFromUrl(menuImage, {
        caption: menuText,
      });

      // Send audio (if exists)
      if (fs.existsSync(audioFilePath)) {
        await message.sendMessage(
          fs.readFileSync(audioFilePath),
          { mimetype: "audio/mpeg", ptt: true },
          "audio"
        );
      }
    } catch (err) {
      console.error("Menu command error:", err);
      await message.reply("❌ Failed to load menu.");
    }
  }
);