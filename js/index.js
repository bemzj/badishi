$(function(){
	
//	setInterval(function(){
//		elseWord('.group',1,'img/gHead01.jpg',"邱梓佳","我爱你");
//	},1000);
});
//预加载
function loading(){
	$('#reload').show();
	$('#reload ul li:nth-child(2) .up').stop().animate({"width":"100%"},3000,function(){
		$('#reload').hide();
	});
}
//董事长来视频了
function phoneComing(fun){
	$('#phoneCome').show();
	$('#pMusic')[0].play();
	//拒接
	$('.refuse a').on('click',function(){
		var self = $(this);
		popw(" 我的天，狗年第一春","你是要拒绝几百万的意思吗?<br/>还是赶紧接吧",1,function(){
			if(self.attr('index')==1)
			{
				self.attr('index',2);
				$('.hand').show().addClass('handTween');
			}
		});
	});
	//接听
	$('.accept a').on('click',function(){
		$('#pMusic')[0].pause();
		$('#phoneCome').hide();
		$('#yearVideo').show();
		$('#videoy')[0].play();
		//视频播放完毕
		document.getElementById("videoy").onended=function(){
			$('#yearVideo').hide();
		}
	});
	
	
		
}
//动态添加微信聊天数据
function elseWord(id,index,headSrc,name,text,picsrc,time){
	var n = parseInt(index);
	switch(n)
	{
		case 1:
			var html = "";
			html += '<div class="otherWord"><div class="owHead floatl"><img src='+headSrc+' /></div>';
			html += '<div class="owContent floatl"><ul><li><p class="owName">'+name+'</p></li><li>';
			html += '<div class="owText floatl"><div class="ws"><img src="img/whitesan.jpg" /></div>';
			html += '<p>'+text+'</p></div><div class="clearl"></div></li></ul></div><div class="clearl"></div></div>';
			$(id).append(html);
			break;
		case 2:
			var html = "";
			html += '<div class="otherWord"><div class="owHead floatl"><img src='+headSrc+' /></div>';
			html += '<div class="owContent floatl"><ul><li><p class="owName">'+name+'</p></li><li>';
			html += '<div class="owImg"><img src="'+picsrc+'" /></div></li></ul></div><div class="clearl"></div></div>';
			$(id).append(html);
			break;
		case 3:
			var html = "";
			html += '<div class="otherWord"><div class="owHead floatl"><img src='+headSrc+' /></div>';
			html += '<div class="owContent floatl"><ul><li><p class="owName">'+name+'</p></li><li>';
			html += '<div class="owText floatl videoOver"><div class="ws"><img src="img/whitesan.jpg"/>';
			html += '</div><p>通话时长'+time+'</p></div><div class="clearl"></div></li></ul></div><div class="clearl"></div></div>';
			$(id).append(html);
	}
}
function myWord(id,index,headSrc,text,picsrc){
	var n = parseInt(index);
	switch(n)
	{
		case 1:
			var html = "";
			html += '<div class="myWord"><div class="mwHead floatr"><img src='+headSrc+'/></div>';
			html += '<div class="mwContent floatr"><div class="mwText floatr"><p>'+text+'</p>';
			html += '<div class="gs"><img src="img/greensan.png" /></div></div>';
			html += '<div class="clearr"></div></div><div class="clearr"></div></div>';
			$(id).append(html);			
		break;
		case 2:
			var html = "";
			html += '<div class="myWord"><div class="mwHead floatr"><img src='+headSrc+' /></div>';
			html += '<div class="mwContent floatr"><div class="mwImg floatr"><img src='+picsrc+' />';
			html += '</div><div class="floatr"></div></div><div class="clearr"></div></div>';
			$(id).append(html);
		break;					
	}
}