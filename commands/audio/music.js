const commando = require('discord.js-commando');
// const YTDL = require('ytdl-core');

// function Play(connection, message)
// {
//     var server = servers[message.guild.id];
//     // message.reply(server.queue[0])
//     // server.dispatcher = connection.playFile(server.queue[0])
//     server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
//     server.queue.shift();
//     server.dispatcher.on("end", function(){
//         if(server.queue[0])
//         {
//             Play(connection, message);
//         }
//         else
//         {
//             connection.disconnect();
//         }
//     })
// }

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
                        message.reply("Successfully joined");
                        const fs = require('fs');
                        const stream = fs.createReadStream('./test.mp3');
                        connection.playStream(stream);
                    })
                    .catch(console.log);
            }
        }
        else
        {
            message.reply("You must be a in a voice channel.");
        }
    }
}

module.exports = Music;
