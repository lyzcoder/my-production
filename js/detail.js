$(function(){
	
	
	//鼠标移入移出
	$('.more').hover(function(){
		$('.more-link').show();
	},function(){
		$('.more-link').hide();
	});
	
	$('.more-link').hover(function(){
		$('.more-link').show();
	},function(){
		$('.more-link').hide();
	});
	
	//放大镜
	var $bigPicWrap = $(".big-pic");
	var $moveBox = $(".move-box");
	var $blowUpWrap = $(".blowUp-pic")
	var $blowUpImg = $(".blowUp-pic img");
	
	var $offsetTop = $bigPicWrap.offset().top;
	var $offsetLeft = $bigPicWrap.offset().left;
	//console.log($offsetTop)
	//console.log($offsetLeft)
	
	$bigPicWrap.mouseover(function(){
		$blowUpWrap.show();
		$moveBox.show()
	});
	
	$bigPicWrap.mouseout(function(){
		$blowUpWrap.hide();
		$moveBox.hide()
	});
	
	$bigPicWrap.mousemove(function(ev){
		var iL = ev.pageX-$offsetLeft-50;
		var iT = ev.pageY-$offsetTop-50;
		//console.log(iL)
		//console.log(iT)
		iL = iL<=0?0:iL>=200?200:iL;
		iT = iT<=0?0:iT>=200?200:iT;	
		$moveBox.css({left:iL,top:iT})
		$blowUpImg.css({left:-iL*3/2,top:-iT*3/2})
	})
	
	
	//获取商品pId,换放大镜中的图片
	var url = window.location.href;
	var pId = url.split("?")[1].split("=")[1]

	$.get("json/product.json",function(data){
		//console.log(data)
		
		for(var i=0;i<data.length;i++){
			if(data[i].pId == pId){	
               
                var images = data[i].img;
                //console.log(images);
				
				$bigPicWrap.find("img").attr("src",images)
				$blowUpImg.attr("src",images)
				
				var str="";
				str+='<li><h3>'+data[i].name+'</h3></li>'+
						'<li>商品编号：'+data[i].pId+'</li>'+
						'<li>商品简介：'+data[i].des+'</li>'+
						'<li>价 格：<span>￥'+data[i].oldPrice+'</span> </li>'+
						'<li>商城价格：<strong>￥'+data[i].price+'</strong> </li>'+
						'<li class="pro-type">'+
							'<span>颜色：<b>黑色</b><b>白色</b></span>'+
							'<span>我要买：<input type="text" value="1" id="pro-num"/>个'+
								'<i>(下订单后立即发货)</i>'+
							'</span>'+
							'<a href="shoppingcart.html?pId='+data[i].pId+'">'+
							'<img class="buy-pro" id="'+data[i].pId+'" src="images/buy1.gif"/></a>'+
							'<img class="add-cart" id="'+data[i].pId+'" src="images/buy2.gif"/>'+
						'</li>'+
						'<li class="special">'+
							'累计出售：<b>206</b>件 收藏：<b>241</b>次 浏览：<b>176</b>次'+
						'</li>'				
			};
		};
			$(".text-detail ul").html(str);
			
			//购物车数量
		

			//添加购物车
			$('.add-cart').click(function(){
				//console.log($(this).get(0).id)
				var id = $(this).get(0).id
				fun(id);
			});

			$('.buy-pro').click(function(){
				//console.log($(this).get(0).id)
				var id = $(this).get(0).id
				fun(id);
			});

	
	});
	
	
	
	
	
	
	//tab切换加载数据开始
	$('.match ul li').click(function(){
		for(var i=0;i<2;i++){
			$('.match ul li').eq(i).removeClass("active")
			$(".match ol").eq(i).css({display:'none'})
		}
			$('.match ul li').eq($(this).index()).addClass("active");
			$(".match ol").eq($(this).index()).css({display:'block'});
			
			
		$.get("json/product.json",function(data){
			var str=""
			//console.log(data)
			for(var i=8;i<12;i++){
				str+='<li>'+
						'<a href="detail.html?pId='+data[i].pId+'" target="_blank">'+
						'<img src="'+data[i].img+'" /></a>'+
						'<p class="ov-ellipsis"><a href="javasscript:;">'+data[i].des+'</a></p>'+
						'<p>商城价：<span>￥'+data[i].price+'</span></p>'+
					'</li>'
			}
			$(".match ol").eq(1).html(str);
		});	
	});
	
	
		$.get("json/product.json",function(data){
			var str=""
			//console.log(data)
			for(var i=12;i<16;i++){
				str+='<li>'+
						'<a href="detail.html?pId='+data[i].pId+'" target="_blank">'+
						'<img src="'+data[i].img+'" /></a>'+
						'<p class="ov-ellipsis"><a href="javasscript:;">'+data[i].des+'</a></p>'+
						'<p>商城价：<span>￥'+data[i].price+'</span></p>'+
					'</li>'
			}
			$(".match ol").eq(0).html(str);		
		});
	//tab切换加载数据结束
	


		function fun(id){	
			//console.log(id)
			var first = $.cookie('goods')==null?true:false;//判断是否有cookie进行添加
			var same = false;//判断时候已经追加
			//是否是第一次添加
			if(first){
				//第一次添加,建立json结构。
				$.cookie('goods','[{id:'+id+',num:1}]');
				$.cookie('first','false');
			}else{
				var str = $.cookie('goods');
				var arr = eval(str);
				//遍历所有对象。如果id相同，让该商品数量递增 ;
				for(var attr in arr){
					if(arr[attr].id == id){		
						arr[attr].num = arr[attr].num + 1;  //让json结构中num自增。
						var cookieStr = JSON.stringify(arr);//将json对象转换成字符串.
						$.cookie('goods',cookieStr);
						same = true;
					}
				}
				//如果id不同，重新建立商品对象;
				
					if(!same){
						var obj  = {id:id,num:1};
						arr.push(obj);
						var cookieStr = JSON.stringify(arr);
						$.cookie('goods',cookieStr);
					};
			};
				shoppingNum();
		}
	

		function shoppingNum(){
			var sc_str = $.cookie('goods');
			if(sc_str){//如果购物车cookie不为空。
				var sc_obj = eval(sc_str);
				var sc_num = 0 ; 
				for(var i in sc_obj){
					sc_num = Number(sc_obj[i].num) + sc_num;
				}
				$(".car").find("span").html(sc_num);
			}
		}
	
})
