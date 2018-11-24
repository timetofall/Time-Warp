const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.registry.registerGroup('basic', 'Basic');
bot.registry.registerGroup('audio', 'Audio');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};
global.play_queue = {};

bot.on('ready', function() {
    console.log("Time-Warp Ready");
    bot.user.setActivity('Diablo Immortal', { type: 'PLAYING' });
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

window.sleep = function(milliseconds){
  let start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
};