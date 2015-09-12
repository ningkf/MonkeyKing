
// $(document).ready(function(){
// 	$('.page3').scroll(function(){
// 		$('.gods').animate({
// 			left:500px;

// 		})

// 	})
// $('a').click(function(){
//     $('html, body').animate({
//         scrollTop: $( $(this).attr('href') ).offset().top
//     }, 1000);
//     return false;
// });

// });

//check first if the document has been loaded
$(document).ready(function(){

	function scrollToAnchor(aid){
	    var aTag = $("a[name='"+ aid +"']");
	    $('html,body').animate({scrollTop: aTag.offset().top},1500);
	}

	$("#page1nav").click(function() {
	   scrollToAnchor('page2');
	});

	$("#page2nav").click(function() {
	   scrollToAnchor('page3');
	});

	$("#page3nav").click(function() {
	   scrollToAnchor('page4');
	});

	$("#page4nav").click(function() {
		scrollToAnchor('page5');
	});

	$("#page5nav").click(function() {
		scrollToAnchor('page6');
	});

	$("#page6nav").click(function() {
		scrollToAnchor('page7');
	});

	$("#page7nav").click(function() {
		scrollToAnchor('page8');
	});

	$("#page8nav").click(function() {
		scrollToAnchor('page9');
	});

	$("#page9nav").click(function() {
		scrollToAnchor('page10');
	});

	$("#page10nav").click(function() {
		scrollToAnchor('page11');
	});

	$(".navimage1").click(function() {
	   scrollToAnchor('page1');
	});
	$(".navimage2").click(function() {
	   scrollToAnchor('page2');
	});
	$(".navimage3").click(function() {
	   scrollToAnchor('page3');
	});
	$(".navimage4").click(function() {
	   scrollToAnchor('page4');
	});
	$(".navimage5").click(function() {
	   scrollToAnchor('page5');
	});
	$(".navimage6").click(function() {
	   scrollToAnchor('page6');
	});

// var scrollorama = $.scrollorama({
// 	        blocks:'.scrollblock'
// 	    });
// 	scrollorama.animate('.gods',{
// 	    duration:400, property:'opacity'
// 	})

$(window).scroll(function() { 
		$('.navmove').html("scrollTop: "+$(window).scrollTop()); 
				var scrollPos = $(window).scrollTop();
				var navmovePos = scrollPos/160 *6;
				$('.navmove').css({
					'top': navmovePos
				}); 
			
	});

//page3
	$(window).scroll(function() { 
		$('.gods').html("scrollTop: "+$(window).scrollTop()); 
			if ($(window).scrollTop() < 1750) {
				var scrollPos = $(window).scrollTop();
				var godsPosx = (scrollPos - 1590)*2;
				$('.gods').css({
					'left': godsPosx
				}); 
			}
	});

	$(window).scroll(function() {  
		$('.monkeyrun').html("scrollTop: "+$(window).scrollTop()); 
			if ($(window).scrollTop() < 1750) {
				var scrollPos = $(window).scrollTop();
				var monkeyrunPos = (scrollPos-1530)*2;
				$('.monkeyrun').css({
					'right': monkeyrunPos
				}); 
			}
	}); 
	//`bg
	$(window).scroll(function() {  
		$('.bguper').html("scrollTop: "+$(window).scrollTop()); 
			if ($(window).scrollTop() < 1770) {
				var scrollPos = $(window).scrollTop();
				var pagePos = (scrollPos-1242)*0.5;
				$('.bguper').css({
					'left': pagePos
				}); 
			}
	}); 


//page4 起点要高就往高了调<值；-后越大，停的位置越下；乘号后面管速度
	$(window).scroll(function() {  
		$('.monkeyfly').html("scrollTop: "+$(window).scrollTop()); 
				if($(window).scrollTop()<3355 && $(window).scrollTop()>2617) {
					var scrollPos = $(window).scrollTop();
					var monkeyflyPos = (scrollPos -2323)*0.8;
					$('.monkeyfly').css({
						'top':monkeyflyPos
					});
				}
	});

//rotate cloud
	// $(window).scroll(function() { 
	// 	$('.cloud').html("scrollTop: "+$(window).scrollTop()); 
	// 			if ($(window).scrollTop() > 2600) {
	// 				var $elie = $('.cloud'), degree = 0, timer;
 //    				rotate();
 //    				function rotate() {
 //        			$elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
 //        			$elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
 //        			timer = setTimeout(function() {
 //            				++degree; rotate();
 //        					},5);	
	// 				}
	// 			});
	// });
							 	
//page5
	$(window).scroll(function() {  
			$('.godking').html("scrollTop: "+$(window).scrollTop()); 
				if ($(window).scrollTop() < 3465) {
					var scrollPos = $(window).scrollTop();
					var kingPos = (scrollPos-3300)*2;
					$('.godking').css({
						'top': kingPos
					}); 

				}
		}); 
				
//page6 moving peaches
$('#little').click(function(){


	})


//page8
$(window).scroll(function() {  
			$('.anger').html("scrollTop: "+$(window).scrollTop()); 
				if ($(window).scrollTop() < 5152) {
					var scrollPos = $(window).scrollTop();
					var angerSize = (scrollPos-4900)*2;
					$('.anger').css({
						'width': angerSize
					}); 
				}
		}); 










});
















