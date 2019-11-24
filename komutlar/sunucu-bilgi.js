const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
exports.run = async (client, message, args) => {

	const lang = await db.fetch(`lang_${message.guild.id}`);

    if (lang == 'tr'|| !lang) {

    let prefix = db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

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
    
    const exp2 = await db.fetch(`sunucuxp_${message.guild.id}`) || "0";
	const exp = await db.fetch(`sunucuxp_${message.guild.id}`);
	
    

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
        .addField(`Emoji [${message.guild.emojis.size}]`, `${prefix}emojiler yazarak sunucudaki bütün emojileri görüntüleyebilirsiniz.`)
		.addField(`Rol [${message.guild.roles.size - 1}]`, `${prefix}roller yazarak sunucudaki bütün rolleri görüntüleyebilirsiniz.`)
        .addField('Doğrulama seviyesi', `${vertific[message.guild.verificationLevel]}`)
        .addField('Premium', `Puan: **${exp > 50 ? '50' : exp}/50**\nPremium: **${exp < 50  ? "Aktif değil" : `Aktif`}**`)
  
  
		.setThumbnail(message.guild.iconURL)
		.setColor('RANDOM')
		.setTimestamp()
	message.channel.send({embed})



} else if (lang == 'en') {
   
	let prefix = db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

	var verti = message.guild.verificationLevel;
const vertific = ['Do', 'Low', 'Middle', 'high', 'Very high'];
 let region = {
		 "us-central": "America :flag_us:",
		 "us-east": "East America :flag_us:",
		 "us-south": "South America :flag_us:",
		 "us-west": "Western America :flag_us:",
		 "eu-west": "West Europe :flag_eu:",
		 "eu-central": "Europe :flag_eu:",
		 "singapore": "Singapore :flag_sg:",
		 "london": "london :flag_gb:",
		 "japan": "japan :flag_jp:",
		 "russia": "russia :flag_ru:",
		 "hongkong": "hongkong :flag_hk:",
		 "brazil": "brazil :flag_br:",
		 "singapore": "singapore :flag_sg:",
		 "sydney": "sydney :flag_au:",
		 "southafrica": "southafrica :flag_za:"
 }
let kur = {
		 "01": "January",
		 "02": "February",
		 "03": "March",
		 "04": "April",
		 "05": "May",
		 "06": "June",
		 "07": "July",
		 "08": "August",
		 "09": "September",
		 "10": "October",
		 "11": "November",
		 "12": "December"
 }
 
 const exp2 = await db.fetch(`sunucuxp_${message.guild.id}`) || "0";
 const exp = await db.fetch(`sunucuxp_${message.guild.id}`);
 
 

 const embed = new Discord.RichEmbed()
	 .setAuthor(`${message.guild.name} | Server Information`)
	 .addField('Server Founder', `${message.guild.owner} ??`)
	 .addField('Server id', message.guild.id)
	 .addField('server creation date', `${moment(message.guild.createdAt).format('DD')} ${kur[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY h:mm:ss')}`)
	 .addField('Server Setup Location', region[message.guild.region])
	 .addField(`Channels [${message.guild.channels.size}]`, `${message.guild.channels.filter(c => c.type === "text").size} Text\n${message.guild.channels.filter(c => c.type === "voice").size} Voice\n${message.guild.channels.filter(c => c.type === 'category').size} Category`)
	 .addField(`Users [${message.guild.members.size}]`, `${client.emojis.get(client.emojiler.çevrimiçi)} ${message.guild.members.filter(m => m.user.presence.status === "online").size} Online \n${client.emojis.get(client.emojiler.boşta)} ${message.guild.members.filter(m => m.user.presence.status === "idle").size} İdle\n${client.emojis.get(client.emojiler.yayıncı)} ${message.guild.members.filter(m => m.user.presence.status === "streaming").size} Streaming\n${client.emojis.get(client.emojiler.rahatsızetme)} ${message.guild.members.filter(m => m.user.presence.status === "dnd").size} Dnd\n${client.emojis.get(client.emojiler.çevrimdışı)} ${message.guild.members.filter(m => m.user.presence.status === "offline").size} Offline\n${client.emojis.get(client.emojiler.bot)} ${message.guild.members.filter(m => m.user.bot).size} Bot`)
	 .addField('AFK Channel', message.guild.afkChannel || 'no')
	 .addField('AFK Timeout', `${message.guild.afkTimeout} second`)
	 .addField(`Emoji [${message.guild.emojis.size}]`, `${prefix}emojis Displaying all the emojis on the server by typing .`)
	 .addField(`Role [${message.guild.roles.size - 1}]`, `${prefix}roles You can view all roles on the by typing.`)
	 .addField('Verification level', `${vertific[message.guild.verificationLevel]}`)
	 .addField('Premium', `Premium level: **${exp2 > 50 ? '50' : exp2}/50**\nPremium: **${exp < 50  ? "Not active	 " : `Active`}**`)


	 .setThumbnail(message.guild.iconURL)
	 .setColor('RANDOM')
	 .setTimestamp()
 message.channel.send({embed})



          
 }
          
 

} 
;

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
