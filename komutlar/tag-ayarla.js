const Discord = require('discord.js')
const fs = require('fs');
//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
  const db = require('quick.db');
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  
     if(args[0] === 'kapat') {
      
   if (db.has(`tagB_${message.guild.id}`) === true) {
   
     db.delete(`tagB_${message.guild.id}`)
    
     
     message.channel.send('Otomatik tag  kaldırıldı.')
     return
}
  message.channel.send(`Otomatik tag ayarlanmamış.`)
    return
  
  }
  

  let gM = args.slice(0).join(' ');
  
    if (!gM) {
        return message.reply('Lütfen ayarlamak istediğiniz tagı girin.')
    }
  
  


  
    var s = db.set(`tagB_${message.guild.id}`, gM)
  
    const embed = new Discord.RichEmbed()
    
    .setDescription(`${client.emojis.get(client.emojiler.evet)} Otomatik tag ayarlandı: ${gM}\nOtomatik tag  kapatmak isterseniz **${prefix}ototag kapat** yazmanız yeterlidir.`)
    .setColor("RANDOM")
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['oto-tag', 'ototag'],
    permLevel: 4,
    kategori: "ayarlar",
  };

  exports.help = {
    name: 'tag-ayarla',
    description: 'Sunucuya katılan üyeye otomatik tag verir',
    usage: 'tag-ayarla <tag>',
  };