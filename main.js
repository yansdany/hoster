//scroll
$(document).ready(function(){
	$("#body").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = ($(id).offset().top)-100;
		$('body,html').animate({scrollTop: top}, 800);
	});
});

//menu
