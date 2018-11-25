module.exports = {
    process: (message) => {

        const cmds = require("./replies_functions.js");

        let message_string = message.content.toLowerCase() + message.mentions.users.array().toString().toLowerCase();
        // message.channel.send(message_string);
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