const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
   const csure = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const botbilgi = new Discord.RichEmbed()
  .setColor('#e30b00')
   .setAuthor(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setFooter('Bessinger Bot \'Buyur benim istatistiklerim', bot.user.avatarURL)
  .addField("» **Botun Sahibi**", "[bessinger#9049]")
  .addField("»  **Geliştirici** ","[bessinger#9049]")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma süresi**", csure)
  .addField("» **Kullanıcılar**" , bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» **Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("» **Kanallar**", bot.channels.size.toLocaleString(), true)
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **Ping**", bot.ping+" ms", true)
 
   
 return message.channel.send(botbilgi);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'istatistik', 'bot-bilgi', 'bot-istatistik'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun Bilgilerini Gösterir.",
  usage: "istatistik"
};