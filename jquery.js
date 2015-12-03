$(document).ready(function(){

	var iconHeight = 98;	
	 
	$(".slider").mouseleave(closeSlider);
	
	
	$(".btnUp").click(function() {
		rotateUp( $(this) );
		var thisSlider = $(this).parent();
		hideShow(thisSlider);	
	})
	
	$(".btnDown").click(function(){
		rotateDown( $(this) );
		var thisSlider = $(this).parent();
		hideShow(thisSlider);
	})
	
	//chose of icon by click on it
	$(".icon").click(function(){
		var nbrOfIconClicked = parseInt($(this).css('top')) / iconHeight;
		if (nbrOfIconClicked == 0) {
			closeSlider; rotateDown( $(this) );
		} else if (nbrOfIconClicked == 1){
			closeSlider;
		} else {
			closeSlider; rotateUp( $(this) ); 
		}
		var thisSlider = $(this).parent();
		hideShow(thisSlider);
	})
	
	//ordering slider
	// var iconHeight = parseInt($('.icon').height());
	$(".icon").each(function(){
		$(this).css("top", iconHeight*($(this).index()))
		// console.log(iconHeight*($(this).index()));
	});
	
	//setting day of week
	var thisArrow = $(".sliderDow > .btnDown");
	console.log(thisArrow);
	var date = new Date();
	var dow = date.getDay();
	for (var i = 0; i < dow; i++) {
		rotateUp(thisArrow);
		i += 1;
		console.log(i);
	}
	
	//opening slider
	$(".slider").mouseenter(function(){
		$(this).parent().removeClass("inactive").addClass("active");
		$(this).css("top", "0px");
		hideShow($(this));
	});
	
	//hiding icons
	var sliders = $(this).find(".slider");
	sliders.each(function(){
		hideShow($(this));
	})
	
	//closing slider
	function closeSlider(thisObj){
		$(this).parent().removeClass("active").addClass("inactive");
		$(this).css("top", "-101px")
		hideShow($(this));
	}
	
	//control with arrows
	function rotateUp(thisObj){
		var parnt = thisObj.parent();
		// var iconHeight = parseInt($('.icon').height()); //not working properly
		var iconHeight = 98;
		var arrHeight = ($(parnt).find('.icon').length - 1) * iconHeight;
		$(parnt).find('.icon').each(function(){
			var top = parseInt($(this).css('top'));
			if (top < iconHeight) {
					$(this).css('top', arrHeight);
				} 
				else {
					$(this).css('top', top - iconHeight);
			}
		});
	}
	
	function rotateDown(thisObj){
		alert("im in");
		var parnt = $(thisObj).parent();
		var iconHeight = 98;
		var arrHeight = ($(parnt).find('.icon').length - 1) * iconHeight;
		$(parnt).find('.icon').each(function(){
			var top = parseInt($(this).css('top'));
			if (top >= arrHeight) {
				$(this).css('top', '0');
			} 
			else {
				$(this).css('top', top + iconHeight);
			}
		});
	}
	
	function hideShow(thisObj){
		var icons = thisObj.children('.icon');
		if (thisObj.parent().hasClass("inactive") == false){
			icons.each(function(){
				$(this).css("visibility", 'hidden');
				if (parseInt($(this).css('top')) == 0){
					$(this).css("visibility", 'visible');
				}
				else if (parseInt($(this).css('top')) == iconHeight){
					$(this).css("visibility", 'visible');
				}
				else if (parseInt($(this).css('top')) == (iconHeight * 2)){
					$(this).css("visibility", 'visible');
				} 
			});	
		}
		else {
			icons.each(function(){
				$(this).css("visibility", 'hidden');
				if (parseInt($(this).css('top')) == iconHeight){
					$(this).css("visibility", 'visible');
				}
			});	
		}
	}
})