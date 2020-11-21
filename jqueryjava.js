$(document).ready(function(){
	$(".button1").click(function(){
		$(".td1").fadeIn();
		$(".td2").fadeIn();
		$(".td3").fadeIn();
	});
	$(".button2").click(function(){
		$(".td1").fadeIn();
		$(".td2").fadeOut();
		$(".td3").fadeOut();
		$(".td2").css({display:"none"});
		$(".td3").css({display:"none"});
	});
	$(".button3").click(function(){
		$(".td2").fadeIn();
		$(".td1").fadeOut();
		$(".td3").fadeOut();
		$(".td1").css({display:"none"});
		$(".td3").css({display:"none"});
	});
	$(".button4").click(function(){
		$(".td3").fadeIn();
		$(".td1").fadeOut();
		$(".td2").fadeOut();
		$(".td1").css({display:"none"});
		$(".td2").css({display:"none"});
	});
	$('.carousel').carousel({
           interval: 2000
    });

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    });
	
	
	
	
	
	
	
	$(window).on('scroll',function(){
		$("#anim").css({display:""});
		
		var q=$(this).scrollTop();
		
		if(q>115){
			$("#div4").addClass("animated fadeInUp");
		}
		if(q>475){
			$("#div5-1").addClass("animated fadeInUp");
			$("#div5-2").addClass("animated bounceInRight");
		}
		if(q>660){
			$("#div6-1").addClass("animated fadeInUp");
			$("#div6-tr-1").addClass("animated fadeInRight");
		}
		if(q>760){
			$("#div6-tr-2").addClass("animated fadeInRight");
		}
		if(q>830){
			$("#div6-tr-3").addClass("animated fadeInRight");
		}
		if(q>1170){
			$("#div7").addClass("animated fadeInDown");
		}
		if(q>1680){
			$("#div9").addClass("animated fadeInDown");
		}
		if(q>1790){
			$("#div10").addClass("animated bounceInUp");
		}
		if(q>2960){
			$("#div12").addClass("animated bounceInRight");
		}
		if(q>3050){
			$("#div13").addClass("animated bounceInUp");
		}
		if(q>3793){
			$("#div14").addClass("animated fadeInRight");
		}
	
	});
	
	
	
	
});