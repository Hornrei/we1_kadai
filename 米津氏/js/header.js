
'use strict'; 
 
jQuery(window).on('scroll', function () {
 
 if (jQuery('.header').height() < jQuery(this).scrollTop()) { 
jQuery('.header').addClass('change-color'); }
 else {
 jQuery('.header').removeClass('change-color'); } });