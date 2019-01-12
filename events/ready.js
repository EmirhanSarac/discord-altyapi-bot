const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "g!yardım - Otorol Güncellendi🔥",
        "g!yardım - Küfür Engel✨",
        "g!yardım - Reklam Engel⭐️",
        "g!yardım - +hoşgeldin-ayarla Güncellendi💥",
        "g!yardım - +slowmode 🌹",
        "g!yardım - Beni Sunucuna Ekle⚡️",
        "g!yardım - +sunucunutanıt YENİ🍂 ",
        "g!yardım - +talep YENİ📫 ",
        "g!yardım - +düello Yeni 🤛",
        "g!yardım - +sayaç Yeni 👑",
        "g!kayıtlar-ayarla - Yeni"
  
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/emirhansaracyt" );
        }, 2 * 2500);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setGame(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};