function mainBgResize(img, w_r, h_r) {
	
	var $img = $(img);
	$img.one('load', function() {
			imgResize();
					// alert(0)
			}).each(function() {
			  if(this.complete) $(this).load();
			});
	
$(window).resize(function() {
		imgResize();
		
});
$(window).resize();
function imgResize() {
		//browser_w = $(".main").width() < 768 ? 768 * w_r : $(".main").width() * w_r;
		//browser_h = $(".main").height() < 650 ? 650 * h_r : $(".main").height() * h_r;
		browser_w = $(".news_top_l").width() * w_r;
		browser_h = $(".news_top_l").height() * h_r;
		
		if(document.getElementById("ab_all")){
			browser_w = $(".all_all").width() * w_r;
			browser_h = $(".all_all").height() * h_r;	
		}else if(document.getElementById("man_js")){
			browser_w = $(".mana_wrap_l").width() * w_r;
			browser_h = $(".mana_wrap_l").height() * h_r;	
		}
		
		
		
		
				if($img.width() < browser_w || $img.width() > browser_w) {
					$img.css({width: browser_w, height: 'auto'});
					if($img.height() < browser_h) {
	
						$img.css({width: 'auto', height: browser_h});
					}
				} else if($img.height() < browser_h || $img.height() > browser_h) {
					$img.css({width: 'auto', height: browser_h});
					if($img.width() < browser_w) {
						$img.css({width: browser_w, height: 'auto'});
					}
				}
				$img.css({marginTop: -($img.height() - browser_h) / 2, marginLeft: -($img.width() - browser_w) / 2,'visibility':'visible'});
			
	}
}

