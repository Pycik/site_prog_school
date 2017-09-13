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



$(document).ready(function() {
	var border_color = $(".border_content");
	var btn_color = $(".pay_online");
	var btn_text_color = $(".pay_online a");

	$(border_color).hover(function(){
		$(this).css({"border-color" : get_random_color()})
	});
	
	$(btn_color).hover(function(){
		$(this).css({"border-color" : get_random_color(),
					 "background-color" : get_random_color()					 
					})
	});

	$(btn_text_color).hover(function(){
		$(this).css({"color" : get_random_color()})
	});

});

$(document).ready(function(){
	var border_color = $(".pay_3_courses .main_content");
	var price_color = $(".pay_3_courses .main_content .bottom_text")

	$(border_color).hover(function(){
		$(this).css({"border-color" : get_random_color()})
	});

	$(border_color).hover(function(){
		$(price_color).css({"color" : get_random_color()})
	});
});


$(document).ready(function(){	
	var block = $(".open_course");	
	var border_color = $(".open_course .text_border_block");

	$(block).hover(function(){
		$(border_color).css({"border-color" : get_random_color()})
	});

	$(border_color).hover(function(){
		$(this).css({"border-color" : get_random_color()})
	});
	
});


$(document).ready(function(){	
	var first_text = $(".speak_about_us .first_text");	
	var image_first = $(".speak_about_us .image_first");
	var second_text = $(".speak_about_us .second_text");	
	var image_second = $(".speak_about_us .image_second");
	var third_text = $(".speak_about_us .third_text");	
	var image_third = $(".speak_about_us .image_third");
	var fourth_text = $(".speak_about_us .fourth_text");	
	var image_fourth = $(".speak_about_us .image_fourth");

	var next_btn = $(".speak_about_us .next_btn");


	// $(second_text).hide();
	// $(image_second).hide();


	$(next_btn).click(function(){
		$(image_first).toggle();
		$(first_text).toggle();
		$(image_second).toggle();	
		$(second_text).toggle();

		$(next_btn).click(function(){				
			$(image_third).toggle();	
			$(third_text).toggle();	
			$(image_first).toggle();
			$(first_text).toggle();

		});	

		
	});



		



	// $(next_btn).click(function(){
	// 	$(first_text).hide();
	// 	$(image_first).hide();
	// 	$(second_text).show();
	// 	$(image_second).show();
	// });

	
});


