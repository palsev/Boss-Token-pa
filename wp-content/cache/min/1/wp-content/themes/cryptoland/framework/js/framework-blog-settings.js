(function($){"use strict";jQuery(window).load(function(){jQuery('.preloader').fadeOut('slow',function(){})});jQuery(document).ready(function($){var sidebar_s=$(".c-sidebar-1.sidebar-sticky");var stckyoffset=$(".c-sidebar-1.sidebar-sticky").attr('data-stcky-offset');var stckyanimate=$(".c-sidebar-1.sidebar-sticky").attr('data-stcky-animate');var stckyanimate=(stckyanimate=='false')?!1:!0;var stckyanimatetime=$(".c-sidebar-1.sidebar-sticky").attr('data-stcky-animate-time');if(sidebar_s.size()>0){sidebar_s.sticky('#widget-area',{useTransition:!1,animate:stckyanimate,animTime:parseInt(stckyanimatetime),offset:parseInt(stckyoffset),})}
jQuery('.flexslider').flexslider({controlNav:!0});jQuery(".video-responsive").fitVids();jQuery(".single-inner-content table, .cryptoland-post-class table, .widget_calendar table").addClass("table table-striped")})})(jQuery)