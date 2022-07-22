(function ($) {

	"use strict";

	// Sticky sidebar
	$('#sidebar_fixed').theiaStickySidebar({
	    minWidth: 991,
	    updateSidebarHeight: false,
	    containerSelector: '',
	    additionalMarginTop: 90
	});

	// Time and people select
	$('.radio_select input[type="radio"]').on("click", function () {
	    var value = $("input[name='time']:checked").val();
	    $('#selected_time').text(value);
	});

	$('.radio_select input[type="radio"]').on("click", function (){
	    var value = $("input[name='day']:checked").val();
	    $('#selected_day').text(value);
	});

	// Drodown options prevent close
	$('.dropdown-options .dropdown-menu').on("click", function(e) { e.stopPropagation(); });

	// Remove items order sum
	$('.main ul li a').on('click', function(c) {
	    $(this).parent().fadeOut('slow', function(c) {});
	});

	// Close Dropdown options on add cart button click + add to cart message
	$(".dropdown-menu a.btn_1").on('click', function() {
	    $(this).closest(".dropdown-menu").prev().dropdown("toggle");
	    $('#message').fadeIn('slow', function() {
	        $('#message').delay(1000).fadeOut();
	    });
	});
	$(".options > a").on('click', function() {
	    $('#message').fadeIn('slow', function() {
	        $('#message').delay(1000).fadeOut();
	    });
	});

	// Image popups menu
	$('.menu-gallery').each(function() {
	    $(this).magnificPopup({
	        delegate: 'figure a',
	        type: 'image',
	        preloader: true,
	        gallery: {
	            enabled: true
	        },
	        removalDelay: 500, //delay removal by X to allow out-animation
	        callbacks: {
	            beforeOpen: function() {
	                // just a hack that adds mfp-anim class to markup 
	                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
	                this.st.mainClass = this.st.el.attr('data-effect');
	            }
	        },
	        closeOnContentClick: true,
	        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	    });
	});

	// Reserve Fixed on mobile
	$('.btn_reserve_fixed a').on('click', function() {
	     $(".box_order").show();
	});
	$(".close_panel_mobile").on('click', function (event){
	    event.stopPropagation();
	    $(".box_order").hide();
	  });

	// Secondary fixed
	$('.sticky_horizontal').stick_in_parent({
	    offset_top: 0
	});

	// Secondary scroll
	var $sticky_nav = $('.secondary_nav');
	$sticky_nav.find('a').on('click', function(e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').animate({
	        'scrollTop': $target.offset().top - 60
	    }, 100, 'linear');
	});

  // Input incrementer
  $(".numbers-row").append('<div class="inc button_inc">+</div><div class="dec button_inc">-</div>');
  $(".button_inc").on('click', function () {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    $button.parent().find("input").val(newVal);
  });

})(window.jQuery); 
