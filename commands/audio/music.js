const commando = require('discord.js-commando');
// const YTDL = require('ytdl-core');

function Play(connection, message)
{
    var server = servers[message.guild.id];
    server.dispatcher = connection.playFile(server.queue[0])
    message.reply(server.queue[0])
    server.queue.shift();
    server.dispatcher.on("end", function(){
        connection.disconnect()
    })
}

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
                if(!servers[message.guild.id])
                {
                    servers[message.guild.id] = {queue: []}
                }
                message.member.voiceChannel.join()
                    .then(connection =>{
                        var server = servers[message.guild.id];
                        message.reply("Successfully join");
                        server.queue.push('../../AudioFiles/surprise-motherfucker.mp3');
                        Play(connection, message);
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
