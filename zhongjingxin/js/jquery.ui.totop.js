!function(o){o.fn.UItoTop=function(n){var e={text:"",min:500,scrollSpeed:800,containerID:"toTop",containerClass:"toTop fa fa-chevron-up",easingType:"linear"},t=o.extend(e,n),i="#"+t.containerID;"#"+t.containerHoverID;o("body").append('<a href="#" id="'+t.containerID+'" class="'+t.containerClass+'" >'+t.text+"</a>"),o(i).hide().click(function(){return o("html, body").stop().animate({scrollTop:0},t.scrollSpeed,t.easingType),o("#"+t.containerHoverID,this).stop().animate({opacity:0},t.inDelay,t.easingType),!1}),o(window).scroll(function(){var n=o(window).scrollTop();"undefined"==typeof document.body.style.maxHeight&&o(i).css({position:"absolute",top:o(window).scrollTop()+o(window).height()-50}),n>t.min?o(i).stop(!0,!0).fadeIn(600):o(i).fadeOut(800)})}}(jQuery);