$(document).ready(function() {

// Changes class of active link to "active"

$(".topnav li a").filter(function(){
    return this.href == location.href.replace(/#.*/, "");
}).addClass("active");

});