/* Author:

*/



var students = [
];


$('#container').find('.student').each(function(){
	var student = {};
	student.index = $(this).attr('data-index');
	student.name = $(this).attr('data-name');
	student.title = $(this).attr('data-title');
	student.portraitUrl = $(this).find('.portrait').attr('src');
	student.slides = [];
	student.active = false;
	$(this).find('.sl').each(function(){
		student.slides.push( $(this) );
	});
	student.numSlides = student.slides.length;
	students.push(student);
}).remove();


var gallery = {
	parent: $('#absolventen'),
	elem: null,
	$slidewrapper : null,
	sliding: 0,
	isOpen: false,
	numSlides: 0,
	slidePos: 0,
	slideWidth: 0,
	$activeSlide: null,
	activeStudentIndex: 0,
	getStudentBySlide: function(slideIndex){
		return this.$slidewrapper.children().eq(slideIndex).prev('.first').index('.first');
	},
	getSlideByStudent: function(studentIndex){
		return this.$slidewrapper.find('.first').eq(studentIndex).index();
	},
	increaseStudent: function(){
		studentIndex += 1;
	},
	init: function(){
		this.elem = $('<div id="gallery"></div>');
		this.elem.appendTo(this.parent);
		this.elem = $('#gallery');
		this.$slidewrapper = $('<div id="slide-wrapper"></div>');
		this.elem.append( $('<a class="prev-student" href="#">vorheriger</a><a class="next-student" href="#">nächster</a><a class="close" href="#"><span class="visuallyhidden">x</span></a>'));
		this.$slidewrapper.appendTo(this.elem);
		for (var i = 0, j = students.length; i < j; i++){
			var stu = students[i];
			for (var k = 0, l = stu.slides.length; k < l; k++){
				var slide = stu.slides[k];
				this.numSlides += 1;
				var slideClass = slide.hasClass('text') ? 'tablecell' : '';
				var first = k === 0 ? "first" : null;
				$( document.createElement('div') ).addClass('slide ' + first ).attr('id', 'student' + stu.index + '-slide' + k ).append(
					$( document.createElement('div') ).addClass('slide-inner').addClass(slideClass).append(
						slide.html()
					)
				).appendTo(this.$slidewrapper);
			}

		}

		this.$activeSlide = this.$slidewrapper.children().eq(0);
		this.$activeSlide.addClass('active-slide');
		return true;


	},
	open: function(position){
		var self = this;
		this.elem.stop().css({'width': vpW - 2*cBorder - gutter}).transition({'height':vpH-2*gutter}, 500, function(){
			self.elem.addClass('full');
			$('html,body').stop().animate({'scrollTop': self.elem.offset().top - gutter}, 500, function(){
				self.elem.transition({'opacity':1});
				$activeElement = $('#gallery');
				resize();
				
				self.move(position);
				self.isOpen = true;
			});

			
		});
	},
	move: function(direction){
		var self = this;
		if( self.sliding === 0 ){
			var type = typeof(direction);
			if(type === 'string'){
				if(direction === 'next'){
					self.slidePos += 1;
				}else if(direction === 'prev'){
					self.slidePos -= 1;
				}else if(direction === 'last'){
					self.slidePos = self.numSlides -1;
				}else if(direction === 'first'){
					self.slidePos = 0;
				}else if(direction === 'next-student'){
					
				}else if(direction === 'prev student'){
				}else{
					self.slidePos = 0;
				}
			}else if(type === 'number'){
				self.slidePos = direction;
			}

			self.sliding = 1;

			if(self.slidePos > self.numSlides - 1){
				self.slidePos = self.numSlides - 1;
				$('#slide-wrapper').stop().transition({'left': - self.slidePos * self.slideWidth - 100}, 100, 'ease-in-out').transition({'left': - self.slidePos * self.slideWidth }, 100, 'ease-in-out', function(){ self.sliding = 0; });
			}else if(self.slidePos < 0){
				self.slidePos = 0;
				$('#slide-wrapper').transition({'left': - self.slidePos * self.slideWidth + 100}, 100, 'ease-in-out').transition({'left': - self.slidePos * self.slideWidth }, 100, 'ease-in-out', function(){ self.sliding = 0; });
			}else{
				$('#slide-wrapper').transition({'left': - self.slidePos * self.slideWidth }, 300, 'ease-in-out', function(){ self.sliding = 0; });
			}
		}
		return true;
	}
};

