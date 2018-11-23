const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'flip',
            group: 'basic',
            memberName: 'flip',
            description: 'Flips a coin, landing on either Heads or Tails'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2);
        if (chance == 0)
        {
            message.reply("Your coin landed on Heads!");
            //message.channel.send("Your coin landed on Heads!"); // Sends the text without tagging the user
        }
        else
        {
            message.reply("Your coin landed on Tails!");
            //message.channel.send("Your coin landed on Tails!");  // Sends the text without tagging the user
        }
    }
}

module.exports = CoinFlipCommand;