$(function(){
	
		$(".all_l img").each(function() {
				mainBgResize(this, 1, 1);
		});
		
		$(".all_ala img").each(function() {
				mainBgResize(this, 1, 1);
		});
		
		$(".main_zhfw img").each(function() {
				mainBgResize(this, 1.6, 1);
		});
		
		$(".mana_wrap_l img").each(function() {
				mainBgResize(this, 1, 1);
		});
		
		
	
		var count = 0;
		var speed = 1000;
		var changeSpeed = 6000;
		var changeSpeedTi = 5900;
		var timer=null;
		$(".loadLine").animate({"width": 440},changeSpeedTi);
		
		$(window).resize(function(){
				$(".in_r_old ul li").width($(".in_r_old").width()*0.26);
				$(".in_r_old ul li.active").width($(".in_r_old").width()*0.48);
		})
		$(window).resize();
		
		$(".menu_l").click(function(){
				if($(".nav").is(":hidden")){
					$(".nav").removeClass("show").addClass("show");	
				}else{
					$(".nav").removeClass("show");
				}
		})
		
		$(".in_banner_menu span").click(function(){
				clearInterval(timer);
				var nIndex=$(".in_banner_menu span").index(this);
				$(".banner-box ul").find("li").eq(nIndex).fadeIn(speed).siblings().fadeOut(speed);
				$(".banner-deputy ul").find("li").eq(nIndex).fadeIn(speed).siblings().fadeOut(speed);
				$(".in_banner_menu span").eq(nIndex).removeClass().addClass("active").siblings().removeClass();
				$(".loadLine").stop().css({"width": 0});
				$(".loadLine").animate({"width": 440}, changeSpeedTi);
				count=nIndex;
				timer = setInterval(function(){
					setInt();
					
				}, changeSpeed);
			})
		
		function setInt(){
				count++;
			
			if(count == 3){
				
				count = 0;
				
				$(".banner-box ul").find("li").eq(count).fadeIn(speed).siblings().fadeOut(speed);
				$(".banner-deputy ul").find("li").eq(count).fadeIn(speed).siblings().fadeOut(speed);
				$(".in_banner_menu span").eq(count).removeClass().addClass("active").siblings().removeClass();
				
			}else{
				
				$(".banner-box ul").find("li").eq(count).fadeIn(speed).siblings().fadeOut(speed);
				$(".banner-deputy ul").find("li").eq(count).fadeIn(speed).siblings().fadeOut(speed);
				$(".in_banner_menu span").eq(count).removeClass().addClass("active").siblings().removeClass();
				
			}
			
			if(count == 0){
				
				$(".loadLine").removeClass().addClass("loadLine blueLine");
				
			}else if(count == 1){
				
				$(".loadLine").removeClass().addClass("loadLine redLine");
				
			}else{
				
				$(".loadLine").removeClass().addClass("loadLine yellowLine");
			}
			
			$(".loadLine").css({"width": 0});
			$(".loadLine").animate({"width": 440}, changeSpeedTi);
			}
		
		timer = setInterval(function(){
			setInt();
			
		}, changeSpeed);
		
		
		for(var i=0; i<=6; i++){
				$(".brand_main_part1 > a.brand_main_part1_box"+(i+1)+" img").delay(i*200).animate({"left":0,"top":0,"opacity":1},"slow");
			}
			
		$(".jiathis_button_tsina").click(function(){//新浪微博
			var url=window.location.href 
			//alert(encodeURIComponent(url))
			var img=""
			var title=$(this).data("tit")
			//var op="http://service.weibo.com/share/share.php?url="+ encodeURIComponent(url) +"&title="+ encodeURIComponent(title) +"&searchPic="+ img +""
			//window.open(op)
		})
		
		$(".jiathis_button_weixin").click(function(){//微信
			var url=$(this).data("img")
			var title='';
			title+="<div class='weixin'>"
			title+="<i class='c'>x</i>"
			title+="<h2>分享到微信朋友圈</h2>"
			title+="<div class='img'><img src='"+ url +"' width='100px;' height='100px;'></div>"
			title+="<p>打开微信，点击底部的'发现'，使用 '扫一扫' 即可将网页分享到我的朋友圈。</p>"
			title+="</div>"
			$("body").remove(".weixin");
			$("body").append(title)
			//var op="http://service.weibo.com/share/share.php?url='"+ url +"'&title='"+ title +"'&searchPic=false"
			//window.open(op)
		})
		
		$(document).on("click",".weixin .c",function(){
			//alert(0)
			$(".weixin").remove();
		})
		
		
		var shoes_wrapCount=1;
		
		$(".in_r_old ul li").click(function(){	
			var nIndex=$(".in_r_old ul li").index(this);
			var nIndexCount=$(".in_r_old ul li").size();
			shoes_wrapCount=nIndex;
			$(this).removeClass().addClass("active").siblings().removeClass();
			if(nIndex==1)
				{
					$(".in_r_old ul").stop().animate({"left":0});
				}
			$(this).stop().animate({"width":$(".in_r_old").width()*0.48}).siblings().stop().animate({"width":$(".in_r_old").width()*0.26});
			if(nIndex==0 || nIndex==1 || nIndex==nIndexCount-1){
			}else{
				
				
				$(".in_r_old ul").stop().animate({"left":$(".in_r_old").width()*0.26*(nIndex-1)*-1});
			}
			
		})
		
		$(".in_ser_l").click(function(){
			if(shoes_wrapCount<=0){
				
			}else{
				shoes_wrapCount--;
				if(shoes_wrapCount==1)
				{
					$(".in_r_old ul").stop().animate({"left":0});
				}
				$(".in_r_old ul li:eq("+shoes_wrapCount+")").stop().animate({"width":$(".in_r_old").width()*0.48}).siblings().stop().animate({"width":$(".in_r_old").width()*0.26});
				if(shoes_wrapCount==0 || shoes_wrapCount==1){
				}else{
					$(".in_r_old ul").stop().animate({"left":$(".in_r_old").width()*0.26*(shoes_wrapCount-1)*-1});
				}
			}
		})
		
		$(".in_ser_r").click(function(){
			if(shoes_wrapCount>=$(".in_r_old ul li").size()-1){
				
			}else{
				shoes_wrapCount++;
				$(".in_r_old ul li:eq("+shoes_wrapCount+")").stop().animate({"width":$(".in_r_old").width()*0.48}).siblings().stop().animate({"width":$(".in_r_old").width()*0.26});
				if(shoes_wrapCount==$(".in_r_old ul li").size()-1){
				}else{
					$(".in_r_old ul").stop().animate({"left":$(".in_r_old").width()*0.26*(shoes_wrapCount-1)*-1});
				}
			}
		})
		
		
		var in_contact_size=$(".in_contact_wrap li").size();
		var in_contact_group=Math.ceil($(".in_contact_wrap li").size()/6);
		var in_contact_count=0;
		
		$(".contact_menu_b").click(function(){
				if(in_contact_count>=in_contact_group-2){
					$(".contact_menu_b").css("visibility","hidden");	
				}
				if(in_contact_count>=in_contact_group-1){
					
				}else{
					in_contact_count++;
					$(".in_contact_wrap ul").animate({"top":"-=240"});
					$(".contact_menu_t").css("visibility","visible");	
				}
			})
			
		$(".contact_menu_t").click(function(){
				if(in_contact_count<=1){
					$(".contact_menu_t").css("visibility","hidden");	
				}
				if(in_contact_count<=0){
					
				}else{
					in_contact_count--;
					$(".in_contact_wrap ul").animate({"top":"+=240"});
					$(".contact_menu_b").css("visibility","visible");	
				}
			})
		
		
		
		
		
		$('.font_size a').click(function () {
        var index = jQuery(this).index();
        jQuery(this).addClass('on').siblings().removeClass('on');
        if (index == 0) {
            $('.conts').css('font-size', '12px');
			$('.conts').css('line-height', '22px');
			
        }
        else if (index == 1) {
            $('.conts').css('font-size', '14px');
			$('.conts').css('line-height', '30px');
			
        }
        else {
            $('.conts').css('font-size', '16px');
			$('.conts').css('line-height', '32px');
			
        }
})
		
	$(window).resize(function(){
			$(".in_r_new ul").height($(window).width()*0.96*1.1);
			$(".img_list li").css({"height":$(".img_list li").width()*0.54});
		})
		$(window).resize();	
})


