module.exports = {
    raid_time: (bot) => {
        let val = bot.guilds.find(val => val == "SaltGuild").roles.find(val => val.name == "@raiders");
        const channel = bot.channels.find(val => val.name === 'raid');
        setInterval(() => {
            let date = new Date();
            let day_number = date.getDay();
            let day_hour = date.getHours();
            let day_minute = date.getMinutes();
            let day_second = date.getSeconds();
            
            //Day & Hour is in GMT Time
            let raid_tuesday = channel && day_number === 3 && day_hour === 1 && day_minute === 44; //&& day_second === 00; //if minute is at 39 it will do it at 40
            let raid_wednesday = channel && day_number === 4 && day_hour === 1 && day_minute === 44;
            let raid_sunday = channel && day_number === 1 && day_hour === 0 && day_minute === 44;

            if (raid_on){
                if(raid_tuesday || raid_wednesday || raid_sunday)
                    {
                        channel.send(`${val}, Raid starts in about 15 minutes!`)
                    }
            }
        }, 60000); // Runs this every 1 minute.
    },
    raid_toggle: (bot, message) => {
        if (message.author !== bot.user) {
            // install league james
            if(message.author.tag === "Retsiem#6486" || message.author.tag === "Kanetsugu#7836"){
                if (message.content === "-raid off"){
                    raid_on = false;
                    console.log("Raid_Time Status:", raid_on);
                    message.channel.send("Raiding schedule is off");
                }
                if (message.content === "-raid on")
                {
                    raid_on = true;
                    console.log("Raid_Time Status:", raid_on);
                    message.channel.send("Raiding schedule is on");
                }
            }

        }
    }
};