module.exports = {
    raidAttendance: (bot, message) => {
        if (message.content.startsWith("!ra")){
            let allowedRole = message.guild.roles.find(role => role.name === "@officers");
            if (message.member.roles.has(allowedRole.id)) {
                message.delete();
                message.channel.send(message.content.slice(3, message.content.length))
                .then(function (message) {
                    message.react("❌"),
                    message.edit(message.content + "  `" + message.id + "`")
                    //console.log(message.id);
                }).catch(console.error);
            }
            else if(!message.member.roles.has(allowedRole.id)){
                message.channel.send("🤔 You are not an Officer");
            } 
        }
    },

    raidAttendanceDisplay: (bot, message) => {
        if (message.content.startsWith("!dar")){
            let allowedRole = message.guild.roles.find(role => role.name === "@officers");
            if (message.member.roles.has(allowedRole.id)) { 
                bot.channels.find("name","raidattendance").fetchMessage(message.content.slice(4, message.content.length)) //raidattendance channel   YIKES
                .then(message => {
                //console.log(message.content)
                //console.log(message.reactions.get('❌').fetchUsers(100))
                message.reactions.get('❌').fetchUsers(100)
                .then(reactions => {
                    // console.log(reactions.map(g => g.username).join("\n"));
                    bot.channels.find("name","officers").send({ embed: { // Officers channel
                        //author: {
                        //name: bot.user.username,
                        //icon_url: bot.user.avatarURL
                        //}
                        color: 15158332,
                        title: "**" + message.content + "**",
                        //description: "List of Raiders who posted out"
                        fields: [{
                            name: "---- Raiders Posted Out ----",
                            value: "**" + reactions.map(g => g.username).join("\n") + "**"
                          },
                        ],
                        footer: {
                        icon_url: bot.user.avatarURL,
                        text: "Raid Attendance generated by Time Warp"
                        }
                    }});
                })
                })
                .catch(console.error);
            } 
            else if(!message.member.roles.has(allowedRole.id)){
                message.channel.send("🤔 You are not an Officer");
            } // else if(!message.member.roles.has(allowedRole.id))
        } // if (message.content.startsWith("!dar"))
    } // raidAttendanceDisplay
}; // module.exports





// const msgContent = message.content.slice(3, message.content.length);
// console.log("msgContent:", msgContent);


            /* const reactionNames = reaction.users.map(g => g.username).join("\n");
            message.channel.send({ embed: {
                color: 3447003,
                description: reactionNames
            }
            }); */

        //bot.on('messageReactionAdd', (reaction, user) => {
            //const reactionNames = reaction.users.map(g => g.username).join("\n");
            //if(reaction.emoji.name === "❌"){
                //const reactionContent = reaction.users.map(g => g.lastMessage).join("\n");
                //console.log(reaction.users);
                //console.log(reactionNames);
            //}