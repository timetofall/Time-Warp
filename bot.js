const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.registry.registerGroup('basic', 'Basic');
bot.registry.registerGroup('audio', 'Audio');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('ready', function() {
    console.log("Ready");
})

bot.on('message', message =>{
    if (message === "!sm") {
        var VC = message.member.voiceChannel;
        if (!VC)
            return message.reply("MESSAGE IF NOT IN A VOICE CHANNEL")
    VC.join()
        .then(connection => {
            const dispatcher = connection.playFile('AudioFiles/surprise-motherfucker.mp3');
            dispatcher.on("end", end => {VC.leave()});
        })
        .catch(console.error);
};
});

bot.login(process.env.BOT_TOKEN); // grabs the token from Heroku Config Vars