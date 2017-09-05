console.log("File is loaded.");

//Initialize all ship sounds in their respective variables
var sound_hit = new Audio();
sound_hit.src = "../audio/explosion-3.wav";
var HIT_DELAY = 2000;//Amount of time required to complete hit animation, before changing page


var ship = $("#imperialNavDestroyer2");
ship.css({"position":"fixed", "top":"82%", "left":"30px", "width": "320px", "z-index": "200"});

//Global value to save angle of ship
var saved_angle = 0;
$(document).click(function (e) {
  console.log("CLiK");
  e.preventDefault();//make sure we get to shoot first...

  //Log info
  var target = e.target;
  console.log("target: ", target);
  console.log("event: ", e);
  console.log("target.href: ", target.href);

  var projectile = $('<img src="../img/laserbeam.png">');   // Create with jQuery
  projectile.css({"position":"fixed", "top":"82%", "left":"42px", "width": "150px", "z-index": "199"});
  projectile.css({ "-webkit-transform": 'rotate(' + (saved_angle-45) + 'deg)'});    
  projectile.css({ "-webkit-transition": "0.4s", "transition": "0.4s"});    
  projectile.css({ "transition-timing-function": "linear", "-webkit-transition-timing-function": "linear"});    

  //projectile.css({ '-moz-transform': 'rotate(' + saved_angle+115 + 'deg)'});
  //projectile.css({ 'transform': 'rotate(' + saved_angle+115 + 'deg)'});
  $("body").append(projectile);
  setTimeout(function(){ projectile.css({"top": (e.pageY-75)+"px", "left": (e.pageX-75)+"px"}); }, 10);
  setTimeout(function(){ projectile.remove() }, 500);

  var explosion = $('<img src="../img/explosion.gif">');   // Create with jQuery
  explosion.css({"position":"fixed", "top": (e.pageY-60)+"px", "left": (e.pageX-40)+"px", "width": "100px", "z-index": "199", "display": "none"});

  setTimeout(function(){ sound_hit.play(); }, 540);
  setTimeout(function(){ explosion.css({"display": "inline"}); }, 600);
  setTimeout(function(){ explosion.remove(); }, 740);






  $("body").append(explosion);
  setTimeout(function(){ projectile.remove() }, 500);
  //setTimeout(function(){ projectile.css({"top":"42px", "left":"42px"}); }, 3000);
  
  //Check if we have to follow link
  if(target.href) {
    console.log("relocating");
    console.log("3 seconds must pass.");
    setTimeout(function(){ window.location = target.href; }, 1400);
    //setTimeout(function(){ window.location = target.href; }, 3000);
  }
  else {
    console.log("no href here");
  }

  //All done.
  console.log("CLiK'd");
});


$(document).mousemove(function(e){
  //Dummy ball follows pointer
  //@@@ SUPER AWESOME PINK BALL
  //$("#ball").css({left:e.pageX-150, top:e.pageY-150});

  var top_shipOffset = 90;
  var left_shipOffset = 80;
  shipCenter = [ship.offset().left+left_shipOffset, ship.offset().top+top_shipOffset];
  var a = e.pageX - shipCenter[0];
  var b = e.pageY - shipCenter[1];
  var dist = Math.sqrt(a*a + b*b);

  if(dist > 160) {
    //Calculate angle for ship to be pointed
    //var angle = Math.atan2(e.pageX- ship_center_x,- (e.pageY- ship_center_y) )*(180/Math.PI);
    var angle = Math.atan2(e.pageX- shipCenter[0],- (e.pageY- shipCenter[1]) )*(180/Math.PI);
    angle -= 94;
    ship.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});    
    ship.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});
    ship.css({ 'transform': 'rotate(' + angle + 'deg)'});
    ship.css({ 'transform-origin': "80px 90px"});
    ship.css({ '-ms-transform-origin': "80px 90px"});

    saved_angle = angle;
  }
});
