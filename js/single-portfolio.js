$(document).ready(function(){ // 是DOM结构绘制完毕后就执行，不必等到加载完毕
		$('.port-skills').waypoint(function() {
		var html = Circles.create({
			id : 'html_circle',
			radius : 70,
			value : 93,
			width : 8,
			colors : [ '#FCE6A4', '#EFB917' ],
			text : function(value) {
				return value + '%';
			},
		});
		var css = Circles.create({
			id : 'css_circle',
			radius : 70,
			value : 97,
			width : 8,
			colors : [ '#BEE3F7', '#45AEEA' ],
			text : function(value) {
				return value + '%';
			},
		});
		var js = Circles.create({
			id : 'js_circle',
			radius : 70,
			value : 89,
			width : 8,
			colors : [ '#F8F9B6', '#D2D558' ],
			text : function(value) {
				return value + '%';
			},
		});
		var jq = Circles.create({
			id : 'jq_circle',
			radius : 70,
			value : 91,
			width : 8,
			colors : [ '#F4BCBF', '#D43A43' ],
			text : function(value) {
				return value + '%';
			},
		});
		var ajax = Circles.create({
			id : 'ajax_circle',
			radius : 70,
			value : 85,
			width : 8,
			colors : [ '#F4BCBF', '#D43A43' ],
			text : function(value) {
				return value + '%';
			},
		});
		var bo = Circles.create({
			id : 'bo_circle',
			radius : 70,
			value : 50,
			width : 8,
			colors : [ '#F8F9B6', '#45AEEA' ],
			text : function(value) {
				return value + '%';
			},
		});
		var angular = Circles.create({
			id : 'aj_circle',
			radius : 70,
			value : 30,
			width : 8,
			colors : [ '#FCE6A4', '#45AEEA' ],
			text : function(value) {
				return value + '%';
			},
		});

		var vue = Circles.create({
			id : 'ps_circle',
			radius : 70,
			value : 50,
			width : 8,
			colors : [ '#FCE6A4', '#EFB917' ],
			text : function(value) {
				return value + '%';
			},
		});
		var node = Circles.create({
			id : 'node_circle',
			radius : 70,
			value : 40,
			width : 8,
			colors : [ '#FCE6A4', '#EFB917' ],
			text : function(value) {
				return value + '%';
			},
		});
		var _java = Circles.create({
			id : 'java_circle',
			radius : 70,
			value : 40,
			width : 8,
			colors : [ '#FCE6A4', '#EFB917' ],
			text : function(value) {
				return value + '%';
			},
		});
		var php = Circles.create({
			id : 'php_circle',
			radius : 70,
			value : 60,
			width : 8,
			colors : [ '#FCE6A4', '#EFB917' ],
			text : function(value) {
				return value + '%';
			},
		});

	}, {
		offset : '85%',
		triggerOnce: true,
	});
	$('.port-skills').waypoint(function(d) {
		if(d=='down'){
			$('nav').addClass('active');
		}else{
			$('nav').removeClass('active');
		}
	}, {
		offset : '15%'
	});
	$('.port-counter').waypoint(function() {
		$(".counter-item .count").countTo();
	}, {
		offset : '85%',
		triggerOnce: true,
	});
});

$(".portfolio-item").find("[href='#']").click(function(e){
	e.preventDefault();
});
var selector="#port-item-wrapper";
$(function(){
	var mix=$(selector).mixItUp({
		animation: {
			duration: 400,
			effects: 'fade translateZ(-360px) stagger(34ms) translateX(50%) rotateY(50deg)',
			easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
		},
		selectors: {
			target: '.portfolio-item',
			filter: '.portfolio-item-filter'
		}
	});
});

if($.fn.owlCarousel){
	$(document).ready(function(){
		$(".port-monials-slider").owlCarousel({
			items: 4,
			autoPlay: true,
			pagination: false,
		});
	});
}

$(".nav-toggle").click(function(){
	$("nav").toggleClass("active");
});
$(window).scroll(function(){
	if($(window).scrollTop()>200 && $(window).innerWidth()<=769)
		$("nav").addClass('active-mobile');
	else
		if(!$("nav .navbar-collapse").hasClass('in'))
			$("nav").removeClass('active-mobile');
});
$(window).resize(function(){
	if($(window).scrollTop()>200 && $(window).innerWidth()<=769)
		$("nav").addClass('active-mobile');
	else
		if(!$("nav .navbar-collapse").hasClass('in'))
			$("nav").removeClass('active-mobile');
});
$(".navbar-toggle").click(function(){
	if($(window).scrollTop()<200 && $(window).innerWidth()<=769)
		$("nav").toggleClass('active-mobile');
});