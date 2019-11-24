const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {

  const db = require('quick.db');
  

    
  if (!message.guild.members.get(client.user.id).hasPermission("BAN_MEMBERS")) return message.reply('Gerekli izin yok')
  //if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`);
  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  //let modLog = JSON.parse(fs.readFileSync("./jsonlar/mLog.json", "utf8"));
  if (db.has(`mLog_${message.guild.id}`) === false) return message.reply('Mod log kanalı ayarlanmamış');
  let modlog = message.guild.channels.get(db.fetch(`mLog_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.reply('Lütfen banlamak istediğiniz üyeyi etiketleyin');
  if (reason.length < 1) return message.reply('Lütfen sebep giriniz');
  if (user.id === message.author.id) return message.reply('Kendinimi banlayacaksın?');
  /*if (user.highestRole.calculatedPosition > message.member.highestRole.calculatedPosition - 1) {
			return message.reply(`Bu kişinin senin rollerinden/rolünden daha yüksek rolleri/rolü var.`);
		}*/
  //if (!message.guild.member(user).bannable) return message.channel.send(`Bu kişiyi sunucudan yasaklayamıyorum çünkü \`benden daha yüksek bir role sahip\` ya da \`bana gerekli yetkileri vermedin\`.`);
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('İşlem', 'Ban')
  .addField('Banlanan üye', `${user.tag} (${user.id})`)
  .addField('Banlayan yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('Ban sebebi', "```" + reason + "```")
  modlog.send(embed);
  
   //if (!message.guild.member(user).bannable) return message.reply('Yetkilileri yasaklayamam!');
  message.guild.ban(user, 2);
  
  const embed2 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`Başarıyla banlandı`)
  message.channel.send(embed2)
    
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban'],
  permLevel: 3,
    kategori: "moderasyon",
};

exports.help = {
  name: 'yasakla',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'yasakla <@kullanıcı> <sebep>',
 
};