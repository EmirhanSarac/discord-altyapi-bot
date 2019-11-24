const Discord = require('discord.js');
const fs = require('fs');

//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message) => {
  
	//if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  const db = require('quick.db');
  

  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
	let args = message.content.split(' ').slice(1);
	const secenekler = args.slice(0).join(' ');

	if(secenekler.length < 1) return message.reply(`**${prefix}llink-engelle aç** veya **${prefix}link-engelle kapat** yazınz.`);
	//if(secenekler === "aç" || "kapat") return message.channel.send(errembed);

  if (secenekler !== "aç" && secenekler !== "kapat" && secenekler !== "on" && secenekler !== "off") return message.reply(`**${prefix}llink-engelle aç** veya **${prefix}link-engelle kapat** yazınz.`)

	if (secenekler === "aç" || secenekler === "on") {
		
    var i = db.set(`linkE_${message.guild.id}`, "acik")
    
		  const embed = new Discord.RichEmbed()
    .setColor('RED')
    .setDescription(`Link Engeli Başarıyla açıldı\nLink engelini kapatmak isterseniz **${prefix}link-engel kapat** yazmanız yeterlidir.`)
    message.channel.send(embed)
    
    /*let linkEngel = JSON.parse(fs.readFileSync("././jsonlar/linkEngelle.json", "utf8"));
  if(!linkEngel[message.guild.id]){
		linkEngel[message.guild.id] = {
			linkEngel: "acik"
		  };
  };

		  fs.writeFile("././jsonlar/linkEngelle.json", JSON.stringify(linkEngel), (x) => {
        if (x) console.error(x)
      })
    */
	};

	if (secenekler === "kapat") {
    
    db.delete(`linkE_${message.guild.id}`)
    
		message.channel.send('Link engelleme sistemi kapatıldı')
    
    /*let linkEngel = JSON.parse(fs.readFileSync("././jsonlar/linkEngelle.json", "utf8"));
  if(!linkEngel[message.guild.id]){
		linkEngel[message.guild.id] = {
			linkEngel: "kapali"
		  };
  };

		fs.writeFile("././jsonlar/linkEngelle.json", JSON.stringify(linkEngel), (x) => {
        if (x) console.error(x)
      })
    
    if (linkEngel[message.guild.id]) {
      
    delete linkEngel[message.guild.id]
    delete linkEngel[message.guild.id].linkEngel
      
    }*/
    
	};
}

	exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: ['link-engel'],
		permLevel: 4,
    kategori: "ayarlar",
   
	  };
	  
	exports.help = {
		name: 'link-engelle',
		description: 'Lİnk engelleme sistemini açıp kapatmanızı sağlar.',
		usage: 'link-engelle <aç/kapat>',
   
	};