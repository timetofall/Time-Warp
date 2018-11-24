module.exports = {
    process: (message) => {
        // let message_lower = message.content.toLowerCase();
        // let message_list = message_lower.split(" ");
        //
        // if(message_list.includes("james"))
        // {
        //     return james();
        // }

        let message_string = message.content.toLowerCase();
        message.channel.send(message_string.indexOf("james"));
        if(message_string.indexOf("james") !== -1)
        {
            return james();
        }

        return false;
    },
};

function james(){
    return "james is fat"
}