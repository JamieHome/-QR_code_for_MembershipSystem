
$(function () {
	indexFn();
	var h = indexFn();
     
	//引导页
	preload($('.guideImg'),function () {  
		setGuide();
        $('.guide').show();
		
		var timeout=setTimeout(function(){
			containerShow();
		});
		var timer=setTimeout(function(){
			$('#container').css({'height':h,'overflow':''});
		});
        $('.ignore-btn').on('touchend',function () {
            clearTimeout(timeout);
			clearTimeout(timer);
			containerShow();
			$('#container').css({'height':h,'overflow':''});
            return false;
		});
		
		
		
	});
	
	
	$(window).resize(function () {
		setGuide();
		
	});
	
	function containerShow() {
		$.cookie('guideShowed','1',{});
        $('.guide').hide();
		$('#container').css('opacity',1);
		search();
	}
	function setGuide() {
		var clientW=$('.guide').width();
		var clientH=$(window).height();
		if(clientH<clientW*1.6){
			clientH=clientW*1.6;
		}
		$('.guide').css({'height':clientH,'width':clientW}).addClass('guide2');
		//$('#container').css({'height':clientH,'overflow':'auto'});
	}
	function preload(imgArr,callback){
		var n = 0;
		for(var i=0; i<imgArr.length; i++){
			if(imgArr[i].complete){
				n++;
			}else{
				imgArr[i].onload = function(){
					n++;
				}
			}
		}
		var et = setInterval(function(){
			if(n==imgArr.length){
				clearInterval(et);
				$('#loading').hide();
				callback();
			}
		},10)
	}
		
//主页面
function indexFn() {
	var mySwiper = new Swiper('.swiper-container',{
		  autoplay: 3000,//可选选项，自动滑动
		  pagination : '.swiper-pagination',
		  paginationClickable :true,
		  loop:true,
	}); 
	 var clientH=$(document).height();
	 var containerH=$('#container').height();
	 var h=containerH>clientH?containerH:clientH;
	// $('#container').css('height',h);
	 $('.text').bind('paste propertychange input keyup focus', function () {
	    if($(this).val().length>0){
	        $(this).next('.clearText').show();
	    }else{
	        $(this).next('.clearText').hide();
	    }
	 });
	$('.clearText').on('click',function () {
	    $(this).prev('.text').val('').focus();
	    $(this).hide();
	});
	return h;
}

});

function search() {
	var data=[
	{
		content:'郎酒官网',
		url:'http://langjiu.cn/'
	},
	{
		content:'品牌活动',
		url:'activity'
	},
	{
		content:'购买链接',
		url:'https://langjiu.tmall.com/'
	},
	{
		content:'红色之旅',
		url:'activity'
	},
	{
		content:'骑行活动',
		url:'http://mp.weixin.qq.com/mp/homepage?__biz=MzA5MDc0NDgyMQ==&hid=1&sn=006a317b62a4a2f35d78c00de8f6f5fc#wechat_redirect'
	},
	{
		content:'醉美老板娘',
		url:'http://mp.weixin.qq.com/mp/homepage?__biz=MzA5MDc0NDgyMQ==&hid=3&sn=0fd16cc8ce3374f3b038b4b308ca7d35#wechat_redirect'
	},
	{
		content:'社会公益',
		url:'activity'
	}
];
$('#search-btn').on('click',function () {
	var flag=true;
	var val=$.trim($(this).siblings('input').val());
	if(!val)return;
	var len=data.length;
	for (var i = 0; i < len; i++) {
		if(data[i].content.indexOf(val)!=-1){
			window.location.href=data[i].url;
			flag=false;
			break;
		}
	}
	if(flag){
		tooltip('找不到此活动！');
	}	
});	
}


	
	