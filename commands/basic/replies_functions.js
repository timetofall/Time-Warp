module.exports = {
    james(){
        let myArray = ['james is fat', 'james is ugly', 'james is PHAT'];
        return myArray[Math.floor(Math.random() * myArray.length)];
    },

    wes(){
        let myArray = ["hi wes", "hi thug"];
        return myArray[Math.floor(Math.random() * myArray.length)];
    },
};