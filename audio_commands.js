module.exports = {
        surprise: (message) => {
                if (message.member.voiceChannel) {
                        message.reply("hi")
                        message.member.voiceChannel.join()
                }
                else {
                        message.reply("ur stoopid")
                }
        },
};
