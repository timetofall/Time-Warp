module.exports = {
    process: (message) => {
        if (message == "popcorns") {
            return popcorns();
        }
        else
        {
            return "Shinnu is fat";
        }
    },
};

function popcorns(){
    return "James is ugly"
}