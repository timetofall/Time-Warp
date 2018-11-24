const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.registry.registerGroup('basic', 'Basic');
bot.registry.registerGroup('audio', 'Audio');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('ready', function() {
    //bot.user.setActivity('Diablo Immortal', { type: 'PLAYING' });
    console.log("Ready");
});

bot.on('message', (message) => {
    const cmds = require("./commands/basic/replies.js");
    if (message.author != bot.user) {
        let val = cmds.process(message);
        if (val){
            message.channel.send(val);
        }
    }
});

bot.login(process.env.BOT_TOKEN); // grabs the token from Heroku Config Vars