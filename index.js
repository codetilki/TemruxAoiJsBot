const {AoiClient} = require("aoi.js");

const bot = new AoiClient({
    token: "Token", //tokeni buraya yaz
    prefix: "Prefix", //Prefix, örn: "t!"yardım
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    events: ["onMessage", "onInteractionCreate"],
    mobilePlatform: true
});

//durum
bot.status({
    text: "Obaa bu bot mobil :D",
    type: "PLAYING",
  status: "mobilePlatform",
    time: 12
});

// Ping Komutu
bot.command({
    name: "ping",
    code: `Pong! $pingms`
});
