const config = require("./config.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log(`${bot.user.username} has succesfully started!`)
    bot.user.setGame("with discord.js!");
});

bot.login(config.token);