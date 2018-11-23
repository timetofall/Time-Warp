module.exports = {
        surprise: (message) => {
                if (message.member.voiceChannel) {
                        message.reply("hi")
                }
                else {
                        message.reply("ur stoopid")
                }
        },
};
