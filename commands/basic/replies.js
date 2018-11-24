module.exports = {
    process: (message) => {
        switch(message.content) {
        case "angelo":
            return angelo();
        default:
            return false;
        }
    },
};

function angelo(){
    return "where is angelo"
}