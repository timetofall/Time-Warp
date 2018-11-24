module.exports = {
    process: (message) => {
        let message_string = message.content.toLowerCase();
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