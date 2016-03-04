/*
	Eventually by HTML5 UP
	html5up.net | @n33co
	Modified by vtange
	vtange.net  | @_vtange
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
		var	$well = document.getElementById('well');

	// Disable animations/transitions and keep a is-loading circle until everything's loaded.
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
					$wrapper, $bg, $bg2, $next, $next2, $prev, $prev2;
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

				$well.insertBefore($bg2, $well.firstChild);
				
			
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

					var arr, text_el, text_arr, temp_pos;
					
					//check, Background or BG2?
					if (element.id === 'background'){
						arr = settings.images;
						text_el = document.getElementById('day-night');
						text_arr = settings.text1;
						pos = pos+1==arr.length ? 0 : pos+1 ;
						temp_pos = pos;
					}
					else if (element.id === 'bg2'){
						arr = settings.otherImages;
						text_el = document.getElementById('description');
						text_arr = settings.text2;
						pos2 = pos2+1==arr.length ? 0 : pos2+1 ;
						temp_pos = pos2;
					}
					else{
						return;
					}
					switchOff(element,arr,text_el,text_arr,temp_pos);		
				};
				function prevSlide(element) {

					var arr, text_el, text_arr, temp_pos;
					
					//check, Background or BG2?
					if (element.id === 'background'){
						arr = settings.images;
						text_el = document.getElementById('day-night');
						text_arr = settings.text1;
						pos = pos-1==-1 ? arr.length-1 : pos-1 ;
						temp_pos = pos;
						
					}
					else if (element.id === 'bg2'){
						arr = settings.otherImages;
						text_el = document.getElementById('description');
						text_arr = settings.text2;
						pos2 = pos2-1==-1 ? arr.length-1 : pos2-1 ;
						temp_pos = pos2;
					}
					else{
						return;
					}
					switchOff(element,arr,text_el,text_arr,temp_pos);
				};
			
				function switchOff(el,arr,text_el,text_arr,pos) {
					el.style.opacity = 0;
					
					var img = new Image();
							img.src = arr[pos];
							img.onload = function(){
								window.setTimeout(function(){
									 el.style.backgroundImage = 'none';
									 el.style.backgroundImage = 'url("' + arr[pos] + '")';
									 text_el.innerHTML = text_arr[pos];
									 el.style.opacity = 1;
								},300);
							};
				}
		})();
})();
