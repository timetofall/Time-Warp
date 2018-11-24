module.exports = {
    process: (message) => {
        var text;
        switch(message) {
        case "popcorns":
            return "Banana is good!";
        case "james":
            return "I am not a fan of orange.";
        case "Apple":
            return "How you like them apples?";
        default:
            return text = "I have never heard of that fruit...";
        }
    },
};

function popcorns(){
    return "James is ugly"
}