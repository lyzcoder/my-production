$(function(){
	

//轮播图
focusPic($(".banner .pic-btn li"),$(".banner .pic-list li"),$(".banner"))
/*focusPic($(" .focus-pic .pic-btn li"),$(".focus-pic").eq(0).children(".pic-list").children("li"),$(".focus-pic"))
focusPic($(" .focus-pic .pic-btn li"),$(".focus-pic").eq(1).children(".pic-list").children("li"),$(".focus-pic"))
focusPic($(" .focus-pic .pic-btn li"),$(".focus-pic").eq(2).children(".pic-list").children("li"),$(".focus-pic"))
focusPic($(" .focus-pic .pic-btn li"),$(".focus-pic").eq(3).children(".pic-list").children("li"),$(".focus-pic"))
focusPic($(" .focus-pic .pic-btn li"),$(".focus-pic").eq(4).children(".pic-list").children("li"),$(".focus-pic"))
focusPic($(" .focus-pic .pic-btn li"),$(".focus-pic").eq(5).children(".pic-list").children("li"),$(".focus-pic"))*/
for( var i=0;i<6;i++){
	focusPic($(""),
	$(".focus-pic").eq(i).children(".pic-list").children("li"),$(".focus-pic"))
}
	
function focusPic($btnLi,$picLi,$wrap) {
    var iNow =0;
    var len = $picLi.length;
    var timer = null;
	//var time = Math.random()*500+2500;
    /*初始的设置*/
    $btnLi.removeClass("active").eq(iNow).addClass("active");
    $picLi.hide().eq(iNow).show();

    autoPlay();//自动轮播

   /* $wrap.hover(function () {
        clearInterval(timer)
    },function () {
        autoPlay()
    });*/

    /*小按钮的事件*/
    $btnLi.mouseover(function () {
        if($(this).hasClass("active")){return}
        iNow = $(this).index();

        changeView()
    });

    function autoPlay() {
        timer= setInterval(toNext,3500)
    }

    function toNext () {
        /*iNow++;
         iNow%=len;*/
        iNow =++iNow%len;
        changeView()
    }

    function changeView() {
        $btnLi.removeClass("active").eq(iNow).addClass("active");
        $picLi.stop().fadeOut().eq(iNow).stop().fadeIn();
        //console.log(iNow)
    };
}
	
	
	
	

//二级菜单
	$(".navlist").hover(function(){
		$(".subnav-box",this).show()
		$(this,this).css({"background":"#fff"});
		$(".nav-h a",this).css({"color":"#b00"});
	},function(){
		$(".subnav-box",this).hide()
		$(this,this).css({"background":"none"});
		$(".nav-h a",this).css({"color":"#fff"});
	})


//选项卡
/*change($(".tab li"),$(".product ul").children("li"))
change($(".tab li"),$(".product ul").children("li"))
change($(".tab li"),$(".product ul").children("li"))
change($(".tab li"),$(".product ul").children("li"))*/
for(var i=0;i<4;i++){	
	change($(".tab li"),$(".product ul").children("li"))
};

function change(source,show){
	source.mouseenter(function(){
		for(var i=0;i<4;i++){
			show.eq(i).css("display","none")
			$(".tab li").eq(i).removeClass("select")
		}
			show.eq($(this).index()).css("display","block")
			$(".tab li").eq($(this).index()).addClass("select")
	})
};

//选项卡加载数据开始
	var proData = [];
    $.get("json/product.json",function (data) {
    	proData = data;
        //console.log(proData = data); //所有的商品
        $(".product ul li").each(function(){
        	
			var index = $(this).index(".product ul li");
			//console.log(index);
	        var str = "";
	        
	        for(var i=4*index;i<4*(index+1);i++){
				str+='<dl>'+
						'<dt><a href="detail.html?pId='+proData[i].pId+'"><img src="'+proData[i].img+'"/></a></dt>'+
						'<dd>'+proData[i].name+'</dd>'+
						'<dd class="ov-ellipsis">'+proData[i].des+'</dd>'+
						'<dd>抢购价格：<strong>￥'+proData[i].price+'</strong>元</dd>'+
						'<dd>秒杀已结束</dd>'+
					'</dl>'
			};
			
			$(this).html(str);
        });
		
/*
        var str = "";
        for(var i=4;i<8;i++){
			str+='<dl>'+
					'<dt><a href="detail.html?pId='+proData[i].pId+'"><img src="'+proData[i].img+'"/></a></dt>'+
					'<dd>'+proData[i].name+'</dd>'+
					'<dd class="ov-ellipsis">'+proData[i].des+'</dd>'+
					'<dd>抢购价格：<strong>￥'+proData[i].price+'</strong>元</dd>'+
					'<dd>秒杀已结束</dd>'+
				'</dl>'
		};
		$(".product ul").children("li").eq(1).html(str);
		
        var str = "";
        for(var i=8;i<12;i++){
			str+='<dl>'+
					'<dt><a href="detail.html?pId='+proData[i].pId+'"><img src="'+proData[i].img+'"/></a></dt>'+
					'<dd>'+proData[i].name+'</dd>'+
					'<dd class="ov-ellipsis">'+proData[i].des+'</dd>'+
					'<dd>抢购价格：<strong>￥'+proData[i].price+'</strong>元</dd>'+
					'<dd>秒杀已结束</dd>'+
				'</dl>'
		};
		$(".product ul").children("li").eq(2).html(str);
		
        var str = "";
        for(var i=12;i<16;i++){
			str+='<dl>'+
					'<dt><a href="detail.html?pId='+proData[i].pId+'"><img src="'+proData[i].img+'"/></a></dt>'+
					'<dd>'+proData[i].name+'</dd>'+
					'<dd class="ov-ellipsis">'+proData[i].des+'</dd>'+
					'<dd>抢购价格：<strong>￥'+proData[i].price+'</strong>元</dd>'+
					'<dd>秒杀已结束</dd>'+
				'</dl>'
		};
		$(".product ul").children("li").eq(3).html(str);*/
		
	});
//选项卡加载数据结束
	
	//产品楼层数据 开始
	var proData = [];
    $.get("json/product.json",function (data) {
    	proData = data;
        //console.log(proData = data); //所有的商品
        var str = "";
        for(var i=5;i<15;i++){
			str+='<li>'+
					'<a href="detail.html?pId='+proData[i].pId+'"><img class="lazy" data-original="'+proData[i].img+'"></a>'+
					'<p>'+proData[i].des+'</p>'+
					'<b>￥'+proData[i].price+'</b>'+
				'</li>'
		};
		$(".product-list").eq(0).html(str);
        
		var str = "";
        for(var i=22;i<32;i++){
			str+='<li>'+
					'<a href="detail.html?pId='+proData[i].pId+'"><img class="lazy" data-original="'+proData[i].img+'"></a>'+
					'<p>'+proData[i].des+'</p>'+
					'<b>￥'+proData[i].price+'</b>'+
				'</li>'
		};
		$(".product-list").eq(1).html(str);
		
		var str = "";
        for(var i=16;i<22;i++){
			str+='<li>'+
					'<a href="detail.html?pId='+proData[i].pId+'"><img class="lazy" data-original="'+proData[i].img+'"></a>'+
					'<p>'+proData[i].des+'</p>'+
					'<b>￥'+proData[i].price+'</b>'+
				'</li>'
		};
		$(".product-list").eq(2).html(str);
		
		var str = "";
        for(var i=44;i<50;i++){
			str+='<li>'+
					'<a href="detail.html?pId='+proData[i].pId+'"><img class="lazy" data-original="'+proData[i].img+'"></a>'+
					'<p>'+proData[i].des+'</p>'+
					'<b>￥'+proData[i].price+'</b>'+
				'</li>'
		};
		$(".product-list").eq(3).html(str);
		
		var str = "";
        for(var i=24;i<34;i++){
			str+='<li>'+
					'<a href="detail.html?pId='+proData[i].pId+'"><img class="lazy" data-original="'+proData[i].img+'"></a>'+
					'<p>'+proData[i].des+'</p>'+
					'<b>￥'+proData[i].price+'</b>'+
				'</li>'
		};
		$(".product-list").eq(4).html(str);
		
		var str = "";
        for(var i=36;i<46;i++){
			str+='<li>'+
					'<a href="detail.html?pId='+proData[i].pId+'"><img class="lazy" data-original="'+proData[i].img+'"></a>'+
					'<p>'+proData[i].des+'</p>'+
					'<b>￥'+proData[i].price+'</b>'+
				'</li>'
		};
		$(".product-list").eq(5).html(str);
		
		$("img.lazy").lazyload({
           	effect : "fadeIn"
        });
		
		
	});
//产品楼层数据结束
	
	//返回顶部and//楼层
	scrollTop();
	$(window).scroll(function(){
		scrollTop();
	})
	
	$(".go-top img").click(function(){
		$("body,html").animate({"scrollTop":0})
	});
	
	
	$('.floor li').click(function(){
		var iT = $('.title').eq($(this).index()).offset().top;
		$("body,html").stop().animate({'scrollTop':iT-120});
	})
	
	
	function scrollTop(){
		var iScrollTop = $(window).scrollTop();
			//console.log(iScrollTop)
		if(iScrollTop>880){
			$(".go-top img").fadeIn();
			$('.floor').fadeIn();
		}else{
			$(".go-top img").fadeOut();
			$(".floor").fadeOut();
		};
	}
	
	
	
	
	shoppingNum();
	
	
	
	
	
	

})