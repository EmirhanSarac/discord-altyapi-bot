const Discord = require('discord.js');
const fortnite = require('fortnitetracker-7days-stats');

exports.run = (client, message, args) => {
  
  const db = require('quick.db');
  let prefix = db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  
  
    if(args.length < 1){
        message.reply(`kullanımı ${prefix}fortnite pc <kullanıcı> `);
        return;
    }

  var name = args.slice(0).join(' ');
  
    var url = "https://fortnitetracker.com/profile/pc"
                                + encodeURIComponent(name);
    message.channel.startTyping();

    fortnite.getStats(name, "pc", (err, result) => {
        if(err){
            message.reply(`kullanımı ${prefix}fortnite pc <kullanıcı> `);
            message.channel.stopTyping();
            return;
        }
      
        var embed = new Discord.RichEmbed()
            .setAuthor(result.accountName, "", url)
            .setDescription('')
            .addField('Maçlar', result.wins)
            .addField('Toplam oyun', result.matches)
            .addField('Oran', ~~result.wr + "%")
            .addField('Toplam kill', + result.kills)
            .addField('kd', + result.kd)
            .setColor("RANDOM")
            .setURL(url)
            .setThumbnail(result.skinUrl);

        message.channel.stopTyping();
        message.channel.send(embed);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fortnite-istatistik'],
  permLevel: 0,
kategori: "oyun",
};

exports.help = {
  name: 'fortnite',
  description: 'İstediğiniz bir fortnite kullanıcısının istatistiklerini gösterir.',
  usage: 'fortnite pc <kullanıcı adı>',
 
};
