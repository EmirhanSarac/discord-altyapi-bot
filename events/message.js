const { EmbedBuilder } = require("discord.js");
var ayarlar = require("../ayarlar.json");
const client = require("../bot");
const prefix = ayarlar.prefix;

client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.toLocaleLowerCase().split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, message, params);
  }

});

/*
############################################################################
#                           Discord Bot Altyapı v14                         #
#               https://github.com/EmirhanSarac/discord-altyapi-bot         #
############################################################################
*/
