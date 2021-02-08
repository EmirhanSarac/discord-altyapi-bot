const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (bot, message, args) => {
var prefix = ayarlar.prefix;             
    
  if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`);
  
	let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');
  
  if (message.mentions.users.size < 1) return message.channel.send(`Sunucudan atmam için istediğiniz kullanıcıyı etiketlemelisiniz; \`${prefix}at @Gnarge Uyarı\` `);
  if (user.id === message.author.id) return message.channel.send('Kendini atamazsın.');
if (user.position > message.member.roles.highest.position) return message.channel.send(`Bu kullanıcının senin rollerinden/rolünden daha yüksek rolleri/rolü var.`);
			    if (!reason) reason = 'Belirtilmemiş.'
    if (!user) return message.channel.send(`Etiketlediğin kullanıcıyı sunucuda bulamadım.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`Etiketlediğin kullanıcıyı sunucuda bulamadım.`)

 if (!message.guild.member(user).bannable) return message.channel.send(`Bu kişiyi sunucudan atamıyorum çünkü \`benden daha yüksek bir role sahip\` ya da \`bana gerekli yetkileri vermedin\`.`);

   if (!message.guild.member(user).bannable) return message.channel.send('Sunucudaki yetkilileri atamam!');
    message.guild.member(user).kick(reason);
message.channel.send(`<@${user.id}> **Adlı kullanıcı sunucudan atıldı!** **Sebep: \`${reason}\``)


};

exports.conf = {
  aliases: ['at'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'kick',
  description: 'Belirttiğiniz kişiyi sunucudan atar.',
  usage: 'kick <@kullanıcı> <sebep>',
 
};
