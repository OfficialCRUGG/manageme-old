const Discord = require("discord.js");

module.exports.run = async (prefix, messageArray, cmd, bot, message, args, author, guild, lang, config) => {
  let embed = new Discord.RichEmbed()
  .setTitle(lang.help.title)
  .setColor(config.mainColor)
  .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
  .addField(config.prefix + "invite", lang.help.commandDescriptions.invite)
  .addField(config.prefix + "guildinfo", lang.help.commandDescriptions.guildinfo)
  .addField(config.prefix + "userinfo", lang.help.commandDescriptions.userinfo)
  return message.channel.send(embed);
}

module.exports.help = {
  name: "help"
}
