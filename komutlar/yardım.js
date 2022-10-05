const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;

//GENEL KOMUTU
    if(args[0] === "Genel" || args[0] === "genel" || args[0] === "General" || args[0] === "general") {
              let Genel = new Discord.EmbedBuilder()
              .setAuthor({ name: 'Genel', iconURL: `${message.author.displayAvatarURL()}`, url: 'https://discord.gg/T2jXbtBjwj' })
              .setColor('#2667FF')
              .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Genel').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
             .setFooter({ text: `Bu komutu kullanan kullanıcı ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
        return message.channel.send({embeds : [Genel]});
         
       
       return;
    }
    //SUNUCU KOMUTU
      if(args[0] === "Sunucu" || args[0] === "sunucu") {
              let Sunucu = new Discord.EmbedBuilder()
              .setAuthor({ name: 'Sunucu', iconURL: `${message.author.displayAvatarURL()}`, url: 'https://discord.gg/T2jXbtBjwj' })
              .setColor('#2667FF')
              .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sunucu').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
             .setFooter({ text: `Bu komutu kullanan kullanıcı ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
                   return message.channel.send({embeds : [Sunucu]});
         
      

       return;
    }
//EĞLENCE KOMUTU
  if(args[0] === "Eğlence" || args[0] === "eğlence" || args[0] === "Fun" || args[0] === "fun") {
   let Eğlence = new Discord.EmbedBuilder()
   .setAuthor({ name: 'Eğlence', iconURL: `${message.author.displayAvatarURL()}`, url: 'https://discord.gg/T2jXbtBjwj' })
   .setColor('#2667FF')
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Eğlence').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
  .setFooter({ text: `Bu komutu kullanan kullanıcı ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
        return message.channel.send({embeds : [Eğlence]});
  
      
           return;
  }
  //MODERASYON KOMUTU
  if(args[0] === "Moderasyon" || args[0] === "moderasyon" || args[0] === "moderation" || args[0] === "Moderation") {
   let Moderasyon = new Discord.EmbedBuilder()
   .setAuthor({ name: 'Moderasyon', iconURL: `${message.author.displayAvatarURL()}`, url: 'https://discord.gg/T2jXbtBjwj' })
   .setColor('#2667FF')
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Moderasyon').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
  .setFooter({ text: `Bu komutu kullanan kullanıcı ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
       return message.channel.send({embeds : [Moderasyon]});
             
       
               return;
  }
     //SAHİP KOMUTU
  if(args[0] === "Sahip" || args[0] === "sahip" ) {
    let Sahip = new Discord.EmbedBuilder()
    .setAuthor({ name: 'Sahip', iconURL: `${message.author.displayAvatarURL()}`, url: 'https://discord.gg/T2jXbtBjwj' })
    .setColor('#2667FF')
    .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sahip').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
   .setFooter({ text: `Bu komutu kullanan kullanıcı ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });

         return message.channel.send({embeds : [Sahip]});
              
        
                return;
   }

//YARDIM KOMUTU
  
  let embed = new Discord.EmbedBuilder()
  .setAuthor({ name: 'Yardım', iconURL: `${message.author.displayAvatarURL()}`, url: 'https://discord.gg/T2jXbtBjwj' })
  .setColor('#FFFB05')
  .setDescription(`**Örnek Kullanım:** \`${prefix}yardım Kategori\` \n **Örnek:** \`${prefix}yardım Genel\``)
	.addFields(
		{ name: 'Kategoriler', value:'Tüm kategoriler'},
		{ name: `${prefix}yardım Genel`, value: 'Genel komutlar', inline: false },
		{ name: `${prefix}yardım Eğlence`, value: 'Eğlence komutları', inline: false },
    { name: `${prefix}yardım Moderasyon`, value: 'Moderasyon komutları', inline: false },
		{ name: `${prefix}yardım Sunucu`, value: 'Sunucu komutları', inline: false },
		{ name: `${prefix}yardım Sahip`, value: 'Sahip komutları', inline: false },

	)

  .setFooter({ text: `Bu komutu kullanan kullanıcı ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });

  return message.channel.send({embeds : [embed]});

  
}
    
//EMİRHAN SARAÇ TARAFINDAN YAPILMIŞTIR 2021 DE YENİLENMİŞTİR!

  exports.conf = {
    aliases: ['help', 'cmds', 'komutlar','y'], //Komutun farklı yazılışlarla kullanımları
    permLevel: 0, //Komutun kimler kullanacağını belirtir (bot.js dosyasından en aşağı inerseniz gerekli yeri görürsünüz)
    kategori: "Genel" //Yardım komutunda hangi kategoride gözükeceğini ayarlarsınız

  };

  exports.help = {
    name: 'yardım',  //adını belirtin (kullanmak için gereken komut) Örneğin Otorol
    description: 'Komutlar hakkında bilgi verir.', //Komutun açıklaması
    usage: 'yardım', //Komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
  };

  /*
############################################################################
#                           Discord Bot Altyapı v14                         #
#               https://github.com/EmirhanSarac/discord-altyapi-bot         #
############################################################################
*/
