module.exports = {
    process: (message) => {
        let message_lower = message.content.toLowerCase();
        let message_list = message_lower.split(" ");
        // message.channel.send(message_lower);
        if(message_list.includes("james"))
        {
            return james();
        }
        // var message_string = message.content.toLowerCase();
        // if(message_string.indexOf("james") !== -1)
        // {
        //     return james();
        // }

        return false;
    },
};

function james(){
    return "james is fat"
}