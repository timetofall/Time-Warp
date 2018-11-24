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
    let myArray = ['james is fat', 'james is ugly', 'james is PHAT'];
    return myArray[Math.floor(Math.random() * myArray.length)];
}