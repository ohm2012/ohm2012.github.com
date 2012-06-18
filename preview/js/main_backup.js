/* Author:

*/


var vpW = 0;
var vpH = 0;

var colW = 0;
var gutter = 20;

var $c = $('#container');

var $body = $('body');

var colnum = 5;
var itemw = 0;



$('body').disableTextSelect();



$(window).resize(function(){
	resize();

});


function resize(){
	vpW = $(window).width();
	vpH = $(window).height();

	$('section').css({'min-height': vpH });

	var ratio = vpW / vpH;

	if(ratio > 1){
		$('#parallax').width(vpH - 40).height(vpH - 40);
	}else{
		$('#parallax').width(vpW - 40).height(vpW - 40);
	}

}
function smResize(){
	vpW = $(window).width();
	vpH = $(window).height();
	var space = vpW - ((colnum + 1) * gutter) - Math.floor(vpW / 10);
	itemw = space / colnum;

	$c.width(vpW - gutter - Math.floor(vpW / 10));
	

	colW = itemw + gutter;
	
	$('.item').width(itemw).height(itemw);

	$('.w2').width(2 * itemw + gutter).height(2 * itemw + gutter);

	$('.w4').width(4 * itemw + 3 * gutter).height(4 * itemw + 3*gutter);
	$('.w6').width(6 * itemw + 5 * gutter).height(vpH - gutter * 2);


	$c.isotope({
		masonry: {
			columnWidth: colW,
			gutterWidth: gutter
		}
	});

	$c.isotope('reLayout');
}

/*
$c.on('click', '.item .open',function(e){
	e.stopPropagation();
	
	$target = $(this).parent();
	
	//$('.active').removeClass('active').removeClass('w6');
	//resize();
	$target.addClass('w6 active');
	resize();
	$c.isotope('reLayout', function(){
		$('html, body').stop().animate({'scrollTop': $target.offset().top - gutter }, 500);
	});


});
*/

/*
$c.on('click', '.item .open',function(e){
	e.stopPropagation();
	
	$target = $(this).parent();


	$target.animate({'width': 6 * itemw + 5 * gutter, 'height': vpH - gutter * 2}, 500, function(){
		$target.addClass('w6 active');
		resize();
		smResize();

		$c.isotope('reLayout', function(){
			$('html, body').stop().animate({'scrollTop': $target.offset().top - gutter }, 500);
		});
	});
	

});

*/

/*
$c.on('click', '.item .close',function(e){
	//e.stopPropagation();
	
	$target = $(this).parent();

	

	$target.animate({'width': itemw, 'height': itemw}, 500, function(){
		$target.removeClass('w6 active');
		resize();
		smResize();

		$c.isotope('reLayout', function(){
			$('html, body').stop().animate({'scrollTop': $target.offset().top - gutter }, 500);
		});
	});
	

});

*/

$c.delegate( '.item', 'click', function(e){
	//e.stopPropagation();

	$c.isotope( 'remove', $c.find('.item') );
	var $newItems = $('<div class="item" /><div class="item" /><div class="item" />');
	$c.isotope( 'insert', $newItems );

	resize();
	smResize();

	

	
	e.preventDefault();
}); 







/* ================

/* =================================================== */
/* =================================================== */
/* =================================================== */
/* Parallax Effekt */
//PC
var layer0 = {element: $('#layer0'), speed: 0.03, startX: 64, startY: 33, x: 0, y: 0 };

//Typo
var layer1 = {element: $('#layer1'), speed: 0.04, startX: 40, startY: 30, x: 0, y: 0 };

//Pinsel
var layer2 = {element: $('#layer2'), speed: 0.05, startX: 30, startY: 26, x: 0, y: 0 };

//Foto
var layer3 = {element: $('#layer3'), speed: 0.06, startX: 29, startY: 40, x: 0, y: 0};

//Film
var layer4 = {element: $('#layer4'), speed: 0.07, startX: 38, startY: 60, x: 0, y: 0 };

//Buch
var layer5 = {element: $('#layer5'), speed: 0.08, startX: 60, startY: 63, x: 0, y: 0 };

//Bleistift
var layer6 = {element: $('#layer6'), speed: 0.09, startX: 40, startY: 68, x: 0, y: 0 };

//Klappe
var layer7 = {element: $('#layer7'), speed: 0.10, startX: 70, startY: 45, x: 0, y: 0 };

//Headline
var layer8 = {element: $('#layer8'), speed: 0.02, startX: 50, startY: 27, x: 0, y: 0 };

//2012
var layer9 = {element: $('#layer9'), speed: 0.01, startX: 50, startY: 50, x: 0, y: 0 };

//Ohm-Hochschule
var layer10 = {element: $('#layer10'), speed: 0.01, startX: 50, startY: 88, x: 0, y: 0 };



var layers = [layer0, layer1, layer2, layer3, layer4, layer5, layer6, layer7, layer8, layer9, layer10];
var ofY;
initLayers();
moveLayers();

/*
$("#title").mousemove(function(e){
	ofY = e.pageY;
	var relX =- (50 - e.pageX * 100 / vpW);
	var relY =- (50 - ofY * 100 / vpH);



	for(var i = 0, l = layers.length; i<l; i++){
		lay = layers[i];
		lay.x = lay.startX + lay.speed * relX;
		lay.y = lay.startY + lay.speed * relY;
	}
	moveLayers();
});
*/

/*$('#title').hover(
	function(){
		//in

	},
	function(){
		//out
		for(var i = 0, l = layers.length; i<l; i++){
			lay = layers[i];
			lay.x = lay.startX;
			lay.y = lay.startY;
			lay.element.stop().animate({'left': lay.x + '%', 'top': lay.y + '%'},500, 'swing');
		}
	}
);

*/
function initLayers(){
	for(var i = 0, l = layers.length; i<l; i++){
		lay = layers[i];
		lay.x = lay.startX;
		lay.y = lay.startY;
		//lay.element.stop().animate({'left': lay.x + '%', 'top': lay.y + '%'},500, 'easeOutBounce');
	}
}

function moveLayers(){
	for(var i = 0, l = layers.length; i<l; i++){
		lay = layers[i];
		lay.element.css({'left': lay.x + '%', 'top': lay.y + '%'});
	}
}



// requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
  

// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

init();
animate();

function init() {


}

function animate() {
    requestAnimFrame( animate );
    draw();

}

function draw() {

    var time = new Date().getTime() * 0.002;

    var x = (1 + Math.sin( time )) * vpW / 2;
    var y = (1 + Math.sin( time )) * vpH / 2;

  
	var relX =- (50 - x * 100 / vpW);
	var relY =- (50 - y * 100 / vpH);



	for(var i = 0, l = layers.length; i<l; i++){
		lay = layers[i];
		lay.x = lay.startX + lay.speed * relX;
		lay.y = lay.startY + lay.speed * relY;
	}
	moveLayers();
}




/* =================================================== */
/* =================================================== */

resize();
$(window).smartresize(function(){
	smResize();
}).smartresize();




$('.close').click(function(e){
	e.preventDefault();

});



$("a[href^='#']").click(function(event) {
	event.preventDefault();
	var $this = $(this), target = this.hash, $target = $(target);
	$('html, body').stop().animate({ 'scrollTop': $target.offset().top}, 500, 'swing', function() {
		window.location.hash = target;
	});
});
