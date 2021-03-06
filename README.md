# arch-design
showcase for architecture projects

## Tech
Jquery, PlainJS

## Niceties
Parallax, Jquery Promise Animations, PlainJS Jquery elements / events / methods organization, PlainJS Mousewheel, Slideshows, <img> to div background

### Details
#### CSS
 - using CSS transitions to animate:
 
 ```
 	el.style.opacity = 0; //no need for timer, use:
 	
 		-moz-transition: all 0.25s ease-in-out;
		-webkit-transition: all 0.25s ease-in-out;
		-ms-transition: all 0.25s ease-in-out;
		transition: all 0.25s ease-in-out;
 ```

#### JS
###### [roll-thunder]
 - Vanilla JS loading screen
 ```
 	// Disable animations/transitions and keep a is-loading circle until everything's loaded.
		$body.classList.add('is-loading');

		window.addEventListener('load', function() {
			window.setTimeout(function() {
				$body.classList.remove('is-loading');
			}, 100);
		});

 ```
 - Vanilla JS 'prependChild'
 
 ```
 				  $wrapper.appendChild($bg);
				  $body.insertBefore($wrapper, $body.firstChild);  //works like prepend
 ```
 - Vanilla JS Mousewheel events and CSS Transforms
 ```
 if (document.body.addEventListener) {
	// IE9, Chrome, Safari, Opera
	document.body.addEventListener("mousewheel", MouseWheelHandler, false);
	// Firefox
	document.body.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
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
	```

###### [sf-village]
 - Chaining animations via JQuery (Logo, logo scale, and show bg)

 ```
 		$("#logo").animate({opacity: 1}).delay(2000).promise().always(function(){
			$("#logo").animate({top: 0, width: '200px', height: '100px'}).delay(200).promise().always(function(){
				$("#white-cover").animate({opacity: 0})
			})
		})
 ```
 
###### [sf-res]
 
- A "Close everything else" Animation
  
 ```
  	$menu_condense: function(menu_item){
			//slide non-selected
			_.menuThumbs.filter(function(item){
				return item !== _.menuThumbs[_.menuOptions.indexOf(menu_item)];
			}).forEach(function(element){
				$(element).animate({ opacity: 0 }).promise().always(function(){
					//after fade thumbnails out, slide parent up
					$(element).parent().slideUp('fast');
				});;
			})
	}
	```
