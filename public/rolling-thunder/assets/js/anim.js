document.addEventListener("DOMContentLoaded", function() {

var $header = document.getElementById("header");

function fadeIn(el) {
 if (!el.style){
	 el[0].style.opacity = 1;
 }
 else{
 	 el.style.opacity = 1;
 }
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


	
	
});