const Discord = require('discord.js');

const client = new Discord.Client();

// const cmds = require("./commands.js");

client.on('message', (receivedMessage) => {
   if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
       return
   }
   if (receivedMessage.content.startsWith("!")) {
       processCommand(receivedMessage)
   }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)
    }
    else if (primaryCommand == "popcorns") {
//         cmds.popcorns(receivedMessage)
        popcorns(receivedMessage)
    }
    else {
//         receivedMessage.channel.send("Ur fat")
        receivedMessage.reply("Ur fat")
    }
}

function helpCommand(arguments, receivedMessage) {
    if (arguments.length > 0) {
        receivedMessage.channel.send("Get gud scrub")
    } else {
        receivedMessage.channel.send("Git gud scrub")
    }
}

function popcorns(receivedMessage) {
   receivedMessage.channel.send("<:popfeels:477323348125286405>")
}
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
