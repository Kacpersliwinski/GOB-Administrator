const commando = require('discord.js-commando');
const bot = new commando.CommandoClient({
    commandPrefix: '!',
    owner: "191146743163781120"
});
bot.registry.registerDefaults();
bot.registry.registerGroup('functional', 'Functional');
bot.registry.registerCommandsIn(__dirname + "/commands/");

bot.login("NDY0MTI3NzQwNDg4OTc0MzYw.Dh6cQw.IhVnz6jzXD9iso8nhceg9dNyuBw");

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
