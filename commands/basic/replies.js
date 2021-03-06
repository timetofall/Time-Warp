// this is the one you want to change when checking people
function process_message(message){
    const cmds = require("./replies_functions.js");
    let message_string = message.content.toLowerCase();
    // let mentioned_string = get_mentioned_names(message);

    // message_string = message_string + mentioned_string;

    let message_list = message_string.split(" ");

    let text = "";

    if(test_names(message_list, ["james", "jamesy", "jamesie", "retsiem"]))
    {
        text = text + cmds.james() + "\n";
    }
    if(test_names(message_list, ["wes", "thug"]))
    {
        text = text + cmds.wes() + "\n";
    }
    //new
    if(test_names(message_list, ["shinnu", "ivor"]))
    {
        text = text + cmds.shinnu() + "\n";
    }
    if(test_names(message_list, ["migals", "migs"]))
    {
        text = text + cmds.migals() + "\n";
    }
    if(test_names(message_list, ["chris", "zathik", "bob"]))
    {
        text = text + cmds.zathik() + "\n";
    }
    if(test_names(message_list, ["angelo", "shinihs", "angles"]))
    {
        text = text + cmds.angelo() + "\n";
    }
    if(test_names(message_list, ["phoneyy", "phoney", "dan", "rix", "riecks", "daniel", "rixxy"]))
    {
        text = text + cmds.phoneyy() + "\n";
    }

    return text
}

module.exports = {
    process: (bot, message) => {
        let text = "";
        if (message.author !== bot.user) {
            text = process_message(message);
        }
        if (text){
            message.channel.send(text);
        }
    },
};

function test_names(message, names){
    // return names.find(name => message.indexOf(name) !== -1);
    // names.some(a => list.indexOf(a) >= 0);
    return names.some(n => message.indexOf(n) >= 0);
}

function get_mentioned_names(message){
    let mentioned_users = "";
    if (message.mentions.members){
        let mentioned_array = message.mentions.members.array();
        for (let i = 0; i < mentioned_array.length; i++){
            mentioned_users += mentioned_array[i].user.username.toLowerCase() + " ";
            mentioned_users += mentioned_array[i].displayName.toLowerCase() + " ";
        }
    }
    return mentioned_users;
}
