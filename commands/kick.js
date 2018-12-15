const Discord = require("discord.js");

module.exports.run = async (prefix, messageArray, cmd, bot, message, args, author, guild, lang, config) => {
/*
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
      let kickDM = lang.kick.DM
      kickDM.replace("{server}", message.guild.guildName);
      kickDM.replace("{reason}", reason);
      kickDM.replace("{moderator}", message.author);
      t.user.createDM().then(dmchannel => {
        dmchannel.send(kickDM)
      });
      setTimeout(t.kick(reason), 600)
      let kickLogChannel = bot.channels.get(logChannel);
      kickLogChannel.send(embed);
*/
}

module.exports.help = {
  name: "kick"
}
