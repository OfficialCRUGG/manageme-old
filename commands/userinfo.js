const Discord = require("discord.js");


module.exports.run = async (prefix, messageArray, cmd, bot, message, args, author, guild, lang, config) => {
      //let gicon = message.guild.iconURL;
      //let gname = message.guild.name;
      let user = message.mentions.users.first();
      let embed = new Discord.RichEmbed()
      embed.setTitle(user.username + lang.userInformation.title)
      embed.setColor()
      embed.setThumbnail(user.avatarURL)
      embed.setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
      embed.addField(lang.userInformation.info.userName, user.tag)
      embed.addField(lang.userInformation.info.createdAt, user.createdAt)
      embed.addField(lang.userInformation.info.userID, user.id)
      if(user.presence.status == "online") {
          embed.addField(lang.userInformation.info.status, lang.userInformation.statuses.online)
      } else if(user.presence.status == "offline") {
          embed.addField(lang.userInformation.info.status, lang.userInformation.statuses.offline)
      } else if(user.presence.status == "dnd") {
          embed.addField(lang.userInformation.info.status, lang.userInformation.statuses.dnd)
      } else if(user.presence.status == "idle") {
          embed.addField(lang.userInformation.info.status, lang.userInformation.statuses.idle)
      } else {
          embed.addField(lang.userInformation.info.status, "Error")
      }
      if(user.presence.game == null) {

      } else {
          embed.addField(lang.userInformation.info.game, user.presence.game.name)
      }

      return message.channel.send(embed);
}

module.exports.help = {
  name: "userinfo"
}
