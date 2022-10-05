const Discord = require('discord.js');

exports.run = async(client, msg) => {

function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " gün" : " gün") + " önce";
        };
        let guild = msg.channel.guild
        let serverSize = msg.guild.memberCount;
        let botCount = msg.guild.members.cache.filter(m => m.user.bot).size;
        let humanCount = serverSize - botCount;
        let verifLevels = ["Yok", "Düşük hesapta e-posta doğrulanmış olmalıdır", "Orta - Discord'a 5 dakikadan daha uzun süre kayıtlı olmalıdır", "Yüksek - (╯ ° □ °） ╯︵ ┻━┻ - sunucunun üyesi 10 dakikadan uzun olmalıdır", "Çok Yüksek - ┻━┻ ミ ヽ (ಠ 益 ಠ) ﾉ 彡 ┻━┻ - doğrulanmış bir telefon numarasına sahip olmalıdır"];
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
			"southafrica": "Güney Afrika :flag_za:",
    "amsterdam": "Hollanda :flag_nl:",
				"europe": "Avrupa :flag_eu:"

	}

	let owner = await guild.fetchOwner()
	const channels = msg.guild.channels.cache;
	const members = msg.guild.members.cache;


let sunucu = new Discord.EmbedBuilder()
.setAuthor({ name: 'Sunucu Bilgi', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.gg/T2jXbtBjwj' })
.setDescription(`**Sunucu Bilgileri** \nSunucu İsmi: **${guild.name}** \nSunucu ID: **${msg.guild.id}** \nSunucu Sahibi: **${owner}** \nKuruluş Tarihi: **${checkDays(msg.guild.createdAt)}** \nBoost Sayısı: **${msg.guild.premiumSubscriptionCount || '0'}** \n**Üye Bilgileri:** \nToplam Üye: **${humanCount}** \nToplam Bot: **${botCount}** \nRol Sayısı: **${guild.roles.cache.size}** `)
.setColor('#D2EE07')  
.setFooter({ text: `Bu komutu kullanan kullanıcı ${msg.author.tag}` , iconURL: `${msg.author.displayAvatarURL()}` });

     msg.channel.send({embeds : [sunucu]});

}; 

module.exports.conf = {
aliases: ['sunucubilgi','sb','sunucu'],
permLevel: 0, 
kategori: 'Sunucu'
};

module.exports.help = {
    name: 'sunucu-bilgi',
    description: 'Sunucu hakkında bilgi verir.',
    usage: 'sunucu-bilgi'
};

/*
############################################################################
#                           Discord Bot Altyapı v14                         #
#               https://github.com/EmirhanSarac/discord-altyapi-bot         #
############################################################################
*/
