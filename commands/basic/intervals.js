function status(bot)
{
    bot.user.setActivity('Starting Up');
    setInterval(() => {
        let date = new Date();
        let day_number = date.getDay();
        let day_hour = date.getHours();
        let day_minute = date.getMinutes();
        let day_second = date.getSeconds();
        
        //Day & Hour is in GMT Time
        let raid_tuesday = day_number === 3 && day_hour === 1 && day_minute === 44; //&& day_second === 00; //if minute is at 39 it will do it at 40
        let raid_wednesday = day_number === 4 && day_hour === 1 && day_minute === 44;
        let raid_sunday = day_number === 1 && day_hour === 0 && day_minute === 44;

        if(raid_tuesday || raid_wednesday || raid_sunday)
        {
            if (raid_on)
            {
                bot.user.setActivity('Salt Raid', { type: 'WATCHING' });
            }
            else
            {
                bot.user.setActivity('Diablo Immortal', {type: 'PLAYING'});
            }
        }
        else
        {
            bot.user.setActivity('Diablo Immortal', {type: 'PLAYING'});
        }
    }, 60 * 1000);
}

exports.status = status;