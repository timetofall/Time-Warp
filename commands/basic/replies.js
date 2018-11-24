module.exports = {
    process: (message) => {

        const cmds = require("./replies_functions.js");

        let message_string = message.content.toLowerCase();
        let text = "";
        if(test_names(message_string, ["james", "jamesy", "jamesie"]))
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

// function james(){
//     let myArray = ['james is fat', 'james is ugly', 'james is PHAT'];
//     return myArray[Math.floor(Math.random() * myArray.length)];
// }
//
// function wes(){
//     let myArray = ["hi wes", "hi thug"];
//     return myArray[Math.floor(Math.random() * myArray.length)];
// }

function test_names(message, names){
    return names.find(name => message.indexOf(name) !== -1);
}