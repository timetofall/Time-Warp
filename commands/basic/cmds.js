module.exports = {
    commands: (bot, message) => {
        if (message.author !== bot.user) {
            if (message.content === "-cmds")
            {
                message.channel.send(
                "__**Available Commands**__ \n" +
                "\n__Basic__\n" + 
                "Basic commands maybe one day.\n" +
                "\n__Audio__\n" +
                "Audio commands maybe one day.\n" +
                "\n__Raid(Officers)__\n" +
                "**-raid on|off:** Turns the whole raiding schedule on/off. (R+)(R-)\n    Ex: `-raid on`\n" +
                "**-raid_monday on|off:** Turns monday raid announcement on/off.\n    Ex: `-raid_monday off`\n" +
                "**-raid_sunday on|off:** Turns sunday raid announcement on/off.\n    Ex: `-raid_sunday on`\n" +
                "**-raid_info:** Displays on/off state of raiding sched. and monday raid.\n" +
                "\n__Raid SPECIAL(Officers)__\n" +
                "**!ra:** Creates raid attendance posts (use in #raidattendance ONLY) \n      Ex. `!ra Wednesday - 01/09/2019 - Mythic @ 9:00 EST`\n" +
                "**!dar:** Displays list of raiders posted out on a specific day(#officers)\n      Ex. `!dar 526117929033400350`\n"
                );
            }
        }
    }
}