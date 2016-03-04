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
							'http://res.cloudinary.com/dmj8qtant/image/upload/v1456525091/arch/30001_z3gdfm.jpg',
							'http://res.cloudinary.com/dmj8qtant/image/upload/v1456525031/arch/dramal_hizgkd.jpg'
						],
						otherImages: [
							'http://res.cloudinary.com/dmj8qtant/image/upload/v1456525027/arch/DSCN2857b_lxaqbe.jpg',
							'http://res.cloudinary.com/dmj8qtant/image/upload/v1456954868/arch/301_wd9jlh.jpg',
							'http://res.cloudinary.com/dmj8qtant/image/upload/v1456525045/arch/101_mvmc2p.jpg',
							'http://res.cloudinary.com/dmj8qtant/image/upload/v1456525042/arch/brighterparts1_gbu73p.jpg',
						],
						text1 : [
							'Martial Arts Studio by day...',
							"Nightclub by night."
						],
						text2 : [
							"Lorem ipsum vallum",
							"",
							"",
							""
						]
				};

			// Vars.
				var	pos = 0, pos2 = 0,
					$wrapper, $bg, $bg2, $next, $next2, $prev, $prev2, $blk, $blk2;
				var arrows = ['prev1','next1','prev2','next2'];

			// Create BG wrapper, BGs.
				$wrapper = document.createElement('div');
					$wrapper.id = 'bg';
					$body.appendChild($wrapper);
			//////////
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
						$bg.appendChild($prev);
						
						$next = document.createElement('span');
							$next.id = 'next1';
							$next.className = 'next';
							$next.innerHTML = '<i class="fa fa-arrow-right"></i>'
						$bg.appendChild($next);
						
					//Black cycler
						$blk = document.createElement('span');
							$blk.id = 'blk1';
							$blk.className = 'black';
						$bg.insertBefore($blk, $bg.firstChild);
						
			
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
						$bg2.appendChild($prev2);
						
						$next2 = document.createElement('span');
							$next2.id = 'next2';
							$next2.className = 'next';
							$next2.innerHTML = '<i class="fa fa-arrow-right"></i>'
						$bg2.appendChild($next2);
						
					//Black cycler
						$blk2 = document.createElement('span');
							$blk2.id = 'blk2';
							$blk2.className = 'black';
						$bg2.insertBefore($blk2, $bg2.firstChild);
			
				$misc.insertBefore($bg2, $misc.firstChild);
				
			
			for(var i=0;i<arrows.length;i++){
			    document.getElementById(arrows[i]).onclick = function(e){
					
					//check, NextSlide or PrevSlide?
					if (e.target.parentElement.id.search('next')!==-1){
						nextSlide(e.target.parentElement.parentElement);
					}
					if (e.target.parentElement.id.search('prev')!==-1){
						prevSlide(e.target.parentElement.parentElement);
					}					
					
					return false;
				}
			};

				function nextSlide(element) {

					var arr, text_arr, temp_pos;
					
					//check, Background or BG2?
					if (element.id === 'background'){
						arr = settings.images;
						text_arr = settings.text1;
						pos = pos+1==arr.length ? 0 : pos+1 ;
						temp_pos = pos;
						document.getElementById('day-night').innerHTML = text_arr[temp_pos];
					}
					else if (element.id === 'bg2'){
						arr = settings.otherImages;
						text_arr = settings.text2;
						pos2 = pos2+1==arr.length ? 0 : pos2+1 ;
						temp_pos = pos2;
						document.getElementById('description').innerHTML = text_arr[temp_pos];
					}
					else{
						return;
					}

					element.style.backgroundImage = 'none';
					element.style.backgroundImage = 'url("' + arr[temp_pos] + '")';
					
				};
				function prevSlide(element) {

					var arr, text_arr, temp_pos;
					
					//check, Background or BG2?
					if (element.id === 'background'){
						arr = settings.images;
						text_arr = settings.text1;
						pos = pos-1==-1 ? arr.length-1 : pos-1 ;
						temp_pos = pos;
						document.getElementById('day-night').innerHTML = text_arr[temp_pos];
					}
					else if (element.id === 'bg2'){
						arr = settings.otherImages;
						text_arr = settings.text2;
						pos2 = pos2-1==-1 ? arr.length-1 : pos2-1 ;
						temp_pos = pos2;
						document.getElementById('description').innerHTML = text_arr[temp_pos];
					}
					else{
						return;
					}
					fadeOut(element);
					element.style.backgroundImage = 'none';
					element.style.backgroundImage = 'url("' + arr[temp_pos] + '")';
					fadeIn(element);
				};
			
				function fadeIn(el) {
				  el.style.opacity = 1;

				}
				function fadeOut(el) {
				  el.style.opacity = 0;
				}
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
