const commando = require('discord.js-commando');

function Play(connection, message)
{
    let server = play_queue[message.guild.id];
    const broadcast = client.createVoiceBroadcast().playFile(server.queue[0]);
    const streamOptions = { seek: 0, volume: .25 };
    server.dispatcher = voiceConnection.playBroadcast(broadcast, streamOptions);
    server.dispatcher.setVolume(0.5);
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

class SM extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'sm2',
            group: 'audio',
            memberName: 'sm2',
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

module.exports = SM;
