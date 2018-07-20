const config = require("./config.json");
const tokenFile = require("./token.json")
const lang = require("./lang/en_us.json")
const logChannel = config.logChannel
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
    } else if(cmd === `${prefix}kick`) {
        let t = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!t) return message.channel.send(lang.cantFindUser);
        let reason = args.join(" ").slice(22);
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(lang.kick.noPerms)
        if(t.hasPermission("KICK_MEMBERS")) return message.channel.send(lang.kick.cantKickMods)

        let embed = new Discord.RichEmbed()
        .setTitle(lang.kick.logTitle)
        .setColor("#7289DA")
        .setThumbnail(t.avatarURL)
        .addField(lang.kick.logUser, `${t.user.username}#${t.user.discriminator}`)
        .addField(lang.kick.logReason, reason)
        .addField(lang.kick.logModerator, message.author)
        message.delete();
        t.user.createDM().then(dmchannel => {
          dmchannel.send(lang.kick.DM.part1 + " " + message.guild.guildName + " " + lang.kick.DM.part2 + " " + reason + " " + part3 + " " + message.author)
        });

        message.guild.member(t.user).kick(reason);
        let kickLogChannel = bot.channels.get(logChannel);
        kickLogChannel.send(embed);
    }

});

bot.login(tokenFile.token);
