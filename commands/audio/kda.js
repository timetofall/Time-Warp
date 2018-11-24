const commando = require('discord.js-commando');

function Play(connection, message)
{
    let server = play_queue[message.guild.id];
    server.dispatcher = connection.playFile('./kda.mp3');
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

class KDA extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'kda',
            group: 'audio',
            memberName: 'kda',
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
                        message.reply("Successfully Joined!");
                        server.queue.push('./kda.mp3');
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

module.exports = KDA;
