const Discord = require('discord.js');
const request = require('node-superfetch');
const moment = require('moment');
require('moment-duration-format');

module.exports.run = async (client, msg, args) => {
  
  const db = require('quick.db');
  
 
  
  const aylar = {
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
    
  const query = args.slice(0).join(' ');
  if (!query) return msg.reply('Oyun adını giriniz')
  
  if (query === "minecraft" || query === "mc" || query === "Minecraft" || query === "MC" || query === "Mc" || query === "MİNECRAFT" || query === "MINECRAFT" ) {
    try {
      
    var p = ["Android", "iOS", "XBOX ONE", "XBOX 360", "Raspberry Pi", "PlayStation 3", "PlayStation 4", "PlayStation Vita", "Nintendo Switch", "Windows Phone", "Amozon Device", "Windows", "Mac", "Linux"]
      
    const embed = new Discord.RichEmbed()
				.setColor("RANDOM")
				.setAuthor(`Minecraft - Oyun bilgileri`, 'https://img00.deviantart.net/9cc9/i/2011/008/6/1/minecraft_hd_icon___mac___pc_by_hunterkharon-d36qrs5.png')
				.setURL(`http://minecraft.net/`)
				.setThumbnail('https://i.ytimg.com/vi/SQq6IDdBNGk/maxresdefault.jpg')
				.addField('Oyun fiyatı', "[23,95 EUR](https://minecraft.net/tr-tr/?ref=m)")
				.addField('Meta puanı', "93" || 'Bulunamadı')
				.addField('Önerilme sayısı', 'Bulunamadı')
				.addField('Platformlar', p.join(', ') || 'Bulunamadı')
				.addField('Yayınlanma tarihi', "16/06/2009" || 'Bulunamadı')
				.addField('Oyuna sahip dlc', "0")
				.addField('Geliştiriciler', "Mojang Inc, Microsoft Corporation" || 'Bulunamadı')
				.addField('Yayıncılar', "Microsoft Corporation" || 'Bulunamadı');
			return msg.channel.send(embed);
		} catch (err) {
			return msg.reply(`Bir Hata Oluştu! \n**Hata:** \n\`${err.message}\``);
    }
    return;
  }
  
  try {
			const id = await search(query);
			if (!id) return msg.reply('Bulunamadı');
			const data = await fetchGame(id);
			const current = data.price_overview ? `$${data.price_overview.final / 100}` : 'Ücretsiz';
			const original = data.price_overview ? `$${data.price_overview.initial / 100}` : 'Ücretsiz';
			const price = current === original ? current : `~~${original}~~ ${current}`;
			const platforms = [];
			if (data.platforms) {
				if (data.platforms.windows) platforms.push('Windows');
				if (data.platforms.mac) platforms.push('Mac');
				if (data.platforms.linux) platforms.push('Linux');
			}
			const embed = new Discord.RichEmbed()
				.setColor("RANDOM")
				.setAuthor(`${data.name} - Oyun bilgileri`, 'https://i.imgur.com/xxr2UBZ.png', 'http://store.steampowered.com/')
				.setURL(`http://store.steampowered.com/app/${data.steam_appid}`)
				.setThumbnail(data.header_image)
				.addField('Fiyat', price)
				.addField('Meta puanı', data.metacritic ? data.metacritic.score : 'Bulunamadı')
				.addField('Önerilme sayısı', data.recommendations ? data.recommendations.total : 'Bulunamadı')
				.addField('Platfor', platforms.join(', ') || 'Bulunamadı')
        .addField('Yayınlanma tarihi', data.release_date.date || 'Bulunamadı')
				.addField('Dlc sayısı', data.dlc ? data.dlc.length : "0")
				.addField('Geliştiriciler', data.developers ? data.developers.join(', ') || 'Bulunamadı' : 'Bulunamadı')
				.addField('Yayıncılar', data.publishers ? data.publishers.join(', ') || 'Bulunamadı' : 'Bulunamadı');
			return msg.channel.send(embed);
		} catch (err) {
			return msg.reply(`Bir Hata Oluştu! \n**Hata:** \n\`${err.message}\``);
    }
  
};

  async function search(query) {
    const { body } = await request
        .get('https://store.steampowered.com/api/storesearch')
        .query({
            cc: 'tr',
            l: 'tr',
            term: query
        });
    if (!body.items.length) return null;
    return body.items[0].id;
}

async function fetchGame(id) {
    const { body } = await request
        .get('https://store.steampowered.com/api/appdetails')
        .query({ appids: id });
    return body[id.toString()].data;
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["steammağaza", "steam-mağaza", "steamstore", "steam-store", "steam", "oyunara", "steamoyun", "steam-oyun"],
  permLevel: 0,
    kategori: "oyun",

};

exports.help = {
  name: 'oyun-ara',
  description: 'Verilen oyun hakkında bilgi verir.',
  usage: 'oyun-ara <oyun adı>',
 
};