jQuery(document).ready(function(a){function b(){if("undefined"==typeof wpbodymovin)return!1;for(var a in wpbodymovin.animations)wpbodymovin.animations[a].lazyload||"undefined"==typeof wpbodymovin.animations[a].animation_data?c(a,wpbodymovin.animations[a]):d(a,wpbodymovin.animations[a],wpbodymovin.animations[a].animation_data)}function c(a,b){var c={action:"wpbdmv_get_animation",animation_id:wpbodymovin.animations[a].id};jQuery.post(wpbodymovin.ajaxurl,c,function(c){jQuery("#"+b.container_id).removeClass("loading"),"ok"===c.result&&d(a,b,c.json_string)})}function d(b,c,d){var e={container:document.getElementById(c.container_id),renderer:"undefined"!=typeof c.renderer?c.renderer:"svg",loop:c.loop,assetsPath:"undefined"!=typeof c.assets_path?c.assets_path:null,autoplay:!c.autoplay_viewport&&c.autoplay_onload,rendererSettings:{progressiveLoad:!1},animationData:JSON.parse(d)},f=jQuery("#"+c.container_id);wpbodymovin.animations[b].instance=bodymovin.loadAnimation(e),a(window).on("wpbodymovin_anim_load resize scroll",function(){if(c.autoplay_viewport===!0&&"function"==typeof jQuery.fn.isOnScreen)if(f.isOnScreen(function(a){return a.top>=-100&&a.bottom>=-100})){if(f.hasClass("playing"))return!0;c.instance.play(),f.addClass("playing").removeClass("paused")}else if(c.autostop_viewport===!0){if(f.hasClass("paused"))return!0;c.instance.pause(),f.addClass("paused").removeClass("playing")}}),a(window).trigger("wpbodymovin_anim_load")}b()});
;!function(a){a.fn.isOnScreen=function(b){var c=this.outerHeight(),d=this.outerWidth();if(!d||!c)return!1;var e=a(window),f={top:e.scrollTop(),left:e.scrollLeft()};f.right=f.left+e.width(),f.bottom=f.top+e.height();var g=this.offset();g.right=g.left+d,g.bottom=g.top+c;var h={top:f.bottom-g.top,left:f.right-g.left,bottom:g.bottom-f.top,right:g.right-f.left};return"function"==typeof b?b.call(this,h):h.top>0&&h.left>0&&h.right>0&&h.bottom>0}}(jQuery);