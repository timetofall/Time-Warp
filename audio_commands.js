module.exports = {
        surprise: (message) => {
                message.member.voiceChannel.join()
                        .then(connection => {
                                message.reply('I have successfully connected to the channel!');
                })
        },
};