gallery.init();



// Erstelle karten haha!!

for(var i = 0, j = students.length; i < j; i++){
	var stu = students[i];
	$( document.createElement('div') ).addClass('item').append(
		$( document.createElement('div') ).addClass('item-inner').append(
			$( document.createElement('div') ).addClass('front').append(
				$( document.createElement('div') ).addClass('student-portrait').append(
					$( document.createElement('img') ).attr('src', stu.portraitUrl)
				)
			)
		).append(
			$(document.createElement('div') ).addClass('back').append(
				$(document.createElement('div') ).addClass('student-description').append(
					$( document.createElement('h2') ).text(stu.name),
					$( document.createElement('h3') ).text(stu.title)
				),
				$(document.createElement('a') ).attr({'href':'#student' + stu.index, 'data-id': stu.id} ).addClass('open').append(
					$(document.createElement('span') ).addClass('visuallyhidden').text('open')
				)
			)
		)
	).appendTo('#container');
	//var card = $('<div class="item" id="card-' + i + '"><img src="' + students[i].portraitUrl + '"></div>').appendTo('#container');
}

var vpW = 0;
var vpH = 0;

var cBorder = 100;
var margin = 10;
var gutter = 2* margin;

var $c = $('#container');

var $body = $('body');

var colnum = 6;
var itemw = 0;


var touch = null;
var swipe = 0;



var studentId = 0;




$activeElement = $('#home');


var animateTitle = true;


//$('body').disableTextSelect();

if(Modernizr.touch){
	touch = true;
}

$(window).resize(function(){
	resize();
});

//remove image source so images do not load at the beginning
//$("img").removeAttr("src").css('display':'none');

function resize(scroll){

	vpW = $(window).width();
	vpH = $(window).height();


	var size = 0;

	if (vpW < 321){
		size = 1;
	}else if( vpW < 580 ){
		size = 2;
	}else if( vpW < 900 ){
		size = 3;
	}else if( vpW < 1200){
		size = 4;
	}else if( vpW < 1600 ){
		size = 5;
	}else if( vpW < 1700 ){
		size = 6;
	}else if( vpW < 2000 ){
		size = 7;
	}else if( vpW < 2500 ){
		size = 8;
	}else{
		size = 9;
	}

	if(size != colnum){
		colnum = size;
		cBorder = size * size;

	}




	$('section').css({'min-height': vpH });

	var ratio = vpW / vpH;

	if(ratio > 1){
		// Querformat
		$('#parallax').width(vpH - cBorder).height(vpH - cBorder);
	}else{
		// Hochformat
		$('#parallax').width(vpW - cBorder).height(vpW - cBorder);
	}


	var space = vpW - (colnum + 1 ) * gutter - cBorder;
	itemw = space / colnum;

	var cWidth = vpW - cBorder - gutter +1;
	$c.width( cWidth );
	
	
	$('.item').width(itemw).height(itemw * 4 / 3);

	//$('.w2').width(2 * itemw + gutter).height(2 * itemw + gutter);

	//$('.w4').width(4 * itemw + 3 * gutter).height(4 * itemw + 3*gutter);
	//$('.full').width(colnum * itemw + (colnum-1) * gutter).height(vpH - gutter * 2);

	

	$full = $('.full');
	$slides = $full.find('.slide');

	$full.width(cWidth).height(vpH - gutter * 2);
	gallery.slideWidth = cWidth;

	$slides.width(gallery.slideWidth).height(vpH - gutter * 2);
	
	$('.slide-inner').width(gallery.slideWidth).height(vpH - gutter * 2);
	
	
	gallery.$slidewrapper.width(gallery.slideWidth * gallery.numSlides);

	gallery.$slidewrapper.css({'left': - gallery.slidePos * gallery.slideWidth });

	
	$('html,body').scrollTop($activeElement.offset().top - gutter);
	$.waypoints('refresh');
}

