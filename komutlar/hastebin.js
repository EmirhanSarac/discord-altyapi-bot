const hastebin = require('hastebin-gen');
const Discord = require('discord.js')

exports.run = (client, message, args) => {
  if(message.channel.type !== "text") return;
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Dm`ni Kontrol Edermisin ?:postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
    const hastEmb = new Discord.RichEmbed()
 hastebin(args.join(' '), "js").then(r => {
      var hastLink = r
      const hastEmb = new Discord.RichEmbed()
      .setColor(0xFFF000)
      .setURL(hastLink)
      .addField('Link: ', `${hastLink}`)
      .setFooter('Gnarge Bot | Hastebin Sistemi')
       return message.author.sendEmbed(hastEmb)
  }).catch(console.error);  
   
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
     kategori: "Kullanıcı"

};

exports.help = {
  name: 'hastebin',
  description: 'Hastebine kod/cümle yüklersiniz.',
  usage: 'hastebin [kod/cümle]'
};
