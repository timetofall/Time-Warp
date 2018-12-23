const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    unknownCommandResponse: false
});

bot.registry.registerGroup('basic', 'Basic');
bot.registry.registerGroup('audio', 'Audio');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};
global.play_queue = {};

bot.on('ready', function() {
    console.log("Time-Warp Ready");

    const auto = require("./commands/basic");
    auto.raid.raid_time(bot);
});

bot.on('message', (message) => {
    const cmds = require('./commands/basic');
    cmds.raid.raid_toggle(bot, message);
    cmds.replies.process(bot, message);
});

bot.login(process.env.BOT_TOKEN); // grabs the token from Heroku Config Vars
