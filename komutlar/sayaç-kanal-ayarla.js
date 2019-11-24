const Discord = require('discord.js')
const fs = require('fs');
//var ayarlar = require('../ayarlar.json');
//let kanal = JSON.parse(fs.readFileSync("././jsonlar/sKanal.json", "utf8"));

exports.run = async (client, message, args) => {
//if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  const db = require('quick.db');
  

    let channel = message.mentions.channels.first() || message.guild.channels.find(c=>c.name===args.slice(0).join(' '))
    let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;


  
    if (!channel) {
        return message.reply('Lütfen ayarlamak istediğiniz kanalı etiketleyin')
    }

      if(args[0] === 'kapat') {
      
   if (db.has(`sKanal_${message.guild.id}`) === true) {
   
     db.delete(`sKanal_${message.guild.id}`)
     
       if (db.has(`sayac_${message.guild.id}`) === true) {
       db.delete(`sayac_${message.guild.id}`)
          message.channel.send('Sayaç kanalı ve sayaç başarıyla kaldırıldı')
         return
       }
     
     message.channel.send('Sayaç kanalı kaldırıldı.')
     return
}
  message.channel.send(`Sayaç kanalı ayarlanmamış.`)
    return
  
  }
  
    db.set(`sKanal_${message.guild.id}`, channel.id)
  
    const embed = new Discord.RichEmbed()
    .setDescription(`${client.emojis.get(client.emojiler.evet)} Sayaç kanalı başarıyla ayarlandı: ${channel}\nSayaç kanalını kapatmak isterseniz **${prefix}sayaçkanal kapat** yazmanız yeterlidir.`)
    .setColor("RANDOM")
    message.channel.send({embed})
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayaç-kanal-belirle', 'sayaçkanal'],
    permLevel: 4,
    kategori: "ayarlar",
}

exports.help = {
    name: 'sayaç-kanal-ayarla',
    description: 'Sayaç kanalını ayarlar.',
    usage: 'sayaç-kanal-ayarla <#kanal>',
}