const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
message.channel.send(' **Botun Yeniden Başlatılmasını Onaylıyor Musun ?**')
.then(() => {
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send('  **Yeniden Başlıyorum**   ').then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] :space_invader: **Bot Yeniden Başlatılıyor** :space_invader:`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.send(' `Yeniden Başlama İşlemini İptal Ettim` ');
    });
});
};

exports.conf = {
  aliases: ['yenile','yb'],
  permLevel: 4,
  kategori: 'Sahip'
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatırsınız',
  usage: 'reboot'
};
