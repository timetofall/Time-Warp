module.exports = {
    process: (message) => {
        let message_string = message.content.toLowerCase();
        let text = "";
        if(test_names(message_string, ["james", "jamesy", "jamesie"]))
        {
            text = text + james() + "\n";
        }
        if(test_names(message_string, ["wes"]))
        {
            text = text + wes() + "\n";
        }

        return text;
    },
};

function james(){
    let myArray = ['james is fat', 'james is ugly', 'james is PHAT'];
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function wes(){
    let myArray = ["hi wes", "hi thug"];
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function test_names(message, names){
	let test = names.find(a => message.indexOf(a) !== -1);
    return test
}