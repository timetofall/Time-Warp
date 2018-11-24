module.exports = {
    process: (message) => {
        switch(message.content) {
        case "popcorns":
            return "Banana is good!";
        case "james":
            return "I am not a fan of orange.";
        case "Apple":
            return "How you like them apples?";
        default:
            return "I have never heard of that fruit...";
        }
    },
};

function popcorns(){
    return "James is ugly"
}