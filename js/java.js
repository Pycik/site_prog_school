$(".nav_menu span").click(function(){
	$(".menu_center_click").slideDown(1000)
	$(".menu_open_click").click(function(){
	$(".menu_center_click").slideUp(300)
	});
});