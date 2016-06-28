



// Dit werkt ook:
// $('.container > *:visible').hide().next().show();



var test = function(){
	
		$('body').toggleClass('cat garden');
		$('.photoArray').toggle();
		$('.photoArray1').toggle();
		$('.buttonArray').toggle();
		$('.buttonArray1').toggle();
				
		}


var next_picture = function() {
	
	var $next = $('.container > *:visible').hide().next();
	if($next.length == 0) $('.container > *:first').show();
	else $next.show();
}

var next_pictureA = function() {
	
	var $nextA = $('.containerA > *:visible').hide().next();
	if($nextA.length == 0) $('.containerA > *:first').show();
	else $nextA.show();
}




var prev_picture = function() {
	
	var $prev = $('.container > *:visible').hide().prev();
	
	if($prev.length == 0) $('.container >*:last').show();
	else $prev.show();
}

var prev_pictureA = function() {
	
	var $prevA = $('.containerA > *:visible').hide().prev();
	
	if($prevA.length == 0) $('.containerA >*:last').show();
	else $prevA.show();
}

var next_picture1 = function() {
	
	var $next1 = $('.container1 > *:visible').hide().next();
	if($next1.length == 0) $('.container1 > *:first').show();
	else $next1.show();
}

var next_picture1A = function() {
	
	var $next1A = $('.container1A > *:visible').hide().next();
	if($next1A.length == 0) $('.container1A > *:first').show();
	else $next1A.show();
}

var prev_picture1 = function() {
	
	var $prev1 = $('.container1 > *:visible').hide().prev();
	
	if($prev1.length == 0) $('.container1 >*:last').show();
	else $prev1.show();
}

var prev_picture1A = function() {
	
	var $prev1A = $('.container1A > *:visible').hide().prev();
	
	if($prev1A.length == 0) $('.container1A >*:last').show();
	else $prev1A.show();
}

var next_picture2 = function() {
	
	var $next2 = $('.container2 > *:visible').hide().next();
	if($next2.length == 0) $('.container2 > *:first').show();
	else $next2.show();
}

var next_picture2A = function() {
	
	var $next2A = $('.container2A > *:visible').hide().next();
	if($next2A.length == 0) $('.container2A > *:first').show();
	else $next2A.show();
}
var prev_picture2 = function() {
	
	var $prev2 = $('.container2 > *:visible').hide().prev();
	
	if($prev2.length == 0) $('.container2 >*:last').show();
	else $prev2.show();
}

var prev_picture2A = function() {
	
	var $prev2A = $('.container2A > *:visible').hide().prev();
	
	if($prev2A.length == 0) $('.container2A >*:last').show();
	else $prev2A.show();
}





$(document)
	.on('click', '.next', function(){
		next_picture();
		
	})
	
	.on('click', '.nextA', function(){
		next_pictureA();
		
	})
	.on('click','.prev',function(){
		prev_picture();
	})
	
	.on('click','.prevA',function(){
		prev_pictureA();
	})
	.on('click', '.next1', function(){
		next_picture1();
	})
	
	.on('click', '.next1A', function(){
		next_picture1A();
	})
	
	.on('click','.prev1',function(){
		prev_picture1();
	})
	
	.on('click','.prev1A',function(){
		prev_picture1A();
	})
	
	.on('click', '.next2', function(){
		next_picture2();
	})
	
	.on('click', '.next2A', function(){
		next_picture2A();
	})
	
	.on('click','.prev2',function(){
		
		prev_picture2();
	})
	.on('click','.prev2A',function(){
		
		prev_picture2A();
	})
	
	
	.on('click','#toggleButton',function(){
		test();
		$('.containerA > *').hide();
		$('.container1A > *').hide();
		$('.container2A > *').hide();
		$('.containerA > *:first').show();
		$('.container1A > *:first').show();
		$('.container2A > *:first').show();
		
	})
	
	.ready(function(){
		$('.container > *:first').show();
	})
	
	.ready(function(){
		$('.container2 > *:first').show();
	})
	
	.ready(function(){
		$('.container1 > *:first').show();
	})
	;
	
