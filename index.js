const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token:  process.env.token, //tokeniniz çalınmasın diye gizleyin...
prefix: ["t!"], //prefix
intents: ["GUILDS", "GUILD_MESSAGES"] //intent
})

//durum ve değişkenleri ayrı bir dosyanın içinde yapıyorsunuz.
require('./ayarlar/durum')(bot)
require('./ayarlar/degiskenler')(bot)


//Event
bot.onMessage()

//Komutları dosyada okuma
const komutlar = new aoijs.LoadCommands(bot);
komutlar.load(bot.cmd,'./komutlar/') 

//Aşşağıdaki yere isterseniz $log veya $denddm eklebilirsiniz örnek:
// (Not: ID'niz yerine kendi ID'nizi yazın.)
bot.readyCommand({
    channel: "",
    code: `

 $log[
  Bot Başarıyla Açıldı!
  Ad: $userTag[$clientID]
  Ping: $ping ms
  Yapımcısı: $username[$botOwnerID]#$discriminator[$botOwnerID]
  Komut yüklendi: $commandsCount
  ]
   `
})
