module.exports = {
    Play: (connection, message) => {
        let server = play_queue[message.guild.id];
        const streamOptions = {seek: 0, volume: .25};
        server.dispatcher = connection.playFile(server.queue[0], streamOptions);
        server.queue.shift();
        server.dispatcher.on("end", function () {
            if (server.queue[0]) {
                Play(connection, message);
            }
            else {
                connection.disconnect();

            }
        })
    }
};