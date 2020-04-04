const Discord = require('discord.js');
module.exports.run = async (client, msg, args) => {

    let kayÄ±t = msg.guild.member(msg.mentions.users.first()) || msg.guild.member(args[0]);
    if (!kayÄ±t) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("ğŸ“¥ Kendini etiketlemelisin!")
        }
    })

    let role = msg.guild.roles.find(r => r.name === "Ãœye");
    if (!role) {
        try {
            role = await msg.guild.Role({
            });

            msg.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    
                });
            });
        } catch (e) {
            console.log(e.stack);
        }

    }

    if (kayÄ±t.roles.has(role.id)) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: (" ğŸ’¡ Zaten Ã¶nceden kayÄ±t olmuÅŸsun! ")
        }
    });

    await kayÄ±t.addRole(role);
    msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("ğŸ”‘ Tebrikler kayÄ±t oldunuz!")
        }
    })
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'kayÄ±tol',
    description: 'Sunucuya kayÄ±t olursunuz!',
    usage: 'kayÄ±tol'
};
