const Discord = require('discord.js');


exports.run = function(client, message) {
            if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
    const embed = new Discord.RichEmbed()
        .setDescription("**SUNUCU ICONU**")
        .setImage(message.guild.iconURL)

    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'servericon', 
  description: 'Serverin iconunu gösterir',
  usage: 'servericon'
};
