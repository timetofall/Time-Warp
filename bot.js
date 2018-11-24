const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.registry.registerGroup('basic', 'Basic');
bot.registry.registerGroup('audio', 'Audio');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('ready', function() {
    console.log("Ready");
});

bot.on('message', (message) => {
    const cmds = require("./replies.js");
    if(message == "popcorns"){
        message.channel.send("James is TEST, <:popfeels:477323348125286405>")
    }
});

bot.login(process.env.BOT_TOKEN); // grabs the token from Heroku Config Vars