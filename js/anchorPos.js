$.fn.anchorPos = function(options){
	var obj = $(this);
	var defaults = {target:1, timer:500};
	var o = $.extend(defaults,options);
	/*
	var scrollPos;
	if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') { 
		scrollPos = document.documentElement; 
	}else if (typeof document.body != 'undefined') { 
		scrollPos = document.body; 
	}*/

	obj.each(function(i){
		$(obj[i]).click(function(){
			var _rel = $(this).attr("href").substr(1);
			switch(o.target){
				case 1: 
					var targetTop = $("#"+_rel).offset().top;
					$("html,body").animate({scrollTop:targetTop}, o.timer);
					break;
				case 2:
					var targetLeft = $("#"+_rel).offset().left;
					$("html,body").animate({scrollLeft:targetLeft}, o.timer);
					break;
			}
			return false;
		});
	});
};