/*
	Eventually by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function() {

	"use strict";

	// Methods/polyfills.

		// canUse
			window.canUse=function(p){if(!window._canUse)window._canUse=document.createElement("div");var e=window._canUse.style,up=p.charAt(0).toUpperCase()+p.slice(1);return p in e||"Moz"+up in e||"Webkit"+up in e||"O"+up in e||"ms"+up in e};

		// window.addEventListener
			(function(){if("addEventListener"in window)return;window.addEventListener=function(type,f){window.attachEvent("on"+type,f)}})();

	// Vars.
		var	$body = document.querySelector('body');
		var	$misc = document.getElementById('misc');

	// Disable animations/transitions until everything's loaded.
		$body.classList.add('is-loading');

		window.addEventListener('load', function() {
			window.setTimeout(function() {
				$body.classList.remove('is-loading');
			}, 100);
		});

	// Slideshow Background.
		(function() {

			// Settings.
				var settings = {

					// Images (in the format of 'url': 'alignment').
						images: [
							'http://res.cloudinary.com/dmj8qtant/image/upload/v1456525031/arch/dramal_hizgkd.jpg',
							'http://res.cloudinary.com/dmj8qtant/image/upload/v1456525091/arch/30001_z3gdfm.jpg'
						],
						otherImages: [
							'http://res.cloudinary.com/dmj8qtant/image/upload/v1456525027/arch/DSCN2857b_lxaqbe.jpg',
							'http://res.cloudinary.com/dmj8qtant/image/upload/v1456954868/arch/301_wd9jlh.jpg',
							'http://res.cloudinary.com/dmj8qtant/image/upload/v1456525045/arch/101_mvmc2p.jpg',
							'http://res.cloudinary.com/dmj8qtant/image/upload/v1456525042/arch/brighterparts1_gbu73p.jpg',
						]
				};

			// Vars.
				var	pos = 0,
					$wrapper, $bg, $bg2, $next, $next2, $prev, $prev2;
				var arrows = ['prev1','next1','prev2','next2'];

			// Create BG wrapper, BGs.
				$wrapper = document.createElement('div');
					$wrapper.id = 'bg';
					$body.appendChild($wrapper);

					// Create BG.
			
						$bg = document.createElement('div');
						$bg.id = 'background';
						$bg.style.backgroundImage = 'url("' + settings.images[0] + '")';
						$bg.innerHTML = document.getElementById('header').outerHTML;
						
					//Next Arrows
						$prev = document.createElement('span');
							$prev.id = 'prev1';
							$prev.className = 'prev';
							$prev.innerHTML = '<i class="fa fa-arrow-left"></i>'
						$bg.appendChild($prev)
						
						$next = document.createElement('span');
							$next.id = 'next1';
							$next.className = 'next';
							$next.innerHTML = '<i class="fa fa-arrow-right"></i>'
						$bg.appendChild($next)
						
			
					$wrapper.appendChild($bg);
				$body.insertBefore($wrapper, $body.firstChild);
			
					// Create BG2.
					$bg2 = document.createElement('div');
					$bg2.id = 'bg2';
					$bg2.style.backgroundImage = 'url("' + settings.otherImages[0] + '")';			
			
			//Add Next Arrows too.
						$prev2 = document.createElement('span');
							$prev2.id = 'prev2';
							$prev2.className = 'prev';
							$prev2.innerHTML = '<i class="fa fa-arrow-left"></i>'
						$bg2.appendChild($prev2)
						
						$next2 = document.createElement('span');
							$next2.id = 'next2';
							$next2.className = 'next';
							$next2.innerHTML = '<i class="fa fa-arrow-right"></i>'
						$bg2.appendChild($next2)
			
				$misc.insertBefore($bg2, $misc.firstChild);
				
			
			for(var i=0;i<arrows.length;i++){
			    document.getElementById(arrows[i]).onclick = function(e){
					console.log(e.target.parentElement.parentElement.id);
					// if e.target.id = next/prev
						//nextSlide / prevSlide ->(parentElement)
					
					
					
					return false;
				}
			};

				var nextSlide = function() {
					//if parentelement.id = background / bg2, switch with images/otherimages ,respectively
					pos = pos+1==settings.images.length ? 0 : pos+1 ;
					
					console.log(pos);
					document.getElementById('background').style.backgroundImage = 'none';
					document.getElementById('background').style.backgroundImage = 'url("' + settings.images[pos] + '")';
					
				};
				var prevSlide = function() {

					pos = pos-1==-1 ? settings.images.length-1 : pos-1 ;
					
					console.log(pos);
					document.getElementById('background').style.backgroundImage = 'none';
					document.getElementById('background').style.backgroundImage = 'url("' + settings.images[pos] + '")';
					
				};

		})();
/*
	// Signup Form.
		(function() {

			// Vars.
				var $form = document.querySelectorAll('#signup-form')[0],
					$submit = document.querySelectorAll('#signup-form input[type="submit"]')[0],
					$message;

			// Bail if addEventListener isn't supported.
				if (!('addEventListener' in $form))
					return;

			// Message.
				$message = document.createElement('span');
					$message.classList.add('message');
					$form.appendChild($message);

				$message._show = function(type, text) {

					$message.innerHTML = text;
					$message.classList.add(type);
					$message.classList.add('visible');

					window.setTimeout(function() {
						$message._hide();
					}, 3000);

				};

				$message._hide = function() {
					$message.classList.remove('visible');
				};

			// Events.
			// Note: If you're *not* using AJAX, get rid of this event listener.
				$form.addEventListener('submit', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Hide message.
						$message._hide();

					// Disable submit.
						$submit.disabled = true;

					// Process form.
					// Note: Doesn't actually do anything yet (other than report back with a "thank you"),
					// but there's enough here to piece together a working AJAX submission call that does.
						window.setTimeout(function() {

							// Reset form.
								$form.reset();

							// Enable submit.
								$submit.disabled = false;

							// Show message.
								$message._show('success', 'Thank you!');
								//$message._show('failure', 'Something went wrong. Please try again.');

						}, 750);

				});

		})();
*/
})();
