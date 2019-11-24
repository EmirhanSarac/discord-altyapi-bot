const Discord = require('discord.js');
var request = require('request');
var cheerio = require('cheerio');
const db = require('quick.db')

function getStatData(location, $) {

    var selector = $('.stats-stat .value').eq(location).text();

    var stat_array = $.parseHTML(selector);

    var stat = 0;

    if (stat_array == null || stat_array.lengh == 0) {
        return -1;

    } else {
        stat = stat_array[0].data;
    }

    return stat;
}

exports.run = async (client, message, args) => {

   var s = args.slice(0).join(' ');
  
    var UR_L = "http://csgo.tracker.network/profile/"+s;

    if (!s) {
              var embed = new Discord.RichEmbed()
                .setDescription(`Bir CSGO oyuncusu (Steam) kullanıcı adı veya ID'ı yazmalısın!`)
                .setColor("RANDOM")
            message.channel.send({embed})
            return
          }

    request(UR_L, function(err, resp, body) {

        $ = cheerio.load(body);

        var KD = getStatData(0, $);
        if (KD == -1) {
              var embed = new Discord.RichEmbed()
                .setDescription(`Profilinin görüntülenebildiğinden yada, doğru bir isim girdiğinden emin ol.`)
                .setColor("RANDOM")
            message.channel.send({embed})
            return
          }

        var WIN = getStatData(1, $);
        var HS = getStatData(4, $);
        var MONEY = getStatData(5, $);
        var SCORE = getStatData(6, $);
        var KILLS = getStatData(7, $);
        var DEATHS = getStatData(8, $);
        var MVP = getStatData(9, $);
        var BS = getStatData(13, $);
        var BD = getStatData(14, $);
        var HR = getStatData(15, $);
    
        var STAT = new Discord.RichEmbed()
            .setTitle(s, " | CSGO İstatistikleri")
            .setURL(UR_L)
            .setColor("RANDOM")
            .addField("K/D", KD, true)
            .addField("Kazanma", `${WIN}%`, true)
            .addField("Rehine Kurtarılması", HR, true)
            .addField("Para", MONEY, true)
            .addField("Skor", SCORE, true)
            .addField("Öldürme", KILLS, true)
            .addField("Ölme", DEATHS, true)
            .addField("MVP", MVP, true)
            .addField("Bomba Kurma", BS, true)
            .addField("Bomba İmha Etme", BD, true)
            .addField("Kafadan Vuruşlar", HS, true)

        message.channel.send(STAT);

    })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cs-go"],
  permLevel: 0,
  kategori: 'eğlence',
  
};

exports.help = {
  name: 'csgo',
  description: 'Girilen oyuncunun csgo istatistiklerini gösterir.',
  usage: 'csgo <isim/id>',
 
};