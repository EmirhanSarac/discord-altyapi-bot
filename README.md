Bot Altyapı Projesine Hoşgeldin!
=================
Merhaba Arkadaşlar Bu Altyapı 2018 Yılında Yapılmış 5 Ekim 2022 Tarihinde İse Gerekli Düzeltmeleri Yapılmıştır. Bu Altyapı Discord.js v14 Sürümünü Artık Desteklemektedir! Kolaylıkla Kullanabilirsiniz!

[Resmi Discord Sunucumuz](https://discord.gg/T2jXbtBjwj)

[Resmi Youtube Kanalımız](https://www.youtube.com/channel/UCVRhrcoG6FOvHGKehYtvKHg?view_as=subscriber)

[Resmi İnstagram Hesabımız](https://www.instagram.com/emirhansarac06/)

Diğer Altyapılar!
=================
[Müzik Bot Altyapısı](https://youtu.be/V4qOOnSPfwA)

[Ayarlanabilen Emoji ile Rol Verme Altyapısı](https://www.youtube.com/watch?v=AjNbw0wODH8)

[Kayıt Botu Altyapısı](https://www.youtube.com/watch?v=55_OEZ73yd4)

[Davet Botu Altyapısı](https://www.youtube.com/watch?v=drlPG8kgNdQ)

[Captcha Botu Altyapısı](https://www.youtube.com/watch?v=DWxjCc6BuDA)

[Slash Bot Altyapısı](https://www.youtube.com/watch?v=UZABvGw-oww)

[Yönetim Panelli Bot Altyapısı](https://www.youtube.com/watch?v=HMT1UhQXQbA)

Basit Hatalar ve Çözümleri!
=================
1 • Eğer hatanız;
`Cannot find module 'blabla'`
şeklindeyse modül kurmanız gerekmektedir.
Modül kurmak için konsolu açıp `npm i blabla` yazınız.
Glitch kullanıyorsanız basit kurulum yolu;
1 • Package.json'a girin.
2 • Yukarıdan Add Package basın.
3 • İnmesi gereken paket ismini yazın ve çıkana basın.
başarılı! 

2 • Eğer hatanız;
`ayarlar is not defined:`
şeklindeyse hatayı aldığınız komutun en üstüne alttaki kodu girmeniz gerekli:
`const ayarlar = require('../ayarlar.json')`
 yazın, sorun çözülecektir.
 

 3 • Eğer hatanız;
`SyntaxError: Unexpected token };`
Tarzında bir hata alıyorsanız, açıp kapatmadığınız veya kapatıp açmadığın bir paranteziniz vardır demek. Çözmek için hata oluşmadan önce en son eklediğiniz komuta bi' göz gezdirmek. Sorunu bulduğunuz zaman parantezleri düzelttiğinizde sorunda ortadan kalkar.
 
4 • Eğer hatanız; 
`(node:6660) UnhandlePromiseRejectionWarning: Error: Incorrect login details were provided.`
Tarzında ki bir token hatasında yapmanız gereken tek şey, https://discord.com/developers/applications sayfasına girip botunuza giriş yapmak, tokeninizi oradan kopyalayıp projenizde ki token gerektiren yere doğru bir şekilde "" içinde yapıştırın.
 
5 • Eğer hatanız; 
`fields.flat is not a function`
İse Node versiyonunuzu 12x yapın.
 
6 • Eğer Hatanız;
`(node:223) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'id' of null`
Şeklindeyse `if (!message.guild) return;` Komutun Başına Yazarak Çözebilirsiniz

7 • Eğer Hatanız;
`TypeError: Cannot read property 'send' of undefined`
Şeklindeyse Bot mesajı atacak bir kanalı bulamayınca yukarıda ki hatayı verir. Log kısmına bakıp hangi komutta hangi kanalın ayarlı olmadığını kontrol edin.

8 • Eğer Hatanız;
`maxListeners`
 Hatanız da yukarıda ki gibi maxListeners geçiyor ise main dosyanızın bir bölümüne `client.setMaxListeners(30)` yazın. Sorun çözülecektir, çözülmez ise fazla client.on eventlerini silin.
 
9 • Eğer Hatanız;
`DeprecationWarning:TextChannel#sendEmbed: use TextChannel#send instead`
Bu uyarıyı verdiği zaman `<channel>.sendEmbed` eventini `<channel>.send` yapmanız gerekir

10 • Eğer Böyle Bir Yazı Alıyorsanız;
`DeprecationWarning: Collection#find: pass a function instead`
Bu bir hata değil uyarıdır yapmanız gereken;
`<collection>.find('name', 'isim')`
Kodlarını
`<collection>.find(x => x.name == 'name')`
Şeklinde kullanırsanız sorun düzelecektir (Örnektir.)

 11 • Eğer Hatanız;
`UnhandledPromiseRejectionWarning: DiscordAPIError: Missing Permissions`
Bu şekilde bir hata alıyorsanız bota uygulatmaya çalıştırdığınız işleme botun yetkisi yetmiyordur vereceğim kodu main dosyanıza atarak sorunu çözebilirsiniz.
 
 12 • Eğer Hatanız;
`Something took to long to do` 
Bu hatanın nedeni: Bir gün içerisinde 1000 defa botunuz tokene bağlantı kurduğu halinde veya Glitch, Heroku vb. sitelerde kullanıyorsanız bazenleri bu sitelerde 'tokeni kötüye kullanan' IP Ban yiyor ve çoğu proje remixleseniz dahi token ban yiyor. 
Çözümü: 1-2 gün civarı bu böyle devam edebilir. İP Ban yemiş projeyi bulmanız gerek bu projeyi bulduğunuzda remixleyin hatanız düzelir.
 

`İyi Kullanımlar!`

Etiketler: discord bot altyapı glitch
discord bot altyapı github
discord bot altyapı
discord bot altyapı v14
discord bot altyapı v13
discord bot altyapı v12
discord bot altyapısı glitch
discord bot altyapı 2022
discord bot altyapı 2023
discord bot altyapı visual studio code
discord bot altyapı nasıl yapılır
discord altyapı
discord ban bot altyapı
bot altyapı
discord destek bot altyapı
discord bot altyapısı github
discord eğlence bot altyapı
discord müzik bot altyapı glitch
discord guard bot altyapı
discord gif bot altyapı
discord groovy bot altyapı
discord nitro generator bot altyapı
discord bot hazır altyapı
discord bot hazır altyapı glitch
discord bot yapma hazır altyapı
discord bot altyapı indir
discord invite bot altyapı
discord.js bot altyapı
discord kayıt bot altyapı
discord bot list altyapı
discord müzik bot altyapı
discord moderasyon bot altyapı
discord public bot altyapı
discord register bot altyapı
discord stat bot altyapı
emirhan saraç discord bot altyapı
discord hazır bot komutları
discord uptime bot altyapı