resize();





$('#container').on('click', '.item', function(){
	$('.focus').removeClass('focus');
	$(this).addClass('focus');
});

$('#container').on('click', '.focus', function(){
	$(this).removeClass('focus');
});


$('#container').on('click', '.open', function(event){
	event.stopPropagation();
	event.preventDefault();
	// Gallerie öffnen, falls sie noch nicht offen ist.
	// dann zum ausgewählten Studenten sliden.

	//var studentIndex = parseInt( $(this).attr('data-index'), 10);
	//console.log("studenIndex: " + studentIndex);
	var id = $(this).attr('href');
	console.log("studenId: " + id);
	var pos = gallery.$slidewrapper.find(id + '-slide0').index();


	$target = $('#gallery');
	$activeElement = $target;

	if( gallery.isOpen ){
		//Gallerie ist schon offen
		$('html,body').stop().animate({'scrollTop': $target.offset().top - gutter}, 500, function(){
			resize();
			console.log("gallerie schon offen");
			gallery.move(pos);
		});
	}else{
		//Gallerie öffnen
		gallery.open(pos);
	}
});


$('#gallery').on('click', '.close', function(event){
	event.stopPropagation();
	event.preventDefault();
	// Gallerie schließen

	$target = $('#gallery');
	$target.transition({'height':0, 'opacity':0}, 500, function(){
		$('html,body').stop().animate({'scrollTop': $('#absolventen').offset().top - gutter}, 500, function(){
			$activeElement = $('#absolventen');
			$target.removeClass('full');
			resize();
			gallery.isOpen = false;
		});
		
	});

});

$('#nav').find("a[href^='#']").click(function(event) {
	event.preventDefault();
	var $this = $(this), target = this.hash, $target = $(target);
	$('html, body').stop().animate({ 'scrollTop': $target.offset().top - gutter}, 500, 'swing', function() {
		//window.location.hash = target;
		//$('.focus').removeClass('focus');
	});
});

$('section').waypoint({ offset: '50%' });

$('body').on('waypoint.reached', 'section', function(event, direction) {
	var $active = $(this);
	if (direction === "up") {
		$active = $active.prev();
	}
	if (!$active.length) $active = $active.end();
	$activeElement = $active;
	$('.section-active').removeClass('section-active');
	$active.addClass('section-active');
	$('.link-active').removeClass('link-active');
	$('a[href=#'+$active.attr('id')+']').addClass('link-active');
});
// Register each section as a waypoint.






$('#gallery').mousemove(function(event){
	if(event.pageX > vpW / 2){
		$(this).css({'cursor': 'e-resize'});
	}
	else if(event.pageX < vpW / 2){
		$(this).css({'cursor': 'w-resize'});
	}
});

$('#gallery').click(function(e){
	if(e.pageX > vpW / 2){
		gallery.move('next');
		
	}
	else if(e.pageX < vpW / 2){
		gallery.move('prev');
		
	}
});








$('.next-student').click(function(event){
	event.preventDefault();
	event.stopPropagation();
	gallery.move('next-student');
});

$('.prev-student').click(function(event){
	event.preventDefault();
	event.stopPropagation();
	gallery.move('prev-student');
});



$(window).hashchange(function(event){
	event.preventDefault();
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


$('#title').mouseenter(function(){
	animateTitle = true;
	animate();
}).mouseleave(function(){
	animateTitle = false;

	for(var i = 0, l = layers.length; i<l; i++){
		lay = layers[i];
		lay.x = lay.startX;
		lay.y = lay.startY;
		lay.element.stop().animate({'left': lay.x + '%', 'top': lay.y + '%'},500, 'swing');
	}
});



init();
animate();

function init() {


}

function animate() {
	if(animateTitle){
    	requestAnimFrame( animate );
    	draw();
    }

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

