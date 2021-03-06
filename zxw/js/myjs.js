$(function() {
	//使用mousewheel插件
	var key = 0;//控制播放的屏幕数
	var timer = null;
	$(document).mousewheel(function(event,delta){
		//console.log(delta);
		//为了避免一次滚动多屏，需要数据节流
		clearTimeout(timer);
		timer = setTimeout(function(){
			fn(delta);
		}, 200);
		//console.log(key)
	})
	//一个函数存放滚动添加类的命令
	//var mingzi = function(){}
	function fn(delta){
		key = key - delta; //key控制go类名的序号
		//控制key的区间取值最大为4最小0
		if(key < 0){key = 0}else if(key > 4){key = 4}
		$('#box').attr('class','go'+key);
		$('.circle li').eq(key).addClass('current').siblings().removeClass('current');
		$(".content").addClass("cur").siblings().removeClass("cur");
		
	}
	//控制圆点
	var arr = ['第一页','第二页','第三页','第四页','第五页'];
		
		$('.circle li').bind({
			"mouseover":function(){
				$(this).html(arr[$(this).index()]).siblings().html('');
			},
			"mouseout":function(){
				$(this).html('');
			},
			"click":function(){
				key = $(this).index();
				$('#box').attr('class','go'+key);
				$(this).addClass('current').siblings().removeClass('current');
				$(".content").addClass("cur").siblings().removeClass("cur");
			}
		});	
	
		$('.page1 ul li').bind({
			"click":function(){
				key = $(this).index();
				$('#box').attr('class','go'+key);
				$('.circle li').eq(key).addClass('current').siblings().removeClass('current');
				$(".content").addClass("cur").siblings().removeClass("cur");
			}
		});	

		var num = 0
		$('.top span:eq(0)').click(function(){
			num++;
			$('.top ul').css({'transform':'rotateX('+ (num*90) +'deg)'});
		});

		$('.top span:eq(1)').click(function(){
			num--;
			$('.top ul').css({'transform':'rotateX('+ (num*90) +'deg)'});
		});
		$('.bottom ul li div').fadeTo(0,0.5);
		//鼠标滑过li标签的时候要控制div和p通过animate动画效果移动到0的位置
		$('.bottom ul li').hover(function(e) {
       		$(this).children('p,div').stop().animate({'bottom':'0px'},500);
        },function(){
       		$(this).children('p,div').stop().animate({'bottom':'-25px'},500);
		});
		
});
