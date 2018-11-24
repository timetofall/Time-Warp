module.exports = {
    process: (message) => {
        if (message == "popcorns") {
            return popcorns();
        }
        else
        {
            return false;
        }
    },
};

function popcorns(){
    return "James is ugly"
}