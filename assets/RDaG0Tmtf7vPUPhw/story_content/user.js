window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  if (/.html/.test(window.location.href)) {
if (!window.movedCaptions){
var sheet = document.createElement('style');
sheet.innerHTML = ".caption{margin-bottom:35px !important;}";
document.body.appendChild(sheet);
window.movedCaptions = true;
}
}
}

window.Script2 = function()
{
  var player = GetPlayer();
var userInput = player.GetVar("Antwort");
var validAnswer = "Bellomio";

// Vergleich ohne Berücksichtigung der Groß-/Kleinschreibung
if (userInput && userInput.toLowerCase().trim() === validAnswer.toLowerCase()) {
    player.SetVar("AntwortRichtig", true);
} else {
    player.SetVar("AntwortRichtig", false);
}

}

window.Script3 = function()
{
  if (/.html/.test(window.location.href)) {
if (!window.movedCaptions){
var sheet = document.createElement('style');
sheet.innerHTML = ".caption{margin-bottom:35px !important;}";
document.body.appendChild(sheet);
window.movedCaptions = true;
}
}
}

};
