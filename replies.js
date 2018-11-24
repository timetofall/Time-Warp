// export function hello() {
//   return "Hello";
// }

// export function processMessage(message) {
//   return "hello"
// }


module.exports = {
    process: (message) => {
            if(message == "popcorns")
            {
                return popcorns()
            }
            else
            {
                return "hi"
            }
    },
};

function popcorns() {
    return "James is TEST, <:popfeels:477323348125286405>"
}
