const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
	
  let kanal = message.mentions.channels.first() || message.guild.channels.find(c=>c.name===args.slice(0).join(' '))
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  
  
      if(args[0] === 'kapat') {
      
   if (db.has(`tagKanal_${message.guild.id}`) === true) {
   
     db.delete(`tagKanal_${message.guild.id}`)
    
     
     message.channel.send('Otomatik tag kanalı kaldırıldı.')
     return
}
  message.channel.send(`Otomatik tag kanalı ayarlanmamış.`)
    return
  
  }
  
  
  if (!kanal) { 
    var embedd = new Discord.RichEmbed()
                .setDescription(`Lütfen sunucuya katılan kişilerin isimlerinin başına eklenecek tagı yazınız.`)
              .setColor("RANDOM")
            message.channel.send({embed: embedd})
    return
  }

  db.set(`tagKanal_${message.guild.id}`, kanal.id)
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor("Tag Kayıtları kanalı başarıyla ayarlandı!")
  .setDescription(`Tag Kayıtları kanalı ${kanal} olarak ayarlandı.\nOtomatik tag kanalını kapatmak isterseniz **${prefix}tagkanal kapat** yazmanız yeterlidir.`)
  message.channel.send({embed: embed})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['set-tag-channel', 'tag-kanal', 'tagkanal'],
  permLevel: 4,
  kategori: 'ayarlar'
}

exports.help = {
  name: 'tag-kanal-ayarla',
  description: 'Tag kayıtlarının gönderileceği kanalı ayarlar.',
  usage: "tag-kanal-ayarla [#kanal/kanal adı]"
}