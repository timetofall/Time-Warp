module.exports = {
    process: (message) => {
        var message_list = message.content.split(" ");
        if(message_list.includes("james"))
        {
            return james()
        }
    },
};

function james(){
    return "james is fat"
}