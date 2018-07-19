const config = require("./config.json");
const tokenFile = require("./token.json")
const lang = require("./lang/en_us.json")
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
        return message.channel.send(`${lang.noDmCommands}`);
    }

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let author = message.author

    if(cmd === `${prefix}invite`) {
        return message.channel.send(`${lang.inviteCommand}`);
    } else if(cmd === `${prefix}guildinfo`) {
        let gicon = message.guild.iconURL;
        let gname = message.guild.name;
        let embed = new Discord.RichEmbed()
        .setTitle(gname + lang.guildInformation.title)
        .setColor("#7289DA")
        .setThumbnail(gicon)
        .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
        .addField(lang.guildInformation.info.guildName, message.guild.name)
        .addField(lang.guildInformation.info.createdAt, message.guild.createdAt)
        .addField(lang.guildInformation.info.guildID, message.guild.id)
        .addField(lang.guildInformation.info.memberCount, message.guild.memberCount)
        .addField(lang.guildInformation.info.owner, message.guild.owner.user.username + "#" + message.guild.owner.user.discriminator)
        .addField(lang.guildInformation.info.region, message.guild.region)

        return message.channel.send(embed);
    }
});

bot.login(tokenFile.token);