function doPrint() {
bdhtml=window.document.body.innerHTML;
sprnstr="<!--startprint-->";
eprnstr="<!--endprint-->";
prnhtml=bdhtml.substr(bdhtml.indexOf(sprnstr)+17);
prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr));
OpenWindow = window.open("");  
OpenWindow.document.write("<!DOCTYPE html PUBLIC '-\/\/W3C\/\/DTD XHTML 1.0 Transitional\/\/EN' 'http:\/\/www.w3.org\/TR\/xhtml1\/DTD\/xhtml1-transitional.dtd'><html xmlns='http:\/\/www.w3.org\/1999\/xhtml'><HEAD><meta http-equiv=\"Content-Type\" content=\"text\/html; charset=utf-8\" \/><TITLE>打印页<\/TITLE><link href=\"..\/css\/base.css\" rel=\"stylesheet\" type=\"text\/css\" \/><link href=\"..\/css\/common.css\" rel=\"stylesheet\" type=\"text\/css\" \/><link href=\"..\/css\/style.css\" rel=\"stylesheet\" type=\"text\/css\" \/><\/HEAD><BODY><div id=\"printbox\" ><\/div><\/BODY><\/HTML>"); 
 $("#printbox #player1").remove();
OpenWindow.document.getElementById("printbox").innerHTML=prnhtml; 
OpenWindow.document.close(); 
OpenWindow.print();  
}






