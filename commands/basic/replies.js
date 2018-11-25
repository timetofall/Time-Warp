module.exports = {
    process: (message) => {

        const cmds = require("./replies_functions.js");

        let message_string = message.content.toLowerCase();
        let mentioned_string = get_mentioned_names(message);

        message_string = message_string + mentioned_string;

        let text = "";
        if(test_names(message_string, ["James", "james", "jamesy", "jamesie", "retsiem"]))
        {
            text = text + cmds.james() + "\n";
        }
        if(test_names(message_string, ["wes"]))
        {
            text = text + cmds.wes() + "\n";
        }

        return text;
    },
};

function test_names(message, names){
    return names.find(name => message.indexOf(name) !== -1);
}

function get_mentioned_names(message){
    let mentioned_array = message.mentions.members.array();
    let mentioned_users = "";

    for (let i = 0; i < mentioned_array.length; i++){
        mentioned_users += mentioned_array[i].user.username.toLowerCase() + " ";
        mentioned_users += mentioned_array[i].displayName.toLowerCase() + " ";
    }

    return mentioned_users;
}