const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leave',
            group: 'audio',
            memberName: 'leave',
            description: 'Leaves the voice channel'
        });
    }

    async run(message, args) {
        if (message.guild.voiceConnection) {
            message.guild.voiceConnection.disconnect();
        }
        else
        {
            message.reply("I must be in a voice channel to leave.")
        }
    }
}

module.exports = LeaveChannelCommand;
