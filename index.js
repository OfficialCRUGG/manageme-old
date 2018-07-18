const config = require("./botconfig.js");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log(`${bot.user.username} has succesfully started!`)
});

bot.login(config.token);