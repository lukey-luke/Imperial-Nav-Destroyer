//Initialize all ship sounds in their respective variables
var sound_begin = new Audio();
sound_begin.src = "./audio/move-ship.mp3";
var sound_fire = new Audio();
sound_fire.src = "audio/ship-laser.mp3";
var sound_hit = new Audio();
sound_hit.src = "./audio/explosion.mp3";

var HIT_DELAY = 2000;//Amount of time required to complete hit animation, before changing page

function hit(link, hitLocation) {
    sound_hit.play();
    //TODO make explsion gif appear at spot specifed by hitLocation
    setTimeout(function(){window.location.href=link}, HIT_DELAY);
}
