!function(i,e){var o={stuckClass:"isStuck"},s=i(document),t=!1;i.fn.TMStickUp=function(e){e=i.extend(!0,{},o,e),i(this).each(function(){var o,n,a,c,r=i(this),l=!1,u=r.clone().appendTo(r.parent()).addClass(e.stuckClass),p=u.outerHeight();i(window).resize(function(){clearTimeout(c),u.css({top:l?0:-p,visibility:l?"visible":"hidden"}),c=setTimeout(function(){o=r.offset().top,n=r.outerHeight(),p=u.outerHeight(),a=i.cookie&&"opened"===i.cookie("panel1"),u.css({top:l?0:-p})},40)}).resize(),u.css({position:"fixed",width:"100%"}),r.on("rePosition",function(i,e){l&&u.animate({marginTop:e},{easing:"linear"}),a=0!==e}),s.on("scroll",function(){var e=s.scrollTop();if(e>=o&&!l&&(u.stop().css({visibility:"visible"}).animate({top:0,marginTop:a?50:0},{}),l=!0,i(".active-menu").removeClass("active-menu"),i(".trig").removeClass("trig-active")),o+n>e&&l){if(i(".search-form_toggle").length>0&&i(window).width()>767){var c=i(".search-form_toggle"),r=i(".search-form");!t&&c.hasClass("active")&&(t=!0,c.removeClass("active"),r.removeClass("on").slideUp(),t=!1)}i(".sf-menu ul").css("display","none"),u.stop().animate({top:-p,marginTop:0},{duration:200,complete:function(){u.css({visibility:"hidden"})}}),l=!1}}).trigger("scroll")})}}(jQuery);