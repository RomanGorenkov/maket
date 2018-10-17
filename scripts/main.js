$(document).ready(function() {
 
var bgImage = $('#background-image');
 
 function resizeImg() {
 var imgwidth = bgImage.width(),
 imgheight = bgImage.height(),
 winwidth = $(window).width(),
 winheight = $(window).height(),
 widthratio = winwidth / imgwidth,
 heightratio = winheight / imgheight,
 widthdiff = heightratio * imgwidth,
 heightdiff = widthratio * imgheight;
 
 if(heightdiff>winheight) {
 bgImage.css({
 width: winwidth+'px',
 height: heightdiff+'px'
 });
 } else {
 bgImage.css({
 width: widthdiff+'px',
 height: winheight+'px'
 });
 }
 
 $("#background-image").show();
 
 }
 resizeImg();
 $(window).resize(function() {
 resizeImg();
 });
 
});
