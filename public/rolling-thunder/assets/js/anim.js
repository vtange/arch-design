document.addEventListener("DOMContentLoaded", function() {

function fadeIn(el) {
  el.style.opacity = 1;
}

window.setTimeout(function(){fadeIn(document.getElementById("background"))},500);


});