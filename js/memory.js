var cardArr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,0,0]
function Memory() {
this.cards = cardArr.sort(function(a, b){return 0.5 - Math.random()});
}





exports.journalMemory = Memory;
