document.addEventListener("DOMContentLoaded", function() {

var $header = document.getElementById("header");
var	$bg = document.getElementById('bg');
	
function fadeIn(el) {
 if (!el.style){
	 el[0].style.opacity = 1;
 }
 else{
 	 el.style.opacity = 1;
 }
}
function MouseWheelHandler(e) {

	// cross-browser wheel delta
	var e = window.event || e; // old IE support
	console.log(e);
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