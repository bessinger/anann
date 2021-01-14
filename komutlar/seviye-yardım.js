const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('🔔 Seviye Komutları')
.setTimestamp()
.addField('🎐 Seviye.', '**▫️** **Kullanım  s-seviye**')
.addField('🤿 Seviye Ayarlar.', '**▫️** **Kullanım   s-seviye-ayarlar**')
.addField('🥫 Seviye Top.', '**▫️** **Kullanım   s-seviye-top**')
.addField('🩸 Seviye Log.', '**▫️** **Kullanım   s-seviye-log**')
.addField('🧩 Seviye Rol.', '**▫️** **Kullanım < s-seviye-rol**')
.addField('🪕 Seviye Sınır.', '**▫️** **Kullanım   s-seviye-sınır**')
.addField('💐 Seviye XP.', '**▫️** **Kullanım   s-seviye-xp**')
.addField('📮 Seviye Rolleri.', '**▫️** **Kullanım   s-seviye-rolleri**')
.addField('❌ Seviye Sıfırla.', '**▫️** **Kullanım   s-seviye-sıfırla**')
.addField('🎰 NOT.', '**▫️** **Sistem Çok Uzun Olduğundan Dolayı 2 Yardım Koduna Ayrılmıştır. s-level2**')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'level',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili'
};