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
							'http://res.cloudinary.com/dmj8qtant/image/upload/v1456525027/arch/DSCN2857b_lxaqbe.jpg',
							'http://res.cloudinary.com/dmj8qtant/image/upload/v1456525089/arch/301_rkpnol.jpg',
							'http://res.cloudinary.com/dmj8qtant/image/upload/v1456525045/arch/101_mvmc2p.jpg',
							'http://res.cloudinary.com/dmj8qtant/image/upload/v1456525042/arch/brighterparts1_gbu73p.jpg',
							'http://res.cloudinary.com/dmj8qtant/image/upload/v1456525091/arch/30001_z3gdfm.jpg'
						],

					// Delay.
						delay: 6000

				};

			// Vars.
				var	pos = 0, lastPos = 0,
					$wrapper, $bg,
					k, v;

			// Create BG wrapper, BGs.
				$wrapper = document.createElement('div');
					$wrapper.id = 'bg';
					$body.appendChild($wrapper);

					// Create BG.
			
						$bg = document.createElement('div');
						$bg.style.backgroundImage = 'url("' + settings.images[0] + '")';
			
					$wrapper.appendChild($bg);
				$body.appendChild($wrapper);
				
			// Bail if we only have a single BG or the client doesn't support transitions.
					if (settings.images.length < 2
					||	!canUse('transition'))
						return;

				window.setInterval(function() {

					lastPos = pos;
					pos = pos+1==settings.images.length ? 0 : pos+1 ;
					
				}, settings.delay);

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
