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
                        message.reply("Successfully joined!");
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
