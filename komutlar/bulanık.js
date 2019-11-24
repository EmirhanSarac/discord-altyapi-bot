const Discord = require('discord.js');
const Jimp = require('jimp'); 

exports.run = (client, message, args, dil) => {
    let user = message.mentions.users.first() || message.author;

        Jimp.read(user.avatarURL || user.defaultAvatarURL, function (err, image){
            if(err) return message.channel.send(dil.error + err);
            image.resize(400, 400)
            image.blur(5).write(client.user.id+"-"+user.id+".png");
            setTimeout(() => {
              message.channel.send({file: client.user.id+"-"+user.id+".png"});
            }, 500);
        });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "efekt",
  category: "effect"
};

exports.help = {
  name: 'bulanık',
  description: 'Avatarınızı bulanıklaştırıp gösterir.',
  usage: 'bulanık veya bulanık <@kullanıcı>',
 
};