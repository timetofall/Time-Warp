module.exports = {
        surprise: (message) => {
                if (message.member.voiceChannel) {
                        message.reply("james")
                        message.member.voiceChannel.join().then(connection => {
                                message.reply('I have successfully connected to the channel!');
                        })
                }
                else {
                        message.reply("ur stoopid")
                }
        },
};
