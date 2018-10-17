$(document).ready(function() {
 
var bgImage = $('#background-image');
var bgTone = $('#background-tone')
 
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
 bgTone.css({
 width: winwidth+'px',
 height: heightdiff+'px',
 background: 
 linear-gradient(
      rgba(0, 150, 100, 0.2), 
      rgba(0, 150, 100, 0.2)
    ),
    url()
 });
 } else {
 bgTone.css({
 width: widthdiff+'px',
 height: winheight+'px',
 background: 
 linear-gradient(
      rgba(0, 150, 100, 0.2), 
      rgba(0, 150, 100, 0.2)
    ),
    url()
 });
 }
 
 $("#background-tone").show();
 
 }
 resizeImg();
 $(window).resize(function() {
 resizeImg();
 });
 
});