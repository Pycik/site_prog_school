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


// ************* Говнокод без цыкла по кругу ************** ( сюда еще вернемся )

// $(document).ready(function(){	
// 	var first_text = $(".speak_about_us .first_text");	
// 	var image_first = $(".speak_about_us .image_first");
// 	var second_text = $(".speak_about_us .second_text");	
// 	var image_second = $(".speak_about_us .image_second");
// 	var third_text = $(".speak_about_us .third_text");	
// 	var image_third = $(".speak_about_us .image_third");
// 	var fourth_text = $(".speak_about_us .fourth_text");	
// 	var image_fourth = $(".speak_about_us .image_fourth");
// 	var fiveth_text = $(".speak_about_us .fiveth_text");	
// 	var image_fiveth = $(".speak_about_us .image_fiveth");

// 	var next_btn = $(".speak_about_us .next_btn");
// 	var prev_btn = $(".speak_about_us .prev_btn");



// 	$(next_btn).click(function(){
// 		$(first_text).hide().next().show();
// 		$(image_first).hide().next().show();

// 		$(".not_work").hide();

// 		$(next_btn).click(function(){
// 			$(second_text).hide().next().show();
// 			$(image_second).hide().next().show();

// 			$(next_btn).click(function(){
// 				$(third_text).hide().next().show();
// 				$(image_third).hide().next().show();

// 				$(next_btn).click(function(){
// 					$(fourth_text).hide().next().show();
// 					$(image_fourth).hide().next().show();
					
// 					$(next_btn).click(function(){
// 						$(fiveth_text).hide().next().show();
// 						$(image_fiveth).hide().next().show();
				
// 					});
// 				});
// 			});
// 		});
	
// 	});


// 	$(prev_btn).click(function(){
// 		$(this).hide();
// 		$(".not_work").show();
// 	});
// });

// **********  Конец Говнокода  ******************

$(document).ready(function(){


  $(".slide").bxSlider({
  	nextSelector: '.next_btn',
  	prevSelector: '.prev_btn',
  	nextText: '',
  	prevText: '',
  	mode: 'fade',
  	captions: true, 
  });  


 $(".bx-wrapper").css({"webkitboxshadow" : "none",
 						"box-shadow" : "none",
 						"border:" : "none",
 						 });
  $(".bx-controls.bx-has-pager").remove();
});
   
    

$(document).ready(function(){
	

	$(".answers_text").on("click",".qw",function(){
		$(this).closest(".wrapp").removeClass("hiddens");
		$(".answer").on("click",function(){
			$(".wrapp").addClass("hiddens");
		});		
}); 

});


   //  ************ start google maps *************
function initialize() {
 var latlng = new google.maps.LatLng(50.438913, 30.512551);
 var settings = {
 zoom: 15,
 center: latlng,
 mapTypeControl: true,
 mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
 navigationControl: true,
 navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
 mapTypeId: google.maps.MapTypeId.ROADMAP
 };

 var map = new google.maps.Map(document.getElementById("map_canvas"), 
settings);



// создаем маркер на карте

var companyLogo = new google.maps.MarkerImage('img/logo1.png',
new google.maps.Size(150,50),
new google.maps.Point(0,0),
new google.maps.Point(50,50)
);


var companyPos = new google.maps.LatLng(50.438913, 30.512551);
var companyMarker = new google.maps.Marker({
position: companyPos,
map: map,
icon: companyLogo,
title:"Prog Kiev",
});


var companyLogo = new google.maps.MarkerImage('img/logo1.png',
new google.maps.Size(150,50),
new google.maps.Point(0,0),
new google.maps.Point(50,50)
);


var companyPos = new google.maps.LatLng(50.452884, 30.446052);
var companyMarker = new google.maps.Marker({
position: companyPos,
map: map,
icon: companyLogo,
title:"Prog Kiev",
});


var companyLogo = new google.maps.MarkerImage('img/logo1.png',
new google.maps.Size(150,50),
new google.maps.Point(0,0),
new google.maps.Point(50,50)
);


var companyPos = new google.maps.LatLng(50.435685, 30.513943);
var companyMarker = new google.maps.Marker({
position: companyPos,
map: map,
icon: companyLogo,
title:"Prog Kiev",
});

var companyLogo = new google.maps.MarkerImage('img/logo1.png',
new google.maps.Size(150,50),
new google.maps.Point(0,0),
new google.maps.Point(50,50)
);


var companyPos = new google.maps.LatLng(50.436463, 30.518036);
var companyMarker = new google.maps.Marker({
position: companyPos,
map: map,
icon: companyLogo,
title:"Prog Kiev",
});

var companyLogo = new google.maps.MarkerImage('img/logo1.png',
new google.maps.Size(150,50),
new google.maps.Point(0,0),
new google.maps.Point(50,50)
);


var companyPos = new google.maps.LatLng(50.458462, 30.429749);
var companyMarker = new google.maps.Marker({
position: companyPos,
map: map,
icon: companyLogo,
title:"Prog Kiev",
});

 }

 //  ************ end google maps *************


$(document).ready(function(){
	
	$(".map").onload(initialize());

});

$(document).ready(function(){

	$(".link1").click(function(){		
		$("html,body").animate({
			scrollTop:$(".main_center_block_info").offset().top 
		},1000);
	});

	$(".learn").click(function(){		
		$("html,body").animate({
			scrollTop:$(".blue_block").offset().top 
		},1500);
	});

	$(".price").click(function(){		
		$("html,body").animate({
			scrollTop:$(".price_course").offset().top 
		},1500);
	});

	$(".start").click(function(){		
		$("html,body").animate({
			scrollTop:$(".open_course").offset().top 
		},1500);
	});

	$(".contacts").click(function(){		
		$("html,body").animate({
			scrollTop:$(".search_us").offset().top 
		},1500);
	});

	$(".btn.up").click(function(){		
		$("html,body").animate({
			scrollTop:$(".header_box").offset().top 
		},1500);
	});






});

