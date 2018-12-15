const Discord = require("discord.js");


module.exports.run = async (prefix, messageArray, cmd, bot, message, args, author, guild, lang, config) => {
    message.delete();
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.guild.channel.send('No permission')
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return msg.channel.send('Invalid user given')
    if(bUser.id === bot.user.id) return message.guild.channel.send('Nope');
    let bReason = args.join(" ").slice(22);
    if(!bReason) bReason = "No reason given";
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("ohh. You can't ban a moderator")

    let banEmbed = new Discord.RichEmbed()
    .setColor("#bc0000")
    .setTitle(`🚫 Member banned from ${message.guild.name}`)
    .setDescription(`\`\`\`css\nTarget:${bUser.id}\nModerator: ${message.author.tag}\nReason: ${bReason}\nDuration: Permanent\`\`\``)
    .setFooter('Test')
    .setTimestamp();

    message.guild.member(bUser).ban(bReason);
   message.channel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
