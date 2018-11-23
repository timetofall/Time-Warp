const commando = require('discord.js-commando');

class Surprise extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'sm',
            group: 'audio',
            memberName: 'sm',
            description: 'Gives a surprise'
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
                        const dispatcher = connection.playFile('../../AudioFiles/surprise-motherfucker.mp3');
                        dispatcher.setVolume(0.1);
                        dispatcher.on('end', () =>
                        {
                            // The song has finished
                            message.guild.voiceConnection.disconnect();
                        });
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
