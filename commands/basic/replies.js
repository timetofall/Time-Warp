module.exports = {
    process: (message) => {
        // var message_list = message.content.str.toLowerCase().split(" ");
        var message_string = message.content.stri.toLowerCase();
        if(message_string.indexOf("james") !== -1)
        {
            return james();
        }
        // if(message_list.includes("james"))
        // {
        //     return james();
        // }

        return false;
    },
};

function james(){
    return "james is fat"
}