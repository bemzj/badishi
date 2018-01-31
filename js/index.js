$(function(){
	$('.delete').remove();
	loading();
//	showRed();
});

//显示红包页面
function showRed(){
	$('#getRed').show();
	var mydata;
	$.get('wx.json',function(data){
		mydata = data;
		addDanmu('.danmu1','danmuBox1',mydata,14000);
		addDanmu('.danmu2','danmuBox2',mydata,16000);
		addDanmu('.danmu3','danmuBox3',mydata,13000);
	});
	$('.share').on('click',function(){
		$('#sharing').show();
		document.addEventListener('touchmove', onHandler, false);
		$('#sharing').on('click',function(){
			$('#sharing').hide();
			document.removeEventListener('touchmove', onHandler, false);
		});
	});
}
//预加载
function loading(){
	$('#reload').show();
	$('#reload ul li:nth-child(2) .up').stop().animate({"width":"100%"},3000,function(){
		$('#reload').hide();
		wxChating("","img/me.jpg");
	});
}
//动态添加微信聊天数据
function elseWord(c,id,index,headSrc,name,text,picsrc,time){
	var n = parseInt(index);
	switch(n)
	{
		case 1:
			var html = "";
			html += '<div class="otherWord word'+c+'"><div class="owHead floatl"><img src='+headSrc+' /></div>';
			html += '<div class="owContent floatl"><ul><li><p class="owName">'+name+'</p></li><li>';
			html += '<div class="owText floatl"><div class="ws"><img src="img/whitesan.jpg" /></div>';
			html += '<p>'+text+'</p></div><div class="clearl"></div></li></ul></div><div class="clearl"></div></div>';
			$(id).append(html);
			break;
		case 2:
			var html = "";
			
			html += '<div class="otherWord word'+c+'"><div class="owHead floatl"><img src='+headSrc+' /></div>';
			html += '<div class="owContent floatl"><ul><li><p class="owName">'+name+'</p></li><li>';
			html += '<div class="owImg"><img src="'+picsrc+'" /></div></li></ul></div><div class="clearl"></div></div>';
			$(id).append(html);
			if(c==19)
			{
				$('.word19').find('.owImg').css({'width':'120%',"margin-left":"-10%"});
				console.log($('.word'+c).height());
			}
			
			break;
		case 3:
			var html = "";
			time = parseInt(time);
			var trueTime = "";
			if(time>=10&&time<60)
			{
				trueTime ="00:"+time;
			}else if(time<10){
				trueTime ="00:0"+time;
			}
			html += '<div class="otherWord word'+c+'"><div class="owHead floatl"><img src='+headSrc+' /></div>';
			html += '<div class="owContent floatl"><ul><li><p class="owName">'+name+'</p></li><li>';
			html += '<div class="owText floatl videoOver"><div class="ws"><img src="img/whitesan.jpg"/>';
			html += '</div><p>通话时长'+trueTime+'</p></div><div class="clearl"></div></li></ul></div><div class="clearl"></div></div>';
			$(id).append(html);
	}
		var wordTop = $('.word'+c).offset().top - $(window).scrollTop();
		if($(window).height() - wordTop< ($('.word' + c).height() + parseInt($('.word' + c).css('margin-bottom')) + $('.input').height())) {
			var stop = $('.word' + c).height() + parseInt($('.word' + c).css('margin-bottom')) + $(window).scrollTop()+ $('.input').height();
			$('html,body').animate({
				scrollTop: stop
			}, 300, function() {
				$('.word' + c).css('opacity', 1);
				if(index!=3)
				{
					$('#msg')[0].currentTime = 0;
					$('#msg')[0].play();
				}
				
			});
		}else{
			$('.word' + c).css('opacity', 1);
			if(index!=3)
				{
					$('#msg')[0].currentTime = 0;
					$('#msg')[0].play();
				}
		}
	
}
function myWord(c,id,index,headSrc,text,picsrc){
	var n = parseInt(index);
	switch(n)
	{
		case 1:
			var html = "";
			html += '<div class="myWord word'+c+'"><div class="mwHead floatr"><img src='+headSrc+'/></div>';
			html += '<div class="mwContent floatr"><div class="mwText floatr"><p>'+text+'</p>';
			html += '<div class="gs"><img src="img/greensan.png" /></div></div>';
			html += '<div class="clearr"></div></div><div class="clearr"></div></div>';
			$(id).append(html);			
		break;
		case 2:
			var html = "";
			html += '<div class="myWord word'+c+'"><div class="mwHead floatr"><img src='+headSrc+' /></div>';
			html += '<div class="mwContent floatr"><div class="mwImg floatr"><img src='+picsrc+' />';
			html += '</div><div class="floatr"></div></div><div class="clearr"></div></div>';
			$(id).append(html);
		break;					
	}
	var wordTop = $('.word' + c).offset().top - $(window).scrollTop();
		if($(window).height() - wordTop< ($('.word' + c).height() + parseInt($('.word' + c).css('margin-bottom')) + $('.input').height())) {
			var stop = $('.word' + c).height() + parseInt($('.word' + c).css('margin-bottom')) + $(window).scrollTop()+ $('.input').height();
			$('html,body').animate({
				scrollTop: stop
			}, 300, function() {
				$('.word' + c).css('opacity', 1);
				$('#msg')[0].currentTime = 0;
				$('#msg')[0].play();
			});
		}else{
			$('.word' + c).css('opacity', 1);
			$('#msg')[0].currentTime = 0;
			$('#msg')[0].play();
		}
}//微信群聊
//阻止滑动
function onHandler(e){
	e.preventDefault();
}
function wxChating(wn,wh){
	document.addEventListener('touchmove', onHandler, false);
	$('#group').show();
	var i=0;
	var wxName = wn;
	var wxHead = wh;
	var pIndex = [2,1,1,2,2,2,2,1,3,2,1,1,2,1,1,1,1,1,1,2];	
	var pHead = [1,1,2,3,4,5,wh,1,1,wh,wh,3,4,5,wh,3,4,5,1,1];	
	var pName = ["巴迪斯董事长龙国胜","巴迪斯董事长龙国胜","巴迪斯总经理郭敏瑜","巴迪斯湖北经销商","巴迪斯新疆经销商","巴迪斯长沙经销商",wn,"巴迪斯董事长龙国胜","巴迪斯董事长龙国胜",wn,wn,"巴迪斯湖北经销商","巴迪斯新疆经销商","巴迪斯长沙经销商",wn,"巴迪斯湖北经销商","巴迪斯新疆经销商","巴迪斯长沙经销商","巴迪斯董事长龙国胜","巴迪斯董事长龙国胜"];
	var pText = ["",
		"恭祝各位巴迪斯家人狗年吉祥：旺狗贺岁，欢乐祥瑞；旺狗汪汪，事业兴旺；旺狗打滚，财源滚滚；旺狗高跳，吉星高照；旺狗撒欢，如意平安；旺狗祈福，阖家幸福！",
		"巴迪斯总经理郭敏瑜：鸡去长空辞旧岁、狗来大地迎新春。新的一年祝大家狗年大吉大利，万事如意！",
		"","","","",
		"大家安静一下，别high过头了，我有话要跟你们当面说。","","","为巴迪斯疯狂打call","光祝福没有红包吗！！！","","对呀，红包红包","求红包+1","求红包+1","求红包+1","求红包+1",
		"想要红包？没问题！巴迪斯2018年狗年春节拜年红包XX万等着您们抢。每人回复一句<span>2018年春节祝福语向巴迪斯拜年</span>，即可随机获得1-200元的红包。抢完即止，还不行动？",""
	];
	var pSrc = ["img/gif.png","","","img/gif.png","img/gif.png","img/gif.png","img/gif.png","","","img/gif.png","","","img/gif.png","","","","","","","img/red.png"];
	var itween;
	setTimeout(function(){
		elseWord(i,'.group',pIndex[i],'img/gHead0'+pHead[i]+'.jpg',pName[i],pText[i],pSrc[i]);
		itween = setInterval(function() {
			i++;
			switch(i) {
				case 6:
					myWord(i, '.group', pIndex[i], pHead[i], pText[i], pSrc[i]);
					break;
				case 7:
					elseWord(i, '.group', pIndex[i], 'img/gHead0' + pHead[i] + '.jpg', pName[i], pText[i], pSrc[i]);
					clearInterval(itween);
					setTimeout(function() {
						$('#bg')[0].pause();
						//董事长来视频了
						$('#phoneCome').show();
						$('#pMusic')[0].play();
						//先显示视频结束
						i++;
						elseWord(i, '.group', pIndex[i], 'img/gHead0' + pHead[i] + '.jpg', pName[i], pText[i], pSrc[i], $('#videoy')[0].duration);
						//拒接
						$('.refuse a').on('click', function() {
							var self = $(this);
							popw(" 我的天，狗年第一春", "你是要拒绝几百万的意思吗?<br/>还是赶紧接吧", 1, function() {
								if(self.attr('index') == 1) {
									self.attr('index', 2);
									$('.hand').show().addClass('handTween');
								}
							});
						});
						//接听
						$('.accept a').on('click', function() {
							$('#pMusic')[0].pause();
							$('#phoneCome').hide();
							$('#yearVideo').show();
							$('#videoy')[0].play();
		
						});
						//视频播放完毕
						document.getElementById("videoy").onended = function() {
							$('#yearVideo').hide();
							$('#bg')[0].play();
							$('#over')[0].play();
							itween = setInterval(function() {
								i++;
								if(i == pIndex.length - 1) {
									clearInterval(itween);
									$('.happinput').show();
									//点击事件
									$('#hidBtn').on('click', function() {
										myWord(20, '.group', 1, wh, $('.happinput input').val(), "");
										$('.happinput input').val("");
										$('.happinput input').attr('disabled', 'disabled');
		
										var sendStatus = true;
										if(sendStatus == true) {
											setTimeout(function() {
												elseWord(i, '.group', pIndex[i], 'img/gHead0' + pHead[i] + '.jpg', pName[i], pText[i], pSrc[i]);
												$('.word19').on('click', function() {
													$('#group').hide();
												});
											}, 1500);
											
										}
									});
								} else {
									switch(i) {
										case 9:
										case 10:
										case 14:
											myWord(i, '.group', pIndex[i], pHead[i], pText[i], pSrc[i]);
											break;
										default:
											elseWord(i, '.group', pIndex[i], 'img/gHead0' + pHead[i] + '.jpg', pName[i], pText[i], pSrc[i]);
											break;
									}
								}
		
							}, 1500);
						}
					}, 1800);
					break;
				default:
					elseWord(i, '.group', pIndex[i], 'img/gHead0' + pHead[i] + '.jpg', pName[i], pText[i], pSrc[i]);
					break;
			}
		}, 1500);
	},1000);
	
	
}
// 发送消息

