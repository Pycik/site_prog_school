$(".nav_menu span").click(function(){
	$(".menu_open").addClass("menu_open_active")
	$(".menu_center_click").slideDown(1000)
	$(".menu_open_active").click(function(){
		$(".menu_open_active").removeClass("menu_open_active")
		$(".menu_center_click").slideUp(500)
	});
	
});



function get_random_color() {
   var letters = '0123456789ABCDEF'.split('');
   var color = '#';
    for (var i = 0; i < 3; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}


$(document).ready(function() {
	var block = ".main_center_block_info";
	var border_content = ".main_center_block_info .header_block";

	$(block).hover(function(){
		$(border_content).css({"border-color" : get_random_color()})
			$(border_content).hover(function() {
				$(border_content).css({"border-color" : get_random_color()})
			});
	});
});

$(document).ready(function () {
	 $('input,textarea').focus(function(){
	   $(this).data('placeholder',$(this).attr('placeholder'))
	   $(this).attr('placeholder','');
	 });
	 $('input,textarea').blur(function(){
	   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });

$(document).ready(function() {
	var block = ".blue_block #border_color";
	var border_content = ".text_border_block";	
	var text = ".text_border_block span";

	$(block).hover(function(){
		$(border_content).css({"border-color" : get_random_color()})
		$(text).css({"color" : get_random_color()})
			$(border_content).hover(function() {
				$(border_content).css({"border-color" : get_random_color()})
			});
	});
});

$(document).ready(function() {
	var block = ".how_learning .border_block";	
	var number_color = ".how_learning .number";
	var text = ".how_learning .text";

	$(block).hover(function(){
		$(block).css({"border-color" : get_random_color()})
		$(number_color).css({"color" : get_random_color()})
		$(text).css({"color" : get_random_color()})
			$(number_color).hover(function() {
				$(number_color).css({"color" : get_random_color()})
			});
	});
});



