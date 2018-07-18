const config = require("./config.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log(`${bot.user.username} has succesfully started!`)
    bot.user.setActivity('you!', { type: 'WATCHING'} );
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") {
        return message.channel.send("Commands via DMs are work in progress");
    }
});

bot.login(config.token);