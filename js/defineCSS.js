function defineCSS() {
	// $("link[rel$='stylesheet'][href*='cloudfront']").each(function() {
	// 	$(this).attr("data-turbolinks-track", "false");
	// });
	if ($('.view-school').length) {
		//remove default CSS
		$("link[rel$='stylesheet'][href*='cloudfront']").each(function() {
			$(this).attr("disabled", "disabled");
		});
	} else {
		//remove custom css
		$("#marketingCSS").attr("disabled", "disabled");
	}
	console.log('defineCSS');
}

document.addEventListener("turbolinks:load", function() {
  	defineCSS();
	console.log('hashchange');
})

$(document).on('turbolinks:load'),function() {
  	defineCSS();
	console.log('hashchange');	
}

$(document).ready(function() {
	defineCSS();
});