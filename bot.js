const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.registry.registerGroup('basic', 'Basic');
bot.registry.registerGroup('audio', 'Audio');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};
global.play_queue = {};
global.raid_on = true;

bot.on('ready', function() {
    console.log("Time-Warp Ready");
    console.log("Raid_Time Status:", raid_on);

    const auto = require("./commands/basic/raid_time.js");
    auto.raid_time(bot);

    setInterval(() => {
        let date = new Date();
        let day_number = date.getDay();
        if(day_number === 3 || day_number === 4)
        {
            bot.user.setActivity('Salt Raid', { type: 'WATCHING' });
        }
        else
        {
            bot.user.setActivity('Diablo Immortal', {type: 'PLAYING'});
        }
    }, 60000); // Runs this every 1 Minute.
});

bot.on('message', (message) => {
    const cmds = require('./commands/basic');
    cmds.raid_time.raid_toggle(bot, message);
    cmds.replies.process(bot, message);
});

bot.login(process.env.BOT_TOKEN); // grabs the token from Heroku Config Vars