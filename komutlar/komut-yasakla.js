const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let p = await db.fetch(`prefix_${message.guild.id}`)
let prefix;
if (p == null) prefix = client.ayarlar.prefix
  else prefix = p
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`${client.emojis.get(client.emojiler.hayır)}  **bu komut için yeterli iznin yok!**`)
  
  let command = args[0]
  if (!command) return message.channel.send(`${client.emojis.get(client.emojiler.hayır)} Lütfen bir **komut adı** girin! Şarkı komutlarını iptal etmek için; **komut-yasakla şarkı**`)
  
  if (!client.commands.has(command)) return message.channel.send(`${client.emojis.get(client.emojiler.hayır)} Böyle bir **komut** bulunamadı!`)
      if(command == 'yardım') return message.channel.send(`${client.emojis.get(client.emojiler.hayır)} Yardım komudunu yasaklayamazsın.`)
  if (client.commands.has(command)){
    command = client.commands.get(command);
    

    if (db.fetch(`yasakK_${message.guild.id}`).includes(args[0])){
      message.channel.send(`${client.emojis.get(client.emojiler.evet)} Komut **artık kullanılabilir!**`)
      
      let x = args[0]
let arr = []
db.fetch(`yasakK_${message.guild.id}`).forEach(v => {
if(v !== x) {
arr.push(v)
}
})
db.set(`yasakK_${message.guild.id}`, arr)

    }else{
        await db.push(`yasakK_${message.guild.id}`, command.help.name)
    message.channel.send(`${client.emojis.get(client.emojiler.evet)} Komut başarıyla **sunucuda yasaklandı!** Tekrar aktif etmek için; \`${prefix}komut-yasakla ${args[0]}\``)
    }
  }
};
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['komut-yasak'],
        permLevel: 4
};
 
exports.help = {
        name: 'komut-yasakla',
        description: 'Botun istemediğiniz herhangi bir komutunu yasaklamanıza yarar.',
        usage: 'komut-yasakla <komut-adı>'
};