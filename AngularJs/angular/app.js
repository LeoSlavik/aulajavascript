var message = "Help me , Obi_Wan Kenobi. You're are my only hope!";
console.log(message);
/* concatenação natural do ts
let episode:number = 4
episode = "4" // o proprio ts avisa pra você q esse n é a tipagem correta pra ocasião
console.log('this episode is ' + 4)
episode = episode + 1
console.log("next episode is" + episode)
*/
//maneira correta 
var episodeN = 4;
episodeN = 4;
console.log('this episode is ' + 4);
episodeN = episodeN + 1;
console.log("next episode is " + episodeN);
var MyFavDroid;
MyFavDroid = 'BB-8';
MyFavDroid = 10;
MyFavDroid = true;
console.log("My Favorite Droid is " + MyFavDroid);
var IsEnoughtToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("is ".concat(distance, " parsecs enough to beat Millenium Falcon? ").concat(IsEnoughtToBeatMF(distance) ? 'yes' : 'no'));
var call = function (name) { return console.log("Do you copy ,".concat(name, "?")); };
call('R2');
//call(1)
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed - inc;
}
console.log("inc (5,1)   = ".concat(inc(5, 1)));
console.log("inc 5) = ".concat(inc(5)));
