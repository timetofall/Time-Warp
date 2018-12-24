//Line 2-6 is requiring necessary files and connecting to the DB
const mongoose = require("mongoose");
const raidStatus = require("../../models/raidStatus.js");
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
});

// One time connection to display a success message or error message (Also prints the raid_time_status function)
mongoose.connection.once('open', function(){
    console.log('MongoDB Database Connected');
    raid_time_status();
}).on('error', function(error){
    console.log('MongoDB Connection Error:', error);
});

// Function that displays if the raid_status in the MongoDB is true or false
function raid_time_status(){
    raidStatus.findOne(function (err, raidStatuses) {
        if(err) return console.error(err);
        console.log("Raid_Status:", raidStatuses.raid_status);
    });
}

// Function that updates the MongoDB raid_status to false if -raid off is called
function raid_status_off(){
    raidStatus.updateOne({ raid_status: true }, { $set: { raid_status: false } }, { new: true }, function(err, raidStatuses) {
        if (err) {
            console.log("Unable to set Raid_Status to FALSE");
        }
        raid_time_status();
    });
}

// Function that updates the MongoDB raid_status to true if -raid on is called
function raid_status_on(){
    raidStatus.updateOne({ raid_status: false }, { $set: { raid_status: true } }, { new: true }, function(err, raidStatuses) {
        if (err) {
            console.log("Unable to set Raid_Status to TRUE");
        }
        raid_time_status();
    });
}

module.exports = {
    raid_time: (bot) => {
        let val = bot.guilds.find(val => val == "SaltGuild").roles.find(val => val.name == "@raiders");
        let val1 = bot.guilds.find(val => val == "SaltGuild").roles.find(val => val.name == "@trials");
        
        const channel = bot.channels.find(val => val.name === 'raid');
        setInterval(() => {
            let date = new Date();
            let day_number = date.getDay();
            let day_hour = date.getHours();
            let day_minute = date.getMinutes();
            //let day_second = date.getSeconds();
            
            //Day & Hour is in GMT Time
            let raid_tuesday = channel && day_number === 3 && day_hour === 1 && day_minute === 44; //&& day_second === 00; //if minute is at 39 it will do it at 40
            let raid_wednesday = channel && day_number === 4 && day_hour === 1 && day_minute === 44;
            let raid_sunday = channel && day_number === 1 && day_hour === 0 && day_minute === 44;

            // Opens the data from the DB and if raidStatuses.raid_status is true, it will do the if statements inside)
            raidStatus.findOne(function (err, raidStatuses) {
                if(err) return console.error(err);

                if(raidStatuses.raid_status){
                    if(raid_tuesday)
                        {
                            channel.send(`${val1} ${val}, Raid starts in about 15 minutes!`)
                            channel.send(`${val1} ${val}, DON'T FORGET TO BUY YOUR REROLLS!`)
                        }
                    else if(raid_wednesday || raid_sunday)
                        {
                            channel.send(`${val1} ${val}, Raid starts in about 15 minutes!`)
                        }
                }
            }); // raidStatus.findOne
        }, 60000); // Runs this every 1 minute.
    },

    raid_toggle: (bot, message) => {
        if (message.author !== bot.user) {
            // install league james
            if(message.author.tag === "Retsiem#6486" || message.author.tag === "Kanetsugu#7836" || message.author.tag === "kwandar#3006"){
                if (message.content === "-raid off")
                {
                    raid_status_off();
                    bot.user.setActivity('Diablo Immortal (R-)', {type: 'PLAYING'});
                    message.channel.send("Raiding schedule is OFF");
                }
                if (message.content === "-raid on")
                {
                    raid_status_on();
                    bot.user.setActivity('Diablo Immortal (R+)', { type: 'PLAYING' });
                    message.channel.send("Raiding schedule is ON");
                }
            }
        }
    }
};