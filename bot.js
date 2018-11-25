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
    const auto = require("./commands/basic/raid_time.js");
    auto.raid_time(bot);
    // bot.user.setActivity('Diablo Immortal', {type: 'PLAYING'});
    setInterval(() => {
        let date = new Date();
        let day_number = date.getDay();
        if(day_number === 2 || day_number === 4)
        {
            bot.user.setActivity('SALT Raid', { type: 'WATCHING' });
        }
        else
        {
            bot.user.setActivity('Diablo Immortal', {type: 'PLAYING'});
        }
    }, 10000); // Runs this every 10 seconds.
});

bot.on('message', (message) => {
    const cmds = require('./commands/basic')

    if (message.author !== bot.user) {
        let val = cmds.replies.process(message);
        if (val){
            message.channel.send(val);
        }
    }
});

bot.login(process.env.BOT_TOKEN); // grabs the token from Heroku Config Vars