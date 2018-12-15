const Discord = require("discord.js");

module.exports.run = async (prefix, messageArray, cmd, bot, message, args, author, guild, lang, config) => {
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

module.exports.help = {
  name: "guildinfo"
}
