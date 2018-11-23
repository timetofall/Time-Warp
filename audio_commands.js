module.exports = {
        surprise: (message) => {
                if (message.member.voiceChannel) {
                        message.reply("bye")
                        message.member.voiceChannel.join()
                }
                else {
                        message.reply("ur stoopid")
                }
        },
};
