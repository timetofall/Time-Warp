const commando = require('discord.js-commando');
// const YTDL = require('ytdl-core');

class Music extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'play',
            group: 'audio',
            memberName: 'play',
            description: 'Plays a song'
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
                        message.reply("Successfully joined");
                    })
            }
        }
        else
        {
            message.reply("You must be a in a voice channel.");
        }
    }
}

module.exports = Music;
