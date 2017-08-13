$(document).ready(function() {
$(".topnav a").filter(function(){
    return this.href == location.href.replace(/#.*/, "");
}).addClass("active");
});