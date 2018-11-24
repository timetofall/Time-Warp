module.exports = {
    process: (message) => {
        var message_lower = message.content.toLowerCase();
        var message_string = message_lower.split(" ")
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