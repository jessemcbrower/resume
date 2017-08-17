$(document).ready(function() {

// Changes class of active link to "active"

$(".topnav li a").filter(function(){
    return this.href == location.href.replace(/#.*/, "");
}).addClass("active");

// Window Resize Behavior

	$(window).resize(function() {
	if ($(window).width() < 950) {
     	$('html').css("font-size", "1.7vw");
  	} else {
    	//
    }
});

});