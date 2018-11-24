module.exports = {
    process: (message) => {
        var text;
        switch(message) {
        case "popcorns":
            text = "Banana is good!";
            break;
        case "james":
            text = "I am not a fan of orange.";
            break;
        case "Apple":
            text = "How you like them apples?";
            break;
        default:
            text = "I have never heard of that fruit...";
        }
        return text
    },
};

function popcorns(){
    return "James is ugly"
}