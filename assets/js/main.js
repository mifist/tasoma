

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
/*jshint browser: true, strict: true, undef: true */
/*global define: false */
( function( window ) {
	
	'use strict';
// class helper functions from bonzo https://github.com/ded/bonzo
	
	function classReg( className ) {
		return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
	}
// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
	var hasClass, addClass, removeClass;
	
	if ( 'classList' in document.documentElement ) {
		hasClass = function( elem, c ) {
			return elem.classList.contains( c );
		};
		addClass = function( elem, c ) {
			elem.classList.add( c );
		};
		removeClass = function( elem, c ) {
			elem.classList.remove( c );
		};
	}
	else {
		hasClass = function( elem, c ) {
			return classReg( c ).test( elem.className );
		};
		addClass = function( elem, c ) {
			if ( !hasClass( elem, c ) ) {
				elem.className = elem.className + ' ' + c;
			}
		};
		removeClass = function( elem, c ) {
			elem.className = elem.className.replace( classReg( c ), ' ' );
		};
	}
	
	function toggleClass( elem, c ) {
		var fn = hasClass( elem, c ) ? removeClass : addClass;
		fn( elem, c );
	}
	
	var classie = {
		// full names
		hasClass: hasClass,
		addClass: addClass,
		removeClass: removeClass,
		toggleClass: toggleClass,
		// short names
		has: hasClass,
		add: addClass,
		remove: removeClass,
		toggle: toggleClass
	};
// transport
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( classie );
	} else {
		// browser global
		window.classie = classie;
	}
	
})( window );
// функция отвечает за проверку введенные ли данные в поле формы - > добавление класса input--filled
(function() {
	// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
	if (!String.prototype.trim) {
		(function() {
			// Make sure we trim BOM and NBSP
			var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			String.prototype.trim = function() {
				return this.replace(rtrim, '');
			};
		})();
	}
	
	[].slice.call( document.querySelectorAll( '.input__field--hoshi' ) ).forEach( function( inputEl ) {
		// in case the input is already filled..
		if( inputEl.value.trim() !== '' ) {
			classie.add( inputEl.parentNode, 'input--filled' );
		}
		
		// events:
		inputEl.addEventListener( 'focus', onInputFocus );
		inputEl.addEventListener( 'blur', onInputBlur );
	} );
	
	function onInputFocus( ev ) {
		classie.add( ev.target.parentNode, 'input--filled' );
	}
	
	function onInputBlur( ev ) {
		if( ev.target.value.trim() === '' ) {
			classie.remove( ev.target.parentNode, 'input--filled' );
		}
	}
})();
function initMap() {
	var uluru = {lat: 55.756873, lng: 37.629216};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: uluru,
		styles: [
			{
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f5f5f5"
					}
				]
			},
			{
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#616161"
					}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#f5f5f5"
					}
				]
			},
			{
				"featureType": "administrative.land_parcel",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#d2d2d2"
					}
				]
			},
			{
				"featureType": "administrative.land_parcel",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#bdbdbd"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e0e0e0"
					},
					{
						"visibility": "on"
					},
					{
						"weight": 1
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#eeeeee"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#757575"
					}
				]
			},
			{
				"featureType": "poi.business",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e5e5e5"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#9e9e9e"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#757575"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#616161"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#9e9e9e"
					}
				]
			},
			{
				"featureType": "transit",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "transit.line",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e5e5e5"
					}
				]
			},
			{
				"featureType": "transit.station",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#eeeeee"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#d8d8d8"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#9e9e9e"
					}
				]
			}
		]
	});
	var goldStar = 'assets/images/marker.png';
	var marker = new google.maps.Marker({
		position: map.getCenter(),
		icon: goldStar,
		map: map
	});
}
( function($) {
	'use strict';
	//scroll to top and bottom
   $('a[href="#moveToTop"]').click(function() {
		 $("html, body").animate({ scrollTop: 0 }, 800 );
		 return false;
	 });
	
	//$('#contact-form').validator();
	
	$('#last-works-slider').slick({
		cssEase: 'ease',
		fade: false,
		arrows: true,
		dots: false,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1170,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 575,
				arrows: false,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	$('#gallery').slick({
		cssEase: 'ease',
		fade: false,
		arrows: true,
		dots: false,
		infinite: true,
		speed: 500,
		autoplay: false,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 575,
				arrows: false
			}
		]
	});
	
})( jQuery );
