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
        console.log("Monday:", raidStatuses.monday);
        console.log("Sunday:", raidStatuses.sunday);
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

function raid_monday_on(){
    raidStatus.updateOne({ monday: false }, { $set: { monday: true } }, { new: true }, function(err, raidStatuses) {
        if (err) {
            console.log("Unable to set monday to TRUE");
        }
        raid_time_status();
    });
}

function raid_sunday_on(){
    raidStatus.updateOne({ sunday: false }, { $set: { sunday: true } }, { new: true }, function(err, raidStatuses) {
        if (err) {
            console.log("Unable to set sunday to TRUE");
        }
        raid_time_status();
    });
}

function raid_monday_off(){
    raidStatus.updateOne({ monday: true }, { $set: { monday: false } }, { new: true }, function(err, raidStatuses) {
        if (err) {
            console.log("Unable to set monday to FALSE");
        }
        raid_time_status();
    });
}

function raid_sunday_off(){
    raidStatus.updateOne({ sunday: true }, { $set: { sunday: false } }, { new: true }, function(err, raidStatuses) {
        if (err) {
            console.log("Unable to set sunday to FALSE");
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
            let raid_monday = channel && day_number === 2 && day_hour === 0 && day_minute === 44;
            let raid_tuesday = channel && day_number === 3 && day_hour === 0 && day_minute === 44; //&& day_second === 00; //if minute is at 39 it will do it at 40
            let raid_wednesday = channel && day_number === 4 && day_hour === 0 && day_minute === 44;
            let raid_sunday = channel && day_number === 1 && day_hour === 23 && day_minute === 44;

            // Opens the data from the DB and if raidStatuses.raid_status is true, it will do the if statements inside)
            raidStatus.findOne(function (err, raidStatuses) {
                if(err) return console.error(err);
                    
            if(raidStatuses.raid_status){
                if(raid_tuesday)
                    {
                        channel.send(`${val1} ${val}, Raid starts in about 15 minutes!`)
                        channel.send(`${val1} ${val}, DON'T FORGET TO BUY YOUR REROLLS!`)
                    }
                else if(raid_wednesday)
                    {
                        channel.send(`${val1} ${val}, Raid starts in about 15 minutes!`)
                    }
                else if(raid_monday)
                {
                    if(raidStatuses.monday)
                    {
                        channel.send(`${val1} ${val}, Monday raid starts in about 15 minutes! 🍆💦`)
                    }
                }
                else if(raid_sunday)
                {
                    if(raidStatuses.sunday)
                    {
                        channel.send(`${val1} ${val}, Sunday raid starts in about 15 minutes!`)
                    }
                }
            }
            }); // raidStatus.findOne
        }, 60000); // Runs this every 1 minute.
    },
    raid_toggle: (bot, message) => {
        if (message.author !== bot.user) {
            let allowedRole = message.guild.roles.find(role => role.name === "@officers");
            if (message.member.roles.has(allowedRole.id) || message.author.tag === "Retsiem#6486" || message.author.tag === "Kanetsugu#7836" || message.author.tag === "kwandar#3006") {
            //if(message.author.tag === "Retsiem#6486" || message.author.tag === "Kanetsugu#7836" || message.author.tag === "kwandar#3006"){

                if (message.content === "-raid off")
                {
                    raid_status_off();
                    bot.user.setActivity('WoW Classic (R-) -cmds', {type: 'PLAYING'});
                    message.channel.send("Raiding schedule is OFF");
                }
                if (message.content === "-raid on")
                {
                    raid_status_on();
                    bot.user.setActivity('WoW Classic (R+) -cmds', { type: 'PLAYING' });
                    message.channel.send("Raiding schedule is ON");
                }
                //Monday ON
                if (message.content === "-raid_monday on")
                {
                    raid_monday_on();
                    message.channel.send("Monday raid is ON");
                }
                //Sunday ON
                if (message.content === "-raid_sunday on")
                {
                    raid_sunday_on();
                    message.channel.send("Sunday raid is ON");
                }
                //Monday OFF
                if (message.content === "-raid_monday off")
                {
                    raid_monday_off();
                    message.channel.send("Monday raid is OFF");
                }
                //Sunday OFF
                if (message.content === "-raid_sunday off")
                {
                    raid_sunday_off();
                    message.channel.send("Sunday raid is OFF");
                }
                if (message.content === "-raid_info") //raid status command to display current settings
                {
                    raidStatus.findOne(function (err, raidStatuses) {
                        if(err) return console.error(err);
                        if(raidStatuses.raid_status){rs = "ON";} else{rs = "OFF";}
                        if(raidStatuses.monday){mr = "ON";} else{mr = "OFF";}
                        if(raidStatuses.sunday){sr = "ON";} else{sr = "OFF";}
                        message.channel.send("__**Raid Info**__\n **\nRaiding Schedule:** " + rs + "\n" + "**Monday Raid:** " + mr + "\n**Sunday Raid:** " + sr); // condensed to one line
                        //message.channel.send("Monday Raid: " + mr);
                    });
                }
            }
        }
    },
    auto_SetActivity: (bot) => { // On bot start-up this module checks if raid_status is true or false in MongoDB and sets the Activity
        raidStatus.findOne(function (err, raidStatuses) {
            if(err) return console.error(err);

            if(raidStatuses.raid_status)
            {
                bot.user.setActivity('WoW Classic (R+) -cmds', { type: 'PLAYING' });
            }
            else
            {
                bot.user.setActivity('WoW Classic (R-) -cmds', { type: 'PLAYING' });
            }
        });
    }
};