//scrollBox
function scrollBox(Wrap,arrow_l,arrow_r,num){
       $(arrow_l).unbind("click");
	   $(arrow_r).unbind("click");
	  var $scrollBox_ul = $(Wrap).find("ul"); 
	  
	  var scrollBox_li=$(Wrap).find("li");
	  if(document.getElementById("news_move")){
		  	var li_width = $(".news_top .in_pp_wrap_b").width();
		    $(".in_pp_wrap_box ul li").css("width",$(".news_top .in_pp_wrap_b").width());
	  }else if(document.getElementById("nmb")){
		  	var li_width = $(".menu_news_roll").width();
			if($(window).width()>=725){
				$(".menu_news_roll ul").height($(".menu_news_roll").width()*0.5*0.75);
			}else{
				$(".menu_news_roll ul").height("auto");
			}
		    $(".menu_news_roll ul li").css("width",$(".menu_news_roll").width());
	  }else if(document.getElementById("qxpp_index")){
		  	var li_width = $(".in_pp_wrap_box").width();
	  		$(".in_pp_wrap_box ul li").css("width",$(".in_pp_wrap_box").width());

	  }else{
		  
		  	var li_width = $(window).width();
	  		$(".in_pp_wrap_box ul li").css("width",$(window).width()*0.96);
		 }
	  
	  if(scrollBox_li.length>num){
         
		   $(arrow_l).bind("click",function(){
				 if(!$scrollBox_ul.is(":animated")){  
						$scrollBox_ul.css({marginLeft:-li_width});
						$scrollBox_ul.find("li:first").before($scrollBox_ul.find("li:last"))
						$scrollBox_ul.animate({ "marginLeft" : 0+"px" }, 500)
				  } 	
		   })
		   
		   $(arrow_r).bind("click",function(){
				  if(!$scrollBox_ul.is(":animated")){ 
						$scrollBox_ul.animate({ "marginLeft" : -li_width+"px" }, 500 , function(){
						$scrollBox_ul.css({marginLeft:0}).find("li:first").appendTo($scrollBox_ul); 
						})
				  }
		   })
     } 
	 

}

$(function(){
    $(window).resize(function(){scrollBox(".in_pp_wrap_box",".in_pp_wrap_l",".in_pp_wrap_r",1)});$(window).resize();// 外框，左，右，不滚动数量	
	$(window).resize(function(){scrollBox(".menu_news_roll",".magazine_menu_l",".magazine_menu_r",1)});$(window).resize();// 外框，左，右，不滚动数量
	
	
		if($(window).width()<=1270){
			$(".brand_main_part1 a").each(function() {
				$(this).find("img").each(function(){
					mainBgResize(this, 1, 1);
				})
			});
		}else{
			$(".brand_main_part1 a").each(function() {
				$(this).find("img").each(function(){
					$(this).attr("style","");
				})
			});
		}
		
	$(window).resize(function(){
		$(".banner-box ul").height($(".banner-wrap").width()*0.34);
		$(".in_banner_menu").css({"top":$(".banner-wrap").width()*0.34-30});
	})
	$(window).resize();
	
	
//	if(document.getElementById("player1")){
//var isSupportTouch = !!('ontouchend' in document) || navigator.userAgent.indexOf('Windows Phone') > 0;
//var siWidth=$(".details").width()*0.8;
//var siHeight=$(".details").width()*0.6;
//$(window).resize(function(){
	
	
//	if(isSupportTouch){
//		siWidth=$(".details").width()*0.8;
//		siHeight=$(".details").width()*0.6;
//		$("#showHtml5").attr("width",siWidth);
//		$("#showHtml5").attr("height",siHeight);
//	}else{
//		var siWidth=$(".details").width()*0.8;
//		var siHeight=$(".details").width()*0.6;
//		var s1 = new SWFObject("/flash/flvplayer.swf","single",siWidth,siHeight,"7");
//		s1.addParam("allowfullscreen","true");
//		s1.addParam("wmode","transparent");
//		s1.addVariable("file","ad1.flv");
//		s1.addVariable("image","/images/job_img.jpg");
//		//s1.addVariable("autostart","true");
//		s1.addVariable("width",siWidth);
//		s1.addVariable("height",siHeight);
//		s1.write("player1");
//	}
//})
//$(window).resize();

//if(isSupportTouch){
//	$("#player1").append('<video id="showHtml5" controls="controls" width='+siWidth+' height='+siHeight+' src="/flash/mobile.mp4" poster="/images/job_img.jpg"></video>');
//}
	//}

	
})
				//无图图像
var nullimg='../images/error.png';
function lod(t){
	t.onerror = null;
	t.src=nullimg
}
$(document).ready(function(){
	$("img").each(function(){
	if($(this).attr("src")=="")
	{
		$(this).attr({"src":nullimg})
	}
	})
	$(".smallECode").hover(function(){
		$(".bigECode").show();
	},function(){
$(".bigECode").hide();
	})
})