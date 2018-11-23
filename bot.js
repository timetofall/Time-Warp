const Discord = require('discord.js');

const client = new Discord.Client();

const cmds = require("./commands.js");
const audio = require("./audio_commands.js");

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
        cmds.helpCommand(receivedMessage)
    }
    else if (primaryCommand == "popcorns") {
        cmds.popcorns(receivedMessage)
    }
    else if (primaryCommand == "surprise") {
        audio.surprise(receivedMessage)
    }
    else {
        receivedMessage.reply("Ur phat")
    }
}


client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) {
     message.reply("nope")
     return;
  }

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    message.reply("nope")
    if (message.member.voiceChannel) {
      message.reply("yes")
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
