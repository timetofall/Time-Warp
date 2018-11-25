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
            let raid_tuesday = channel && day_number === 2 && day_hour === 21 && day_minute === 44; //&& day_second === 00; //if minute is at 39 it will do it at 40
            let raid_wednesday = channel && day_number === 3 && day_hour === 21 && day_minute === 44;
            let raid_sunday = channel && day_number === 0 && day_hour === 20 && day_minute === 44;

            //let raid_test = channel && day_number === 0 && day_hour === 17 && day_minute === 28;

            if(raid_tuesday || raid_wednesday || raid_sunday)
            {
                channel.send(`${val}, Raid starts in 15 minutes!`)
            }
            else
            {

            }
        }, 60000); // Runs this every 1 minute.
    },
    raid_toggle: (message) => {
        if (message.author !== bot.user) {
            if (message.content === "-raid off"){
                window.raid_on = !window.raid_on;
            }
        }
    }
};