const Discord = require("discord.js");

module.exports = {
    komut: "temizle", 
    açıklama: "Kanaldaki mesajları siler.",
    kategori: "genel", 
    alternatifler: ['temizle',"sil"],
    kullanım: "!temizle", 
    yetki: 'MANAGE_MESSAGES',
    args: [
{
	anahtar:"çıktı",
	soru:"Kaç adet mesaj silmek istersiniz?",
	tip:"sayi"
}
    ]
};

module.exports.baslat = (client,message,args) => {


if(!message.guild) {
	return;
}

var silinecekmesaj = Number(args.çıktı);

if(silinecekmesaj < 0) {
	return message.channel.send("Lütfen 0'dan büyük bir değer giriniz.")
}
if(silinecekmesaj > 100) {
	return message.channel.send("Lütfen 100'den aşağı bir değer giriniz.")
}

var silinecekmesaj = Number(args.çıktı) + 1;

/*
if(!message.channel.permissionsFor("MANAGE_MESSAGES") == true) {
	console.log(message.channel.permissionsFor("MANAGE_MESSAGES"))
  return message.channel.send("Bana gerekli yetkileri lütfen veriniz.")
}*/



message.channel.bulkDelete(silinecekmesaj);
message.channel.send(`Kanaldan ${args.çıktı} tane mesaj sildim. \n Yetkili: ${message.author.username}`)


}
