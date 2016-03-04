document.addEventListener("DOMContentLoaded", function() {

var $header = document.getElementById("header");
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
	if (delta > 0){
			miscDivPosition = 0;
	}
	else{
			miscDivPosition = -150;
	}
    misc.style.webkitTransform = 'translateY('+miscDivPosition+'%)'; 
    misc.style.mozTransform    = 'translateY('+miscDivPosition+'%)'; 
    misc.style.transform       = 'translateY('+miscDivPosition+'%)'; 
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

if (document.body.addEventListener) {
	// IE9, Chrome, Safari, Opera
	document.body.addEventListener("mousewheel", MouseWheelHandler, false);
	// Firefox
	document.body.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
}
	
});