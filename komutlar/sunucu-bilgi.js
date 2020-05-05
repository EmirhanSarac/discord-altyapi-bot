const Discord = require('discord.js')
const moment = require('moment')
exports.run = async (client, message, args) => {

       var verti = message.guild.verificationLevel;
   const vertific = ['Yok', 'Düşuk', 'Orta', 'Yüksek', 'En Yüksek'];
	let region = {
			"us-central": "Amerika :flag_us:",
			"us-east": "Doğu Amerika :flag_us:",
			"us-south": "Güney Amerika :flag_us:",
			"us-west": "Batı Amerika :flag_us:",
			"eu-west": "Batı Avrupa :flag_eu:",
			"eu-central": "Avrupa :flag_eu:",
			"singapore": "Singapur :flag_sg:",
			"london": "Londra :flag_gb:",
			"japan": "Japonya :flag_jp:",
			"russia": "Rusya :flag_ru:",
			"hongkong": "Hong Kong :flag_hk:",
			"brazil": "Brezilya :flag_br:",
			"singapore": "Singapur :flag_sg:",
			"sydney": "Sidney :flag_au:",
			"southafrica": "Güney Afrika :flag_za:"
	}
let kur = {
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
    	
    

	const embed = new Discord.RichEmbed()
		.setAuthor(`${message.guild.name} | Sunucunun Bilgileri`)
		.addField('Sunucu Kurucusu', `${message.guild.owner} ??`)
		.addField('Sunucu ID', message.guild.id)
		.addField('Oluşturulma Tarihi', `${moment(message.guild.createdAt).format('DD')} ${kur[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY h:mm:ss')}`)
		.addField('Sunucu Kurulum Konumu', region[message.guild.region])
		.addField(`Kanallar [${message.guild.channels.size}]`, `${message.guild.channels.filter(c => c.type === "text").size} Yazı  \n${message.guild.channels.filter(c => c.type === "voice").size} Ses \n${message.guild.channels.filter(c => c.type === 'category').size} Kategori`)
		.addField(`Kullanıcılar [${message.guild.members.size}]`, `${client.emojis.get(client.emojiler.çevrimiçi)} ${message.guild.members.filter(m => m.user.presence.status === "online").size} Çevrimiçi \n${client.emojis.get(client.emojiler.boşta)} ${message.guild.members.filter(m => m.user.presence.status === "idle").size} Boşta \n${client.emojis.get(client.emojiler.yayıncı)} ${message.guild.members.filter(m => m.user.presence.status === "streaming").size} Yayında \n${client.emojis.get(client.emojiler.rahatsızetme)} ${message.guild.members.filter(m => m.user.presence.status === "dnd").size} Rahatsız Etmeyin \n${client.emojis.get(client.emojiler.çevrimdışı)} ${message.guild.members.filter(m => m.user.presence.status === "offline").size} Görünmez \n${client.emojis.get(client.emojiler.bot)} ${message.guild.members.filter(m => m.user.bot).size} Bot`)
		.addField('AFK Kanalı', message.guild.afkChannel || 'Bulunmuyor')
		.addField('AFK Zaman Aşımı', `${message.guild.afkTimeout} saniye`)
        .addField(`Emoji [${message.guild.emojis.size}]`, `!emojiler yazarak sunucudaki bütün emojileri görüntüleyebilirsiniz.`)
		.addField(`Rol [${message.guild.roles.size - 1}]`, `!roller yazarak sunucudaki bütün rolleri görüntüleyebilirsiniz.`)
        .addField('Doğrulama seviyesi', `${vertific[message.guild.verificationLevel]}`)
  
  
		.setThumbnail(message.guild.iconURL)
		.setColor('RANDOM')
		.setTimestamp()
	message.channel.send({embed})


};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['sunucu-bilgi', 'sunucubilgi','server-info', 'server', 'serverinfo', 'serverinformation', 'server-information'],
	permLevel: 0,
	kategori: 'kullanıcı'
}

exports.help = {
	name: 'sunucu',
	description: 'Bulunduğun sunucu hakkında bilgi verir.',
	usage: 'sunucu'
}
