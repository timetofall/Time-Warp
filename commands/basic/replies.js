module.exports = {
    process: (message) => {
        let response;
        switch(message)
        {
        case "popcorns":
            response = popcorns();
            break;
        default:
            response = "Shinnu is PHAT";
        }
        return response;
    },
};

function popcorns(){
    return "James is ugly"
}