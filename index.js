const config = require("./config.json");
const tokenFile = require("./token.json")
const lang_us = require("./lang/en_us.json")
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log(`[INFO] ${bot.user.username} has succesfully started!`)
    bot.user.setActivity(config.acitivityText, {type: config.acitivityType});
    bot.user.setStatus(`${config.status}`)
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") {
        return message.channel.send(`${lang_us.noDmCommands}`);
    }

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let author = message.author

    if(cmd === `${prefix}invite`) {
        return message.channel.send(`${lang_us.inviteCommand}`);
    }
});

bot.login(tokenFile.token);