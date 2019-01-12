const { RichEmbed } = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

exports.run = async(client, message, args) => {
    var aylar = {
      "01": "Ocak",
      "02": "Şubat",
      "03": "Mart",
      "04": "Nisan",
      "05": "Mayıs",
      "06": "Haziran",
      "07": "Temmuz",
      "08": "Ağustos",
      "09": "Eylül",
      "10": "Ekim",
      "11": "Kasım",
      "12": "Aralık"
    }
    var duration = moment.duration(client.uptime).format(" D [gün] H [saat] m [dakika] s [saniye]")
    let rol = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(rol => rol.id === args[0]);
    if (!args[0]) {
        var embed = new RichEmbed()
          .setDescription(`Doğru kullanım: prefixin!rol-bilgi [@rol]`)
          .setColor(client.ayarlar.renk)
          .setTimestamp()
        var embed = new RichEmbed()
            .setColor(client.ayarlar.renk)
            .addField(`Rol İsmi`, `${args[0]}`, true)
            .addField('Role Sahip Kullanıcı(lar)', rol.members.size, true)
            .addField('Rolün Rengi', rol.hexColor, true)
            .addField('Oluşturulma Tarihi', `${moment(rol.createdAt).format('DD')} ${aylar[moment(rol.createdAt).format('MM')]} ${moment(rol.createdAt).format('YYYY HH:mm:ss')}`, true)
            .addField('ID', rol.id, true);
    return message.channel.send({
        embed: embed
    });
}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rolbilgi", "rolara", "rol-ara", "role-info", "roleinfo", "search-role", "searchrole"],
  permLevel: 0,
}

exports.help = {
  name: 'rol-bilgi',
  description: 'Etiketlediğiniz rol hakkında bilgi alırsınız.',
  usage: 'rol-bilgi [rol]'
};