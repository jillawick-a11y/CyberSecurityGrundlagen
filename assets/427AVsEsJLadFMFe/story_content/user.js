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

// Falls der Text als Link formatiert ist (Hyperlink), extrahiere nur den Text-Inhalt
function stripHTML(html){
  var div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

var cleanInput = stripHTML(userInput);

// Gesuchte E-Mail, alles in Kleinbuchstaben und getrimmt
var validAnswer = "walter.where.privat@gmail.com";
var normalizedInput = cleanInput.toLowerCase().trim();

if(normalizedInput === validAnswer){
    player.SetVar("AntwortRichtig", true);
}else{
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
