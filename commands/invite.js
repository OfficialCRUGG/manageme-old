const Discord = require("discord.js");

module.exports.run = async (prefix, messageArray, cmd, bot, message, args, author, guild, lang, config) => {
  return message.channel.send(`${lang.inviteCommand}`)
}

module.exports.help = {
  name: "invite"
}
