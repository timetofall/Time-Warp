const commando = require('discord.js-commando');

class JoinChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'join',
            group: 'audio',
            memberName: 'join',
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

module.exports = JoinChannelCommand;
