export function processMessage(message) {
  switch(message) {
    case 'popcorns':
        return popcorns();
    default:
        return false
    }
}

function popcorns() {
    return "James is TEST, <:popfeels:477323348125286405>"
}
