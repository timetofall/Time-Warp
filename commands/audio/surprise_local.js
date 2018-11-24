const commando = require('discord.js-commando');

function Play(connection, message)
{
    let server = play_queue[message.guild.id];
    server.dispatcher = connection.playFile(server.queue[0]);
    server.queue.shift();
    setTimeout(function(){
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
    }, 3000);

}

class Surprise_Local extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'sm1',
            group: 'audio',
            memberName: 'sm1',
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
                        server.queue.push('./audio/llama.mp3');
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

module.exports = Surprise_Local;
