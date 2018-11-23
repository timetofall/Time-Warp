const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.registry.registerGroup('basic', 'Basic');
bot.registry.registerGroup('audio', 'Audio');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

import { processMessage } from './commands/basic/replies';

global.servers = {};

bot.on('ready', function() {
    console.log("Ready");
});

bot.on('message', (message) => {
    let reply = processMessage(message);
    if(reply){
        message.channel.send(reply)
    }
});

bot.login(process.env.BOT_TOKEN); // grabs the token from Heroku Config Vars