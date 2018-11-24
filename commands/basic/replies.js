module.exports = {
    process: (message) => {
        switch(message) {
        case "popcorns":
            return popcorns();
        default:
            return "Shinnu is PHAT";
        }
    },
};

function popcorns(){
    return "James is ugly"
}