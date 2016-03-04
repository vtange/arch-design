document.addEventListener("DOMContentLoaded", function() {

var $header = document.getElementById("header");
var	$bg = document.getElementById('bg');
var	$misc = document.getElementById('misc');
var miscDivPosition = 0;
	
function fadeIn(el) {
 if (!el.style){
	 el[0].style.opacity = 1;
 }
 else{
 	 el.style.opacity = 1;
 }
}
function MouseWheelHandler(e, delta) {

	// cross-browser wheel delta
	var e = window.event || e; // old IE support
	var delta = 0;
	if (e.wheelDelta) {
		delta = e.wheelDelta/120; 
	} else if (e.detail) {
		delta = -e.detail/3;
	}
	if (delta)
		handle(delta);
        if (e.preventDefault)
                e.preventDefault();
        e.returnValue = false;
	
}
	
function handle(delta) {
	miscDivPosition += delta * 10;
    misc.style.webkitTransform = 'translateY('+miscDivPosition+'px)'; 
    misc.style.mozTransform    = 'translateY('+miscDivPosition+'px)'; 
    misc.style.transform       = 'translateY('+miscDivPosition+'px)'; 
}
	
window.setTimeout(function(){
	fadeIn(document.getElementById("background"));
	window.setTimeout(function(){
		fadeIn($header.getElementsByTagName("h1"));
		window.setTimeout(function(){
			fadeIn($header.getElementsByTagName("p"));
		},500);
	},500);
},500);

if ($bg.addEventListener) {
	// IE9, Chrome, Safari, Opera
	$bg.addEventListener("mousewheel", MouseWheelHandler, false);
	// Firefox
	$bg.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
}
	
});