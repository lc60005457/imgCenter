/**
 * version 1.0.1
 */

var bimg = document.getElementsByTagName('img')[0];
var fa = bimg.parentNode;
var timg = new Image();
timg.src = bimg.src;
var div_img = document.createElement('div');
div_img.style.width = bimg.style.width? bimg.style.width: bimg.width + 'px';
div_img.style.height = (bimg.style.height != "")? bimg.style.height: bimg.height + 'px';
div_img.style.backgroundImage = 'url(' + bimg.src + ')';
div_img.style.backgroundPosition = 'center';
var w = parseInt(div_img.style.width.split("px")[0]);
var h = parseInt(div_img.style.height.split("px")[0]);
div_img.style.backgroundSize = (timg.width/timg.height > w/h)? "auto 100%": "100% auto";
div_img.style.display = "inline-block";
fa.replaceChild(div_img, bimg);