const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.registry.registerGroup('basic', 'Basic');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');




bot.on('ready', function() {
    console.log("Ready");
})

bot.login(process.env.BOT_TOKEN);