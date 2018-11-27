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

    const auto = require("./commands/basic");
    auto.raid.raid_time(bot);
    // auto.intervals.status(bot);
});

bot.on('message', (message) => {
    const cmds = require('./commands/basic');
    cmds.raid.raid_toggle(bot, message);
    cmds.replies.process(bot, message);
});

bot.login(process.env.BOT_TOKEN); // grabs the token from Heroku Config Vars