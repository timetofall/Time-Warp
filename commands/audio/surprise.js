const commando = require('discord.js-commando');

class Surprise extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'sm',
            group: 'audio',
            memberName: 'sm',
            description: 'Joins the voice channel of the commander'
        });
    }

    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                message.member.voiceChannel.join()
                    .then(connection =>{
                        message.reply("Successfully joined!");
                        const dispatcher = connection.playFile('../../AudioFiles/surprise-motherfucker.mp3');
                        dispatcher.setVolume(0.5); // Set the volume to 50%
                        message.guild.voiceConnection.disconnect();
                        message.reply("Successfully left!");
                    })
            }
        }
        else
        {
            message.reply("You must be a in a voice channel.");
        }
    }
}

module.exports = Surprise;