function addDanmu(id,className,data,time){
	$(id).append('<div class="ab '+className+'"></div>');
	var length = 0;
	for(var i=0;i<data.length;i++)
	{
		var html = "";
		html += ' <div class="danBox floatl"><div class="floatl"><img src='+data[i].open.openface+' /></div><div class="floatl">';
		html += '<span>'+data[i].open.openName+'</span>：<span>'+data[i].content+'</span></div><div class="clearl"></div></div>';
		$('.'+className).append(html);
		
		length += ($('.'+className).find('.danBox').eq(i).width()+10);
	}
	for(var i=0;i<data.length;i++)
	{
		var html = "";
		html += ' <div class="danBox floatl"><div class="floatl"><img src='+data[i].open.openface+' /></div><div class="floatl">';
		html += '<span>'+data[i].open.openName+'</span>：<span>'+data[i].content+'</span></div><div class="clearl"></div></div>';
		$('.'+className).append(html);
		
		length += ($('.'+className).find('.danBox').eq(i).width()+10);
	}
	$('.'+className).append('<div class="clearl"></div>');
	$('.'+className).width(length);
	$('.'+className).css('left',$(window).width()).stop().animate({"left":-length/2},time,"linear",function(){
		lunbo('.'+className,length/2,time);
	});
	
	
}
function lunbo(cn, l,time) {
	$(cn).css('left', 0).stop().animate({
		"left": -l
	}, time, "linear", function() {
		lunbo(cn, l)
	});
}