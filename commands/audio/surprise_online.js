const commando = require('discord.js-commando');

function Play(connection, message)
{
    let server = play_queue[message.guild.id];
    server.dispatcher = connection.playArbitraryInput(server.queue[0]);
    server.queue.shift();
    server.dispatcher.on("end", function(){
        if(server.queue[0])
        {
            Play(connection, message);
        }
        else
        {
            connection.disconnect();
        }
    })
}

class Surprise_online extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'sm',
            group: 'audio',
            memberName: 'sm',
            description: 'Plays a song'
        });
    }

    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                if(!play_queue[message.guild.id])
                {
                    play_queue[message.guild.id] = {queue: []}
                }
                message.member.voiceChannel.join()
                    .then(connection =>{
                        let server = play_queue[message.guild.id];
                        server.queue.push('https://timetofall.github.io/Time-Warp/surprise-motherfucker.mp3');
                        Play(connection, message);
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

module.exports = Surprise_online;
