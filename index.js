const config = require("./config.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log(`${bot.user.username} has succesfully started!`)
    bot.user.setActivity('you!', { type: 'WATCHING'} );
    bot.user.setStatus('dnd')
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") {
        return message.channel.send("Commands via DMs are work in progress");
    }

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}invite`) {
        return message.channel.send("An official invite is currently not avalible.\n\nYou can also grab our source code here: https://github.com/OfficialCRUGG/manageme")
    }
});

bot.login(config.token);