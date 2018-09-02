function defineCSS() {
	if ($('.view-school').length) {
		//remove default CSS
		$("link[rel$='stylesheet'][href*='cloudfront']").each(function() {
			$(this).attr("disabled", "disabled");
		});
	} else {
		//remove custom css
		$("#marketingCSS").attr("disabled", "disabled");
	}
}

$(window).bind('hashchange', function() {
	defineCSS();
});
	
$(document).ready(function() {
	defineCSS();
});