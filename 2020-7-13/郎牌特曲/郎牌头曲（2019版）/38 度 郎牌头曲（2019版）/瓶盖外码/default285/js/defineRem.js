// JavaScript Document
function setFontSize(){
	var clientW=document.documentElement.clientWidth;
	if(clientW>=1200){
		clientW=640;
	}
	document.getElementsByTagName('html')[0].style.fontSize=clientW/16+'px';
}
setFontSize();
window.onresize=function(){
	setFontSize();	
}

	